# Mon Application Vue3 avec Vite

Cette application est construite avec Vue3 et utilise Vite comme outil de développement rapide. Avec Docker Compose, vous pouvez facilement lancer l'application dans un environnement Dockerisé.

## Prérequis

Assurez-vous d'avoir installé les outils suivants sur votre machine avant de commencer :
- [Node.js](https://nodejs.org/) (version recommandée : 14.x)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Installation

1. Clonez ce dépôt sur votre machine locale :
    ```bash
    git clone https://github.com/Hackathon-M1-AL/Frontend mon-application-vue3
    ```

2. Accédez au répertoire de l'application :
    ```bash
    cd Frontend
    ```

3. Installez les dépendances Node.js :
    ```bash
    npm install
    ```

## Lancement de l'application en mode développement

Pour lancer l'application en mode développement avec Vite, exécutez la commande suivante :
```bash
npm run dev
```
Cela démarrera un serveur de développement local et ouvrira automatiquement votre navigateur par défaut avec l'application chargée.

## Docker Compose

Vous pouvez également lancer l'application dans un conteneur Docker en utilisant Docker Compose.
1. Assurez-vous que Docker est en cours d'exécution sur votre machine.
2. Utilisez Docker Compose pour construire et démarrer les conteneurs :
    ```bash
    docker-compose up --build
    ```
Cela va construire l'image Docker et démarrer le conteneur, rendant l'application accessible à l'adresse `http://localhost:8000` dans votre navigateur.

Oublié pas de lancé tous les autres services nécessaire pour le bon fonctionnement de l'application.

## Recommended Setup

- [VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (previously Volar) and disable Vetur

- Use [vue-tsc](https://github.com/vuejs/language-tools/tree/master/packages/tsc) for performing the same type checking from the command line, or for generating d.ts files for SFCs.

## Fonctionnalités de l'application

- Inscription sur l'application

- Connexion à l'application

- Consulter des catalogues de produits

- Consulter le détail d'un produit

- Ajout d'un produit dans le panier

- Gestion du panier

- Consulter l'historique des commandes
