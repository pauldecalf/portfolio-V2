# Dockerisation du Portfolio de Paul Decalf

Ce document explique comment exécuter et déployer l'application portfolio en utilisant Docker.

## Prérequis

- Docker
- Docker Compose

## Exécution locale avec Docker

1. Cloner le dépôt :
```bash
git clone https://github.com/pauldecalf/portfolio.git
cd portfolio
```

2. Construire et démarrer les conteneurs :
```bash
docker-compose up -d
```

3. Accéder à l'application à l'adresse [http://localhost:3000](http://localhost:3000)

## Configuration

Vous pouvez configurer l'application en créant un fichier `.env` basé sur le fichier `env.example` :
```bash
cp env.example .env
```

## Commandes utiles

- Construire l'image Docker :
```bash
docker build -t pauldecalf/portfolio .
```

- Arrêter les conteneurs :
```bash
docker-compose down
```

- Voir les logs :
```bash
docker-compose logs -f
```

## Déploiement en production

Pour déployer en production, vous pouvez utiliser Docker Compose :

1. Configurer les variables d'environnement de production dans un fichier `.env`
2. Exécuter :
```bash
docker-compose -f docker-compose.yml up -d
```

## Structure des fichiers Docker

- `Dockerfile` : Configuration pour construire l'image Docker
- `docker-compose.yml` : Configuration pour orchestrer les conteneurs
- `.dockerignore` : Liste des fichiers à ignorer lors de la construction de l'image 