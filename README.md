# Vertical Agrivoltaic Solar - UK Case Study

A comprehensive Next.js application showcasing the case for vertical agrivoltaic solar deployment in the UK, featuring Nordic research validation and detailed technical analysis.

## 🚀 Quick Start

### Development Mode (Hot Reloading)
For development with instant file updates without rebuilding:

```bash
# Using the helper script (recommended)
./dev.sh dev

# Or manually with Docker
docker run -p 9002:9002 \
  -v $(pwd):/app \
  -v /app/node_modules \
  -v /app/.next \
  --user $(id -u):$(id -g) \
  vertical-agrivoltaic-solar npm run dev
```

### Production Build & Run

1. **Build the Docker image:**
   ```bash
   ./dev.sh build
   # Or: docker build -t vertical-agrivoltaic-solar .
   ```

2. **Run the production container:**
   ```bash
   ./dev.sh prod
   # Or: docker run -p 9002:9002 vertical-agrivoltaic-solar
   ```

3. **Access the application:**
   Open [http://localhost:9002](http://localhost:9002) in your browser.

## 🛠 Development Workflow

### Helper Script Commands
The `dev.sh` script provides convenient commands:

```bash
./dev.sh dev    # Start development server with hot reloading
./dev.sh build  # Build production Docker image
./dev.sh prod   # Start production server
./dev.sh stop   # Stop all containers using port 9002
./dev.sh clean  # Clean up Docker system
```

### File Changes
When running in development mode, you can:
- ✅ Edit any file in `src/` and see changes instantly
- ✅ Modify data files in `src/data/` 
- ✅ Update components, pages, and styles
- ✅ Changes appear immediately without rebuilding

### Project Structure
- `src/app/` - Next.js pages and routing
- `src/components/` - Reusable UI components
- `src/data/` - Content data files (benefits, statistics, etc.)
- `src/lib/` - Utilities and configurations
