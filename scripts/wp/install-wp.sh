#!/bin/sh

#
# Bedrock wordpress installer with pro plugins for webpack base
#

# IMPORTANT : Must be called from project root

set -e

info() { echo -e "\033[0;36m> $1\033[0m"; }
warn() { echo -e "\033[0;33m> $1\033[0m"; }
err() { echo -e "\033[0;31m> $1\033[0m"; exit 1; }


info "Starting bedrock wordpress install..."

# Copy ci install wp script in root (for scripts/ci/build/default.sh to call it)
info "Copying composer-install.sh in root for CI build"
cp ./scripts/wp/composer-install.sh ./

# Bedrock install 
info "Installing bedrock project"
composer create-project roots/bedrock ./dist/api

# Custom composer 
info "Replacing bedrock composer.json with custom Cher Ami one"
rm ./dist/api/composer.json
rm ./dist/api/composer.lock
cp ./scripts/wp/composer.json ./dist/api/

# Install dependencies 
info "Installing dependencies"
chmod +x ./scripts/wp/install-wp-dependencies.sh
. ./scripts/wp/install-wp-dependencies.sh