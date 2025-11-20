#!/bin/bash

# Color mapping:
# #DDEB9D -> brand-light (light yellow-green)
# #A0C878 -> brand-light-green
# #27667B -> brand-teal
# #143D60 -> brand-navy

# Replace colors in all page files
find src/app -name "page.tsx" -type f -exec sed -i '
s/from-green-600/from-brand-light-green/g
s/to-green-600/to-brand-light-green/g
s/from-blue-600/from-brand-teal/g
s/to-blue-600/to-brand-teal/g
s/from-green-500/from-brand-light-green/g
s/to-emerald-500/to-brand-light-green/g
s/from-blue-500/from-brand-teal/g
s/to-cyan-500/to-brand-teal/g
s/from-purple-500/from-brand-navy/g
s/to-pink-500/to-brand-teal/g
s/bg-green-600/bg-brand-light-green/g
s/bg-blue-600/bg-brand-teal/g
s/bg-purple-600/bg-brand-navy/g
s/hover:bg-green-700/hover:bg-brand-light-green/g
s/hover:bg-blue-700/hover:bg-brand-teal/g
s/hover:bg-purple-700/hover:bg-brand-navy/g
s/text-green-600/text-brand-light-green/g
s/text-green-700/text-brand-light-green/g
s/text-blue-600/text-brand-teal/g
s/text-blue-700/text-brand-teal/g
s/text-purple-600/text-brand-navy/g
s/text-purple-700/text-brand-navy/g
s/text-green-400/text-brand-light-green/g
s/text-green-300/text-brand-light/g
s/text-blue-400/text-brand-teal/g
s/text-blue-300/text-brand-teal/g
s/text-purple-400/text-brand-navy/g
s/text-purple-300/text-brand-teal/g
s/from-green-400/from-brand-light-green/g
s/to-emerald-400/to-brand-light/g
s/from-blue-400/from-brand-teal/g
s/to-cyan-400/to-brand-teal/g
s/from-purple-400/from-brand-navy/g
s/to-pink-400/to-brand-teal/g
s/from-green-300/from-brand-light/g
s/to-emerald-300/to-brand-light-green/g
s/from-blue-300/from-brand-teal/g
s/to-cyan-300/to-brand-teal/g
s/from-purple-300/from-brand-navy/g
s/to-pink-300/to-brand-teal/g
s/from-green-200/from-brand-light/g
s/to-emerald-200/to-brand-light/g
s/from-blue-200/from-brand-teal/g
s/to-cyan-200/to-brand-teal/g
s/from-purple-200/from-brand-navy/g
s/to-pink-200/to-brand-teal/g
s/text-green-100/text-brand-light/g
s/border-green-600/border-brand-light-green/g
s/border-green-700/border-brand-light-green/g
s/hover:border-green-600/hover:border-brand-light-green/g
s/shadow-green-500/shadow-brand-light-green/g
s/shadow-blue-500/shadow-brand-teal/g
s/shadow-purple-500/shadow-brand-navy/g
s/from-green-50/from-brand-light\/20/g
s/to-blue-50/to-brand-teal\/20/g
s/from-brand-light-green-700/from-brand-light-green/g
s/hover:text-brand-teal-600/hover:text-brand-teal/g
s/hover:text-brand-light-green-600/hover:text-brand-light-green/g
' {} \;

echo "Color replacement complete!"
