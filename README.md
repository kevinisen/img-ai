# Image Recognition App – TensorFlow.js & COCO-SSD

## Description du projet

Ce projet est un prototype d’application web de reconnaissance d’images.  
Il permet d’analyser une image à partir d’une URL fournie par l’utilisateur et de détecter les objets présents dans cette image à l’aide du modèle pré-entraîné **COCO-SSD**, exécuté via **TensorFlow.js** directement dans le navigateur.

L’objectif du projet est de démontrer l’utilisation d’un modèle de vision par ordinateur en environnement web sans recourir à un serveur de traitement.

---

## Architecture de l’application

L’application repose sur une architecture simple orientée client (front-end only).  
L’ensemble du traitement de reconnaissance d’image est effectué côté navigateur.

### Schéma de l’architecture

![Schéma de l’architecture](assets/readme/architecture.png)

### Description des composants

-   **Utilisateur**

    -   Interagit avec l’application via un navigateur web.

-   **Interface Web**

    -   Permet la saisie de l’URL de l’image.
    -   Affiche l’image à analyser et les résultats de détection.
    -   Technologies utilisées : HTML, CSS, JavaScript.

-   **TensorFlow.js**

    -   Bibliothèque JavaScript permettant l’exécution de modèles de machine learning dans le navigateur.

-   **COCO-SSD**
    -   Modèle de détection d’objets pré-entraîné.
    -   Identifie différents types d’objets (personnes, véhicules, animaux, objets du quotidien, etc.).

Aucune base de données ni serveur back-end n’est nécessaire pour ce prototype.

---

## Flux de fonctionnement de l’application

Le fonctionnement de l’application se déroule selon les étapes suivantes :

1. L’utilisateur accède à l’application via son navigateur.
2. Il saisit l’URL d’une image dans le champ prévu à cet effet.
3. L’application charge l’image à partir de l’URL fournie.
4. TensorFlow.js initialise le modèle COCO-SSD.
5. Le modèle analyse l’image chargée.
6. Les objets présents dans l’image sont détectés.
7. Pour chaque objet, le modèle retourne :
    - le type d’objet détecté,
    - sa position dans l’image,
    - un score de confiance.
8. Les résultats sont affichés visuellement sur l’image dans l’interface utilisateur.

---

## Technologies utilisées

-   HTML / CSS / JavaScript
-   TensorFlow.js
-   COCO-SSD
