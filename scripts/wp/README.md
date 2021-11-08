# CherAmi - Wordpress Headless Install scripts

## A propos

Scripts d'installation pour setup wordpress bedrock avec la [base webpack](https://github.com/cher-ami/webpack-base).

Ce que l'installeur fait : 
- Installe wordpress avec [Bedrock](https://github.com/roots/bedrock) 
- Installe les plugins de base : acf-pro, wp-cerber, wp-migrate-db, simple-custom-post-order, gcs et wpml-multilingual-cms (optionnel)
- Copie le script de ci `composer-install.sh` à la racine du projet pour le build CI
- Copie le .env à la racine de l'install pour la config bedrock

## Installation

### Setup du projet wordpress

Etapes d'installations une fois la base webpack setup :

- Cloner le projet dans le dossier `/scripts/wp/` :
```shell script
$ mkdir -p scripts && cd scripts && git clone ssh://git@gitlab.cher-ami.tv:2222/interne/wordpress-install-scripts.git wp && rm -rf wp/.git
```

- Ajouter le contenu de `/scripts/wp/.env.bedrock.example` à la fin de `/.env`
- Créer une base de donnée vide ([documentation](https://gitlab.cher-ami.tv/interne/infra/-/wikis/Initialisation-d'une-base-de-donn%C3%A9es-MySQL-avec-utilisateur-d%C3%A9di%C3%A9))
- Compléter les infos spécifiques au projet dans le `./.env`
- Changer la config du .env comme suit : 
```php
...
# Prebuild .env file
PREBUILD_DOTENV=true
...
```
- Dans `global.config.js` définir les parametres suivants pour les chemins de compilation :

```shell
  ...
  outputPath: paths.public, # Chemin du dossier pour le build de l'app front
  envPath: paths.bo, # Chemin du dossier pour le .env généré
  ...
```

- Activer si besoin l'installation de WPML avec `WPML_INSTALL=true` dans `script/wp/.env.plugin`
- Lancer l'installation à la racine du projet :
```shell script
$ ./scripts/wp/install-wp.sh
```

⚠ Dans `.gitignore ` remplacer `dist` par `dist/public`

### Installation des dépendances uniquement 

Pour installer les dépendances avec le composer.json (plugins..etc) dans le cas ou wordpress bedrock est déjà installé : 
```shell script
$ ./scripts/wp/install-wp-dependencies.sh
```

### CI

L'installation des dépendances se fait avec le script copié à la racine : `composer-install.sh`.

Aller dans : `Settings > CI/CD > Variables` et ajouter les variables suivantes pour l'installation des plugins pro : 
- `ACF_PRO_KEY` 
- `WPML_KEY`
- `WPML_USER_ID`

Valeurs dans `.env.plugins`


**TODO**: add instructions for lamp & staging & prod ci (s'inspirer de generali)


### Installation theme Cher Ami

```shell script
$ cd ./dist/api/web/app/themes/ && git clone ssh://git@gitlab.cher-ami.tv:2222/interne/wordpress-base-theme.git CherAmi && rm -rf CherAmi/.git
```

### Post-installation

Dans `Réglages > Réglage des permaliens`, changer le type de lien à `Titre de la publication`.

## Requirements

- PHP >= 7.3
- Composer - [Install](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-osx)
