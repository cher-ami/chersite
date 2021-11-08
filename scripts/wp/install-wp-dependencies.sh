#!/bin/sh

#
# Bedrock wordpress dependencies local installer for webpack base
#

# IMPORTANT : Must be called from project root

set -e

info() { echo -e "\033[0;36m> $1\033[0m"; }
warn() { echo -e "\033[0;33m> $1\033[0m"; }
err() { echo -e "\033[0;31m> $1\033[0m"; exit 1; }

# Export keys for pro plugins
info "Exporting vars via .env"
export $(grep -v '^#' ./scripts/wp/.env.plugins | xargs)

# Composer install
info "Composer install..."
cd ./dist/api
composer install

# Install wpml
if [[ $WPML_INSTALL == "true" ]] ;then
    info "Replace plugin keys for wpml..."
    sed -i'.backup' "s/{{WPML_USER_ID}}/$WPML_USER_ID/g; s/{{WPML_KEY}}/$WPML_KEY/g" composer.json
    composer require wpml/wpml-multilingual-cms
    rm composer.json
    mv composer.json.backup composer.json
fi

cd ../../

# Copy root .env in /dist/api
info "Copying .env in dist/api for bedrock config"
cp ./.env ./dist/api/

info "Done"
