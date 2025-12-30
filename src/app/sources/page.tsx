import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, BookOpen, Database, FileText } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research Sources & References | Harvesting the Sun Twice',
  description: 'Comprehensive list of peer-reviewed research and data sources supporting VBPV agrivoltaic analysis.',
};

export default function SourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-brand-light/10">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge className="mb-6 bg-gradient-to-r from-brand-navy to-brand-teal text-white px-4 py-2">
            <BookOpen className="w-4 h-4 mr-2 inline" />
            Research Foundation
          </Badge>
          <h1 className="text-4xl md:text-6xl font-headline font-bold mb-6 bg-gradient-to-r from-brand-navy via-brand-teal to-brand-light-green bg-clip-text text-transparent">
            Research Sources & References
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            All claims and projections on this website are grounded in peer-reviewed research, 
            government data, and industry analysis. This page provides complete citations and methodology transparency.
          </p>
        </div>

        {/* Peer-Reviewed Research */}
        <section className="mb-12">
          <Card className="border-l-4 border-brand-navy">
            <CardHeader>
              <CardTitle className="text-3xl font-headline flex items-center">
                <FileText className="w-8 h-8 mr-3 text-brand-navy" />
                Peer-Reviewed Research
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Primary UK Study */}
              <div>
                <h3 className="text-2xl font-bold text-brand-navy mb-3">Primary UK Study</h3>
                <div className="bg-brand-light/10 rounded-lg p-6 space-y-3">
                  <p className="font-semibold text-lg">
                    Badran, G., & Dhimish, M. (2024). "Comprehensive study on the efficiency of vertical 
                    bifacial photovoltaic systems: a UK case study."
                  </p>
                  <p className="text-muted-foreground">
                    <em>Scientific Reports</em>, 14, 18380.
                  </p>
                  <a 
                    href="https://doi.org/10.1038/s41598-024-68018-1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-brand-teal hover:text-brand-navy transition-colors font-medium"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    https://doi.org/10.1038/s41598-024-68018-1
                  </a>
                  <div className="mt-4 p-4 bg-white rounded border-l-4 border-brand-teal">
                    <p className="font-medium text-brand-navy mb-2">Key Findings Used:</p>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Annual energy output: 119-122% of TMPV (University of York 2024)</li>
                      <li>Winter generation: 125% of TMPV (24.52% higher output)</li>
                      <li>Morning peak energy capture: +26.91% higher daily energy</li>
                      <li>Evening peak energy capture: +22.88% higher daily energy</li>
                      <li>Duck curve severity: 57% less severe than TMPV</li>
                      <li>Seasonal variations: Spring 19.32%, Summer 14.77%, Autumn 20.27%, Winter 24.52%</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Nordic Research */}
              <div>
                <h3 className="text-2xl font-bold text-brand-teal mb-3">Nordic Research</h3>
                <div className="space-y-4">
                  <div className="bg-brand-teal/10 rounded-lg p-6">
                    <p className="font-semibold text-lg mb-2">
                      Joutijärvi, S., Karimpour, M., Santamouris, M., Hasan, A., & Vuorinen, V. (2023). 
                      "A comprehensive methodological workflow to maximize solar energy in low-voltage grids: 
                      A case study of vertical bifacial panels in Nordic conditions."
                    </p>
                    <p className="text-muted-foreground mb-3">
                      <em>Solar Energy</em>, 262, 111819.
                    </p>
                    <a 
                      href="https://doi.org/10.1016/j.solener.2023.111819" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-brand-teal hover:text-brand-navy transition-colors font-medium"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      https://doi.org/10.1016/j.solener.2023.111819
                    </a>
                    <div className="mt-4 p-4 bg-white rounded border-l-4 border-brand-teal">
                      <p className="font-medium text-brand-navy mb-2">Key Findings Used:</p>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Grid hosting capacity increase: +46%</li>
                        <li>Reduced overvoltage risk from distributed generation timing</li>
                        <li>Better load matching reduces voltage fluctuations</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-brand-teal/10 rounded-lg p-6">
                    <p className="font-semibold text-lg mb-2">
                      University of Turku (Finland) & Norwegian University of Science and Technology (NTNU). (2022). 
                      "Benefits of bifacial solar cells combined with low voltage power grids at high latitudes."
                    </p>
                    <p className="text-muted-foreground mb-3">
                      <em>Renewable and Sustainable Energy Reviews</em>, March 2022.
                    </p>
                    <div className="mt-4 p-4 bg-white rounded border-l-4 border-brand-teal">
                      <p className="font-medium text-brand-navy mb-2">Key Findings Used:</p>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Grid infrastructure savings: £600M-£1,150M</li>
                        <li>15-20% cost reduction in total solar deployment costs</li>
                        <li>Reduced need for grid reinforcement</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Agricultural Research */}
              <div>
                <h3 className="text-2xl font-bold text-brand-light-green mb-3">Agricultural & Agrivoltaic Research</h3>
                <div className="bg-green-50 rounded-lg p-6">
                  <p className="font-semibold text-lg mb-2">
                    Riaz, M. H., Imran, H., Younas, R., Alam, M. A., & Butt, N. Z. (2021). 
                    "Module technology for agrivoltaics: Vertical bifacial versus tilted monofacial farms."
                  </p>
                  <p className="text-muted-foreground mb-3">
                    <em>IEEE Journal of Photovoltaics</em>, 11(2), 469-477.
                  </p>
                  <a 
                    href="https://doi.org/10.1109/JPHOTOV.2020.3048225" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-brand-teal hover:text-brand-navy transition-colors font-medium"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    https://doi.org/10.1109/JPHOTOV.2020.3048225
                  </a>
                  <div className="mt-4 p-4 bg-white rounded border-l-4 border-brand-light-green">
                    <p className="font-medium text-brand-navy mb-2">Key Findings Used:</p>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>95-100% agricultural productivity maintained with vertical configurations</li>
                      <li>10-12m row spacing allows full machinery access</li>
                      <li>Minimal ground coverage (&lt;5%) from vertical mounting posts</li>
                    </ul>
                  </div>
                  <div className="mt-4 p-4 bg-blue-50 rounded">
                    <p className="font-medium text-sm">
                      <strong>Additional Source:</strong> Next2Sun field study data - Operational agrivoltaic installations 
                      demonstrating maintained agricultural productivity with standard farming equipment.
                    </p>
                  </div>
                </div>
              </div>

              {/* Biodiversity Research */}
              <div>
                <h3 className="text-2xl font-bold text-green-700 mb-3">Biodiversity Research</h3>
                <div className="bg-green-50 rounded-lg p-6">
                  <p className="font-semibold text-lg mb-2">
                    Copping, J., Dadam, D., Saunders, P., Christie, A., & Hawkins, S. (2025). 
                    "Solar farm management influences breeding bird responses in an arable-dominated landscape."
                  </p>
                  <p className="text-muted-foreground mb-3">
                    <em>Bird Study</em> (RSPB/University of Cambridge).
                  </p>
                  <div className="mt-4 p-4 bg-white rounded border-l-4 border-green-600">
                    <p className="font-medium text-brand-navy mb-2">Key Findings Used:</p>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Up to 3× bird abundance on well-managed solar farm sites vs intensive farming</li>
                      <li>Management practices critical to biodiversity outcomes</li>
                      <li>Mixed-habitat solar farms can support diverse bird communities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Data Sources */}
        <section className="mb-12">
          <Card className="border-l-4 border-brand-teal">
            <CardHeader>
              <CardTitle className="text-3xl font-headline flex items-center">
                <Database className="w-8 h-8 mr-3 text-brand-teal" />
                UK Government & Industry Data Sources
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-2">UK Renewable Energy Planning Database (REPD)</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Department for Energy Security and Net Zero (DESNZ)
                  </p>
                  <p className="text-sm mb-3">
                    Source for pipeline data: 1,546 ground-mounted solar projects (35.7 GW) under construction, 
                    awaiting construction, or in planning as of December 2024.
                  </p>
                  <a 
                    href="https://www.gov.uk/government/publications/renewable-energy-planning-database-monthly-extract" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-brand-teal hover:text-brand-navy transition-colors font-medium text-sm"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View REPD Database
                  </a>
                </div>

                <div className="bg-slate-50 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-2">National Grid Future Energy Scenarios</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    National Grid ESO
                  </p>
                  <p className="text-sm mb-3">
                    UK energy demand patterns, grid infrastructure requirements, and renewable energy integration scenarios.
                  </p>
                  <a 
                    href="https://www.nationalgrideso.com/future-energy/future-energy-scenarios" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-brand-teal hover:text-brand-navy transition-colors font-medium text-sm"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View FES Reports
                  </a>
                </div>

                <div className="bg-slate-50 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-2">DESNZ Solar Roadmap</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Department for Energy Security and Net Zero
                  </p>
                  <p className="text-sm mb-3">
                    UK government solar deployment targets and policy framework for renewable energy expansion.
                  </p>
                  <a 
                    href="https://www.gov.uk/government/publications/solar-roadmap" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-brand-teal hover:text-brand-navy transition-colors font-medium text-sm"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Solar Roadmap
                  </a>
                </div>

                <div className="bg-slate-50 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-2">Ofgem Market Data</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Office of Gas and Electricity Markets
                  </p>
                  <p className="text-sm mb-3">
                    Electricity wholesale prices, grid balancing costs, and infrastructure investment data.
                  </p>
                  <a 
                    href="https://www.ofgem.gov.uk/energy-data-and-research" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-brand-teal hover:text-brand-navy transition-colors font-medium text-sm"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Market Data
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Methodology Link */}
        <section>
          <Card className="bg-gradient-to-r from-brand-navy to-brand-teal text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Economic Analysis Methodology</h3>
              <p className="mb-6 text-white/90">
                For detailed information on how economic projections were calculated, including assumptions, 
                sensitivity analysis, and calculation methods, please see our methodology page.
              </p>
              <a 
                href="/methodology" 
                className="inline-flex items-center bg-white text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-brand-light transition-colors"
              >
                View Methodology Documentation
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
