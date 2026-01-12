let model

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("loadBtn").addEventListener("click", chargerImage)

    chargerModele()
})

async function chargerModele() {
    model = await cocoSsd.load()
    console.log("✅ Modèle COCO-SSD chargé")
}

function chargerImage() {
    const url = document.getElementById("imageUrl").value
    const img = document.getElementById("image")
    const results = document.getElementById("results")
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")

    // 🔄 Reset affichage
    results.innerHTML = ""
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    canvas.width = 0
    canvas.height = 0
    img.src = ""

    img.onload = async () => {
        if (!model) {
            alert("❌ Le modèle n’est pas encore chargé")
            return
        }

        const predictions = await model.detect(img)
        afficherResultats(predictions)
        dessinerCadres(predictions)
    }

    img.onerror = () => {
        alert(
            "❌ Impossible de charger l’image.\n" +
                "Elle est peut-être bloquée par CORS ou invalide."
        )
    }

    img.src = url
}

function afficherResultats(predictions) {
    const results = document.getElementById("results")

    if (predictions.length === 0) {
        results.innerHTML = "<li>Aucun objet détecté</li>"
        return
    }

    predictions.forEach((prediction) => {
        const li = document.createElement("li")
        li.textContent = `${prediction.class} — ${(
            prediction.score * 100
        ).toFixed(1)} %`
        results.appendChild(li)
    })
}

function dessinerCadres(predictions) {
    const img = document.getElementById("image")
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")

    canvas.width = img.width
    canvas.height = img.height

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    predictions.forEach((prediction) => {
        const [x, y, width, height] = prediction.bbox

        ctx.strokeStyle = "green"
        ctx.lineWidth = 2
        ctx.strokeRect(x, y, width, height)

        const label = `${prediction.class} (${(prediction.score * 100).toFixed(
            1
        )}%)`

        ctx.fillStyle = "green"
        ctx.font = "16px Arial"
        ctx.fillText(label, x, y > 20 ? y - 5 : y + 20)
    })
}
