#!/bin/sh

# Install script ci for Bedrock wordpress dependencies
# 
#
# Env variables to define :
# - ACF_PRO_KEY: clé serial pour activation acf pro
# - WPML_USER_ID: (optionel) id utilisateur pour wpml
# - WPML_KEY: (optionel) clé serial pour wpml
#
set -e

info() { echo -e "\033[0;36m> $1\033[0m"; }
warn() { echo -e "\033[0;33m> $1\033[0m"; }
err() { echo -e "\033[0;31m> $1\033[0m"; exit 1; }

info "Starting bedrock composer install..."

info "Checking mandatory environment variables..."

[ -z "$ACF_PRO_KEY" ] && warn "ACF_PRO_KEY is not defined.";

cd ./dist/api

# Install with wpml
if ! ( [ -z "$WPML_USER_ID" ] && [ -z "$WPML_KEY" ] ); then
    info "Replace plugin keys for wpml..."
    sed -i'.backup' "s/{{WPML_USER_ID}}/$WPML_USER_ID/g; s/{{WPML_KEY}}/$WPML_KEY/g" composer.json    
fi

info "Composer install..."
composer install

info "Composer update..."
composer update

if ! ( [ -z "$WPML_USER_ID" ] && [ -z "$WPML_KEY" ] ); then
 rm composer.json
 mv composer.json.backup composer.json
fi

info "Done"