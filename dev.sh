#!/bin/bash

# Development helper script for Vertical Agrivoltaic Solar project

case "$1" in
  "dev")
    echo "Starting development server with hot reloading..."
    docker run -p 9002:9002 \
      -v $(pwd):/app \
      -v /app/node_modules \
      -v /app/.next \
      --user $(id -u):$(id -g) \
      vertical-agrivoltaic-solar npm run dev
    ;;
  
  "build")
    echo "Building production Docker image..."
    docker build -t vertical-agrivoltaic-solar .
    ;;
    
  "prod")
    echo "Starting production server..."
    docker run -p 9002:9002 vertical-agrivoltaic-solar
    ;;
    
  "stop")
    echo "Stopping all containers using port 9002..."
    docker ps -q --filter "publish=9002" | xargs -r docker stop
    ;;
    
  "clean")
    echo "Cleaning up Docker images and containers..."
    docker system prune -f
    ;;
    
  *)
    echo "Usage: $0 {dev|build|prod|stop|clean}"
    echo ""
    echo "Commands:"
    echo "  dev   - Start development server with hot reloading"
    echo "  build - Build production Docker image"
    echo "  prod  - Start production server"
    echo "  stop  - Stop all containers using port 9002"
    echo "  clean - Clean up Docker system"
    exit 1
    ;;
esac