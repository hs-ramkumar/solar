#!/bin/bash

# Development helper script for Harvesting the Sun Twice project

case "$1" in
  "dev")
    echo "Starting development server with hot reloading..."
    # Remove .next directory to avoid permission issues
    rm -rf .next
    # Use docker-compose for development
    docker compose -f docker-compose.dev.yml up
    ;;

  "dev-build")
    echo "Rebuilding and starting development server..."
    rm -rf .next
    docker compose -f docker-compose.dev.yml build --no-cache
    docker compose -f docker-compose.dev.yml up
    ;;

  "build")
    echo "Building production Docker image..."
    docker build -t solar-app .
    ;;

  "prod")
    echo "Starting production server..."
    docker run -p 9002:9002 solar-app
    ;;

  "stop")
    echo "Stopping all containers..."
    docker compose -f docker-compose.dev.yml down
    docker ps -q --filter "publish=9002" | xargs -r docker stop
    ;;

  "clean")
    echo "Cleaning up Docker images and containers..."
    docker compose -f docker-compose.dev.yml down -v
    docker system prune -f
    rm -rf .next
    ;;

  *)
    echo "Usage: $0 {dev|dev-build|build|prod|stop|clean}"
    echo ""
    echo "Commands:"
    echo "  dev       - Start development server with hot reloading"
    echo "  dev-build - Rebuild and start development server"
    echo "  build     - Build production Docker image"
    echo "  prod      - Start production server"
    echo "  stop      - Stop all containers"
    echo "  clean     - Clean up Docker system and build artifacts"
    exit 1
    ;;
esac