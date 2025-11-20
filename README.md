# Harvesting the Sun Twice - UK Case Study

A comprehensive Next.js application showcasing the case for Harvesting the Sun Twice deployment in the UK, featuring Nordic research validation and detailed technical analysis.

## Quick Start

### Development Mode (Hot Reloading)
For development with instant file updates without rebuilding:

```bash
# Using the helper script (recommended)
./dev.sh dev

# Or manually with Docker Compose
docker compose -f docker-compose.dev.yml up
```

### Helper Script Commands
The `dev.sh` script provides convenient commands:

```bash
./dev.sh dev        # Start development server with hot reloading
./dev.sh dev-build  # Rebuild and start development server
./dev.sh build      # Build production Docker image
./dev.sh prod       # Start production server
./dev.sh stop       # Stop all containers
./dev.sh clean      # Clean up Docker system and build artifacts
```

### Project Structure
- `src/app/` - Next.js pages and routing
- `src/components/` - Reusable UI components
- `src/data/` - Content data files (benefits, statistics, etc.)
- `src/lib/` - Utilities and configurations

### Production Build & Run

1. **Build the Docker image:**
   ```bash
   ./dev.sh build
   # Or: docker build -t solar-app .
   ```

2. **Run the production container:**
   ```bash
   ./dev.sh prod
   # Or: docker run -p 9002:9002 solar-app
   ```

3. **Access the application:**
   Open [http://localhost:9002](http://localhost:9002) in your browser.
