#!/bin/bash

# Additional color replacements for all files
find src -name "*.tsx" -type f -exec sed -i '
s/hover:from-green-700/hover:from-brand-light-green/g
s/hover:to-blue-700/hover:to-brand-teal/g
s/bg-green-500/bg-brand-light-green/g
s/bg-blue-500/bg-brand-teal/g
s/bg-purple-500/bg-brand-navy/g
s/from-green-100/from-brand-light\/30/g
s/to-blue-100/to-brand-teal\/30/g
s/from-blue-100/from-brand-teal\/30/g
s/to-cyan-100/to-brand-teal\/40/g
s/from-purple-100/from-brand-navy\/30/g
s/to-pink-100/to-brand-teal\/30/g
s/from-green-50/from-brand-light\/10/g
s/to-emerald-100/to-brand-light\/30/g
s/from-blue-50/from-brand-teal\/10/g
s/to-cyan-50/to-brand-teal\/10/g
s/bg-green-50/bg-brand-light\/10/g
s/bg-blue-50/bg-brand-teal\/10/g
s/bg-purple-50/bg-brand-navy\/10/g
s/border-green-500/border-brand-light-green/g
s/border-blue-500/border-brand-teal/g
s/border-green-200/border-brand-light-green\/50/g
s/border-blue-200/border-brand-teal\/50/g
s/border-purple-200/border-brand-navy\/50/g
s/text-green-500/text-brand-light-green/g
s/text-green-800/text-brand-light-green/g
s/text-green-900/text-brand-navy/g
s/text-blue-800/text-brand-teal/g
s/text-blue-900/text-brand-navy/g
s/text-purple-800/text-brand-navy/g
s/bg-green-100/bg-brand-light\/20/g
s/from-green-100/from-brand-light\/20/g
s/to-emerald-100/to-brand-light-green\/20/g
' {} \;

echo "Additional color replacement complete!"
