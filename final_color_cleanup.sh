#!/bin/bash

# Final cleanup of specific color references
find src -name "*.tsx" -type f -exec sed -i '
s/to-cyan-600/to-brand-teal/g
s/from-emerald-600/from-brand-light-green/g
s/to-emerald-600/to-brand-light-green/g
s/border-emerald-500/border-brand-light-green/g
s/border-4 border-brand-light-green/border-4 border-brand-light-green/g
' {} \;

echo "Final color cleanup complete!"
