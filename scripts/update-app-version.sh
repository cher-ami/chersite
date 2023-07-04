#!/bin/bash

# Mise à jour des versions des packages et des tags git associés (root, front, back)
#
# Usage: ./script/update-version.sh <patch|minor|major>

# Update the version in the root package.json
npm version "$VERSION_TYPE" --no-git-tag-version

# Get the updated version number
NEW_VERSION=$(node -p "require('./package.json').version")

if [ "$#" -ne 1 ]; then
    echo "Usage: $0 <patch|minor|major>"
    exit 1
fi

VERSION_TYPE=$1

# cd to the root of the repo $(dirname "$0")/.."
cd "$(dirname "$0")/.."

# Update the version in the root package.json
npm version "$VERSION_TYPE" --no-git-tag-version

# Get the updated version number
NEW_VERSION=$(node -p "require('./package.json').version")

# Update the versions in the /apps/front and /apps/api package.json files
(
    # Update the version in the front app package.json
    cd apps/front
    if ! npm version "$NEW_VERSION" --no-git-tag-version; then
        echo "Failed to update front app version"
        exit 1
    fi
)

(
    # Update the version in the back app package.json
    cd apps/back
    if ! npm version "$NEW_VERSION" --no-git-tag-version; then
        echo "Failed to update back app version"
        exit 1
    fi
)

return 0
# Commit the changes and create a tag with the version name
git add -A
git commit -m "Bump version to $NEW_VERSION"
git tag "v$NEW_VERSION"

echo "Version updated to $NEW_VERSION and tagged with v$NEW_VERSION"
