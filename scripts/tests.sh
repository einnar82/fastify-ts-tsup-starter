#!/bin/sh

. ./scripts/check-docker.sh

docker compose run --rm backend pnpm test