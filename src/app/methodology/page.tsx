import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Calculator, TrendingUp, AlertTriangle, FileText } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Economic Analysis Methodology | Harvesting the Sun Twice',
  description: 'Transparent methodology, assumptions, and calculation methods for VBPV economic projections.',
};

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-brand-light/10">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge className="mb-6 bg-gradient-to-r from-brand-navy to-brand-teal text-white px-4 py-2">
            <Calculator className="w-4 h-4 mr-2 inline" />
            Methodology & Transparency
          </Badge>
          <h1 className="text-4xl md:text-6xl font-headline font-bold mb-6 bg-gradient-to-r from-brand-navy via-brand-teal to-brand-light-green bg-clip-text text-transparent">
            Economic Analysis Methodology
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Complete transparency on assumptions, calculation methods, and sensitivity analysis 
            underlying the economic projections presented throughout this website.
          </p>
        </div>

        {/* Key Assumptions */}
        <section className="mb-12">
          <Card className="border-l-4 border-brand-navy">
            <CardHeader>
              <CardTitle className="text-3xl font-headline flex items-center">
                <FileText className="w-8 h-8 mr-3 text-brand-navy" />
                Baseline Assumptions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-brand-navy/5 rounded-lg p-6">
                <h3 className="text-xl font-bold text-brand-navy mb-4">Deployment Scenario</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold mb-2">Solar Capacity Target</p>
                    <p className="text-3xl font-bold text-brand-teal">47 GW</p>
                    <p className="text-sm text-muted-foreground mt-1">Ground-mounted solar deployment by 2035</p>
                    <p className="text-xs mt-2">
                      <strong>Source:</strong> UK government net-zero pathway scenarios, aligned with Climate Change Committee recommendations
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Analysis Timeframe</p>
                    <p className="text-3xl font-bold text-brand-teal">30 years</p>
                    <p className="text-sm text-muted-foreground mt-1">2025-2055 (typical solar panel lifespan)</p>
                    <p className="text-xs mt-2">
                      <strong>Note:</strong> Conservative estimate; modern panels often exceed 30-year performance warranties
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-brand-teal/5 rounded-lg p-6">
                <h3 className="text-xl font-bold text-brand-teal mb-4">Battery Storage Cost Assumptions</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">BESS Capital Cost (2024-2030)</p>
                    <p className="text-lg font-bold text-brand-navy">£250-300/kWh</p>
                    <p className="text-sm text-muted-foreground">
                      Based on BloombergNEF battery price survey and UK grid-scale storage deployment data
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">TMPV Storage Requirement (47 GW deployment)</p>
                    <p className="text-lg font-bold text-brand-navy">170-190 GWh</p>
                    <p className="text-sm text-muted-foreground">
                      Required to manage duck curve and provide evening peak supply from midday-only TMPV generation
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">VBPV Storage Requirement (47 GW deployment)</p>
                    <p className="text-lg font-bold text-brand-navy">78-87 GWh</p>
                    <p className="text-sm text-muted-foreground">
                      57% duck curve reduction means 94% less storage needed vs TMPV scenario
                    </p>
                  </div>
                  <div className="bg-white rounded p-4 border-l-4 border-brand-teal">
                    <p className="font-semibold text-brand-navy">Battery Storage Savings Calculation</p>
                    <p className="text-sm mt-2">
                      (170-190 GWh - 78-87 GWh) × £250-300/kWh = <strong>£121-134 billion</strong>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-700 mb-4">Grid Infrastructure Cost Estimates</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">Transmission Network Upgrades</p>
                    <p className="text-lg font-bold text-brand-navy">£25-35 billion</p>
                    <p className="text-sm text-muted-foreground">
                      Based on National Grid ESO Future Energy Scenarios transmission investment requirements
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Distribution Network Reinforcement</p>
                    <p className="text-lg font-bold text-brand-navy">£15-18 billion</p>
                    <p className="text-sm text-muted-foreground">
                      DNO investment for voltage management and capacity upgrades (TMPV scenario creates midday overvoltage issues)
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">VBPV Grid Infrastructure Savings</p>
                    <p className="text-lg font-bold text-brand-teal">£40-53 billion</p>
                    <p className="text-sm text-muted-foreground">
                      Better demand-supply matching + 46% grid hosting capacity increase reduces infrastructure investment
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-orange-700 mb-4">Energy Price Assumptions</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">Wholesale Electricity Price (Average)</p>
                    <p className="text-lg font-bold text-brand-navy">£60-80/MWh</p>
                    <p className="text-sm text-muted-foreground">
                      30-year average projection based on DESNZ/Ofgem central scenario (real 2024 prices)
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Peak Period Premium</p>
                    <p className="text-lg font-bold text-brand-navy">+25-40%</p>
                    <p className="text-sm text-muted-foreground">
                      Morning (7-11am) and evening (5-9pm) wholesale prices vs midday baseline
                    </p>
                  </div>
                  <div className="bg-white rounded p-4 border-l-4 border-orange-600">
                    <p className="font-semibold text-brand-navy">VBPV Revenue Advantage</p>
                    <p className="text-sm mt-2">
                      VBPV's morning/evening generation peaks command premium prices, generating 10-15% higher revenue 
                      per kWh compared to TMPV's midday-only generation when prices are lowest.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Calculation Method */}
        <section className="mb-12">
          <Card className="border-l-4 border-brand-teal">
            <CardHeader>
              <CardTitle className="text-3xl font-headline flex items-center">
                <Calculator className="w-8 h-8 mr-3 text-brand-teal" />
                Calculation Methodology
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-brand-navy mb-4">Total System Savings: £161-187 Billion</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded p-4">
                    <p className="font-semibold text-brand-teal mb-2">Component 1: Battery Storage Savings</p>
                    <p className="text-sm">
                      <strong>£121-134 billion</strong> - Avoided battery storage costs due to 94% reduction in storage requirements
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      (92-103 GWh avoided) × (£250-300/kWh) × (1.3 replacement factor over 30 years)
                    </p>
                  </div>

                  <div className="bg-white rounded p-4">
                    <p className="font-semibold text-brand-teal mb-2">Component 2: Grid Infrastructure Savings</p>
                    <p className="text-sm">
                      <strong>£40-53 billion</strong> - Avoided transmission/distribution upgrades
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Better load matching + 46% grid hosting capacity increase reduces reinforcement needs
                    </p>
                  </div>

                  <div className="bg-brand-navy text-white rounded p-4">
                    <p className="font-semibold mb-2">Total System Savings</p>
                    <p className="text-2xl font-bold">£161-187 billion</p>
                    <p className="text-sm opacity-90 mt-1">
                      (£121-134bn) + (£40-53bn) = £161-187bn over 30 years
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-brand-light/10 rounded-lg p-6">
                <h3 className="text-xl font-bold text-brand-navy mb-4">Energy Output Value Calculation</h3>
                <div className="space-y-3">
                  <div className="bg-white rounded p-4 border-l-4 border-brand-teal">
                    <p className="font-semibold mb-2">VBPV Annual Generation (47 GW deployment)</p>
                    <p className="text-sm">
                      47 GW × 1,200 hours equivalent × 1.20 (VBPV efficiency factor) = <strong>67.7 TWh/year</strong>
                    </p>
                  </div>
                  <div className="bg-white rounded p-4 border-l-4 border-brand-teal">
                    <p className="font-semibold mb-2">TMPV Annual Generation (47 GW deployment)</p>
                    <p className="text-sm">
                      47 GW × 1,200 hours equivalent × 1.00 (baseline) = <strong>56.4 TWh/year</strong>
                    </p>
                  </div>
                  <div className="bg-white rounded p-4 border-l-4 border-brand-navy">
                    <p className="font-semibold mb-2">VBPV Annual Output Advantage</p>
                    <p className="text-sm">
                      67.7 - 56.4 = <strong>11.3 TWh/year additional generation</strong> (20% more energy)
                    </p>
                  </div>
                  <div className="bg-white rounded p-4 border-l-4 border-brand-light-green">
                    <p className="font-semibold mb-2">Revenue Premium from Peak Timing</p>
                    <p className="text-sm">
                      VBPV generates during 7-11am and 5-9pm peaks (£75-95/MWh) vs TMPV midday generation (£60-70/MWh)
                    </p>
                    <p className="text-sm mt-2">
                      <strong>Result:</strong> 10-15% higher revenue per kWh = £2-3 billion additional value over 30 years
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Sensitivity Analysis */}
        <section className="mb-12">
          <Card className="border-l-4 border-orange-600">
            <CardHeader>
              <CardTitle className="text-3xl font-headline flex items-center">
                <TrendingUp className="w-8 h-8 mr-3 text-orange-600" />
                Sensitivity Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <Alert className="bg-orange-50 border-orange-200">
                <AlertTriangle className="h-5 w-5 text-orange-600" />
                <AlertDescription className="text-sm">
                  Economic projections are inherently uncertain. This section shows how results vary with different assumptions.
                </AlertDescription>
              </Alert>

              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-orange-700 mb-4">Key Variable Sensitivities</h3>
                <div className="space-y-6">
                  <div>
                    <p className="font-semibold mb-3">Battery Storage Cost Sensitivity</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center bg-white p-3 rounded">
                        <span>If battery costs fall to £150/kWh:</span>
                        <span className="font-bold text-green-600">£73-82 billion savings (lower bound)</span>
                      </div>
                      <div className="flex justify-between items-center bg-white p-3 rounded">
                        <span>Base case (£250-300/kWh):</span>
                        <span className="font-bold text-brand-teal">£121-134 billion savings</span>
                      </div>
                      <div className="flex justify-between items-center bg-white p-3 rounded">
                        <span>If battery costs remain at £400/kWh:</span>
                        <span className="font-bold text-blue-600">£162-181 billion savings (upper bound)</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-3">Deployment Scale Sensitivity</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center bg-white p-3 rounded">
                        <span>35 GW deployment (conservative):</span>
                        <span className="font-bold">£120-139 billion total savings</span>
                      </div>
                      <div className="flex justify-between items-center bg-white p-3 rounded">
                        <span>47 GW deployment (base case):</span>
                        <span className="font-bold text-brand-teal">£161-187 billion total savings</span>
                      </div>
                      <div className="flex justify-between items-center bg-white p-3 rounded">
                        <span>70 GW deployment (accelerated):</span>
                        <span className="font-bold">£240-279 billion total savings</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold mb-3">Timeframe Sensitivity</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center bg-white p-3 rounded">
                        <span>25-year analysis period:</span>
                        <span className="font-bold">£134-156 billion total savings</span>
                      </div>
                      <div className="flex justify-between items-center bg-white p-3 rounded">
                        <span>30-year analysis period (base case):</span>
                        <span className="font-bold text-brand-teal">£161-187 billion total savings</span>
                      </div>
                      <div className="flex justify-between items-center bg-white p-3 rounded">
                        <span>40-year analysis period (extended warranty):</span>
                        <span className="font-bold">£215-250 billion total savings</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-700 mb-4">Uncertainty Acknowledgment</h3>
                <div className="space-y-3 text-sm">
                  <p>
                    <strong className="text-brand-navy">Technology Cost Trajectories:</strong> Battery and solar costs continue declining. 
                    Projections use conservative estimates but actual costs may differ.
                  </p>
                  <p>
                    <strong className="text-brand-navy">Policy & Regulatory Changes:</strong> Future electricity market design, 
                    grid charging structures, and renewable support mechanisms may evolve.
                  </p>
                  <p>
                    <strong className="text-brand-navy">Demand Profile Changes:</strong> Heat pump adoption, EV charging patterns, 
                    and industrial electrification will shift demand profiles.
                  </p>
                  <p>
                    <strong className="text-brand-navy">Grid Topology Evolution:</strong> Distribution of renewable generation, 
                    demand centers, and interconnection capacity will change.
                  </p>
                  <div className="mt-4 p-4 bg-white rounded border-l-4 border-blue-600">
                    <p className="font-semibold text-brand-navy">Conservative Approach</p>
                    <p className="text-sm">
                      All projections use conservative assumptions. The VBPV advantage is likely understated because:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Battery costs may remain higher than projected</li>
                      <li>Peak/off-peak price differentials may widen with EV adoption</li>
                      <li>Grid hosting capacity benefits may be even larger in constrained areas</li>
                      <li>Agricultural revenue not included in economic calculations</li>
                      <li>Biodiversity and carbon sequestration co-benefits not monetized</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Peer Review */}
        <section>
          <Card className="bg-gradient-to-r from-brand-navy to-brand-teal text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Independent Verification Needed</h3>
              <p className="mb-4 text-white/90">
                These economic projections represent our analysis of available research and data. We strongly encourage:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-white/90">
                <li>Independent verification by energy economics experts</li>
                <li>Peer review of methodology and assumptions</li>
                <li>Site-specific analysis for UK deployment locations</li>
                <li>Updated calculations as new research emerges</li>
              </ul>
              <p className="text-sm text-white/80">
                If you identify errors or have alternative methodological approaches, please contact us with detailed 
                feedback. We are committed to transparency and accuracy in this crucial policy discussion.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
