import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Battery, Zap, Building2, CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Economic Benefits | Harvesting the Sun Twice',
  description: '£161-187 billion in total system savings over 30 years through VBPV agrivoltaic deployment.',
};

export default function BenefitsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-light/20 to-emerald-50">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-headline font-bold mb-6 bg-gradient-to-r from-gray-900 via-green-700 to-emerald-700 bg-clip-text text-transparent">
            Economic Benefits of VBPV Systems
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Vertical Bifacial Photovoltaic (VBPV) agrivoltaic systems offer transformative economic advantages,
            delivering <strong>£161-187 billion in total system savings</strong> over 30 years compared to
            Traditional Mounted Photovoltaic (TMPV) systems.
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-brand-light-green to-brand-light-green text-white">
            <CardContent className="p-6">
              <TrendingUp className="w-12 h-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">£161-187bn</div>
              <div className="text-sm opacity-90">Total System Savings</div>
              <div className="text-xs opacity-75 mt-2">Over 30 Years</div>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-brand-teal to-brand-teal text-white">
            <CardContent className="p-6">
              <Battery className="w-12 h-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">£121-134bn</div>
              <div className="text-sm opacity-90">Battery Storage Savings</div>
              <div className="text-xs opacity-75 mt-2">94% reduction in BESS requirements</div>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-brand-navy to-pink-600 text-white">
            <CardContent className="p-6">
              <Zap className="w-12 h-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">£40-53bn</div>
              <div className="text-sm opacity-90">Grid Infrastructure Savings</div>
              <div className="text-xs opacity-75 mt-2">Transmission & distribution</div>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-orange-500 to-red-600 text-white">
            <CardContent className="p-6">
              <Building2 className="w-12 h-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">19-22%</div>
              <div className="text-sm opacity-90">Higher Energy Output</div>
              <div className="text-xs opacity-75 mt-2">Annual generation vs TMPV</div>
            </CardContent>
          </Card>
        </div>

        {/* Executive Summary */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-headline">Executive Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg">
                The United Kingdom faces a critical decision point. Current plans to deploy 47 GW of solar capacity by 2030
                using Traditional Mounted Photovoltaic (TMPV) systems would create a <strong>£161-187 billion infrastructure burden</strong>
                while sacrificing 32,000-45,000 hectares of prime agricultural land.
              </p>
              <p className="text-lg">
                This analysis demonstrates that Vertical Bifacial Photovoltaic (VBPV) agrivoltaic systems offer a transformative
                alternative that eliminates this false choice between energy security and food security.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mt-6">
                <p className="font-semibold text-amber-900">⚠️ Critical Window</p>
                <p className="text-amber-800 mt-2">
                  Currently, <strong>1,546 ground-mounted solar projects (35.7 GW)</strong> are under construction, awaiting construction,
                  or in planning. There is a <strong>6-12 month window</strong> to influence these decisions before planning approvals
                  become final. After this window closes, the opportunity to capture £161-187 billion in system savings will be lost for 25-30 years.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Battery Storage Requirements */}
        <section className="mb-16">
          <h2 className="text-3xl font-headline font-bold text-center mb-8">
            Battery Energy Storage Systems (BESS) Requirements
          </h2>
          <Card>
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground mb-6">
                The fundamental difference in generation profiles between TMPV and VBPV systems creates dramatically
                different battery storage requirements. TMPV's midday-only generation pattern requires massive battery
                capacity to shift energy to morning and evening demand peaks, while VBPV's dual-peak generation naturally
                matches UK demand patterns.
              </p>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-bold">System Component</TableHead>
                      <TableHead className="text-center font-bold">TMPV (47 GW)</TableHead>
                      <TableHead className="text-center font-bold">VBPV (47 GW)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">BESS Capacity Required</TableCell>
                      <TableCell className="text-center bg-red-50">170-190 GWh</TableCell>
                      <TableCell className="text-center bg-brand-light/10 font-semibold">78-87 GWh (94% reduction)</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Initial BESS CAPEX</TableCell>
                      <TableCell className="text-center bg-red-50">£54-60 billion</TableCell>
                      <TableCell className="text-center bg-brand-light/10 font-semibold">£25-28 billion</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Replacement Cycles (30yr)</TableCell>
                      <TableCell className="text-center">2× full replacements</TableCell>
                      <TableCell className="text-center">2× full replacements</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Total BESS Cost (30yr)</TableCell>
                      <TableCell className="text-center bg-red-50 font-bold">£224-249 billion</TableCell>
                      <TableCell className="text-center bg-brand-light/10 font-bold">£103-115 billion</TableCell>
                    </TableRow>
                    <TableRow className="bg-brand-light/20">
                      <TableCell className="font-bold text-lg">BESS SAVINGS</TableCell>
                      <TableCell></TableCell>
                      <TableCell className="text-center font-bold text-brand-light-green text-xl">£121-134 billion</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <div className="bg-brand-teal/10 border-l-4 border-brand-teal p-4 mt-6">
                <p className="font-semibold text-brand-navy">UK Government Context</p>
                <p className="text-brand-teal mt-2">
                  The UK government's Clean Power 2030 Action Plan (December 2024) targets 23-27 GW of battery storage
                  capacity by 2030, equivalent to approximately 115-135 GWh. The TMPV approach would require 170-190 GWh,
                  exceeding government targets by 40-60%. In contrast, VBPV systems require only 78-87 GWh, operating
                  comfortably within planned battery capacity.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Grid Infrastructure Investment */}
        <section className="mb-16">
          <h2 className="text-3xl font-headline font-bold text-center mb-8">
            Grid Infrastructure Investment Requirements
          </h2>
          <Card>
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground mb-6">
                The UK's transmission and distribution networks require substantial upgrades to accommodate large-scale
                solar deployment. However, the infrastructure requirements differ dramatically based on whether the solar
                generation matches or conflicts with demand patterns.
              </p>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-bold">Infrastructure Component</TableHead>
                      <TableHead className="text-center font-bold">TMPV Required</TableHead>
                      <TableHead className="text-center font-bold">VBPV Required</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Transmission Network</TableCell>
                      <TableCell className="text-center bg-red-50">£25.8-34.5 billion</TableCell>
                      <TableCell className="text-center bg-brand-light/10">£11.1-14.8 billion</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Distribution Network</TableCell>
                      <TableCell className="text-center bg-red-50">£11.8-15.7 billion</TableCell>
                      <TableCell className="text-center bg-brand-light/10">£5.1-6.8 billion</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Substation Upgrades</TableCell>
                      <TableCell className="text-center bg-red-50">£5.4-7.2 billion</TableCell>
                      <TableCell className="text-center bg-brand-light/10">£2.3-3.1 billion</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Ancillary Services</TableCell>
                      <TableCell className="text-center bg-red-50">£6.0-8.0 billion</TableCell>
                      <TableCell className="text-center bg-brand-light/10">£2.6-3.4 billion</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Total Grid Infrastructure</TableCell>
                      <TableCell className="text-center bg-red-50 font-bold">£49-65.4 billion</TableCell>
                      <TableCell className="text-center bg-brand-light/10 font-bold">£21.1-28.1 billion</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Flexibility Services Avoided</TableCell>
                      <TableCell className="text-center bg-red-50">£11-13 billion</TableCell>
                      <TableCell className="text-center bg-brand-light/10">£3-5 billion</TableCell>
                    </TableRow>
                    <TableRow className="bg-brand-light/20">
                      <TableCell className="font-bold text-lg">COMBINED GRID SAVINGS</TableCell>
                      <TableCell></TableCell>
                      <TableCell className="text-center font-bold text-brand-light-green text-xl">£40-53 billion</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Total System Savings */}
        <section className="mb-16">
          <Card className="bg-gradient-to-br from-brand-light/30 to-brand-light/30 border-4 border-brand-light-green">
            <CardHeader>
              <CardTitle className="text-4xl font-headline text-center text-brand-navy">
                Total System Savings: VBPV vs TMPV
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <div className="flex items-center gap-4">
                    <Battery className="w-10 h-10 text-brand-teal" />
                    <span className="text-xl font-semibold">Battery Energy Storage Systems (BESS)</span>
                  </div>
                  <span className="text-3xl font-bold text-brand-light-green">£121-134 billion</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <div className="flex items-center gap-4">
                    <Zap className="w-10 h-10 text-brand-navy" />
                    <span className="text-xl font-semibold">Grid Infrastructure & Flexibility</span>
                  </div>
                  <span className="text-3xl font-bold text-brand-light-green">£40-53 billion</span>
                </div>
                <div className="flex items-center justify-between p-6 bg-brand-light-green text-white rounded-lg mt-8">
                  <div className="flex items-center gap-4">
                    <CheckCircle className="w-12 h-12" />
                    <span className="text-2xl font-bold">TOTAL SYSTEM SAVINGS (VBPV)</span>
                  </div>
                  <span className="text-5xl font-bold">£161-187 billion</span>
                </div>
              </div>
              <div className="bg-white/80 border-l-4 border-brand-light-green p-6 mt-8">
                <p className="text-lg font-semibold text-brand-navy">
                  Even after accounting for the 16% premium in VBPV panel costs (approximately £3.5-4.2 billion for 47 GW),
                  VBPV systems deliver net savings of £157-203 billion over 30 years compared to TMPV deployments.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Understanding System Cost */}
        <section className="mb-16">
          <h2 className="text-3xl font-headline font-bold text-center mb-8">
            Understanding the True System Cost
          </h2>
          <Card>
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground mb-6">
                The savings are greater than the TMPV cost because they account for the massive, recurring costs associated
                with managing the TMPV-induced "Duck Curve" and system instability. The difference is best understood through
                three layers:
              </p>
              <div className="space-y-6">
                <div className="border-l-4 border-brand-teal pl-6">
                  <h3 className="text-xl font-bold mb-2">Layer 1: Generator CAPEX</h3>
                  <p className="text-muted-foreground">
                    TMPV requires 23-27 GW of BESS capacity over 30 years to shift midday energy. VBPV requires up to 94%
                    less BESS capacity due to better demand matching.
                  </p>
                  <p className="text-sm text-brand-teal font-semibold mt-2">Source: Avoided Battery Investment</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-bold mb-2">Layer 2: Operational OPEX</h3>
                  <p className="text-muted-foreground">
                    TMPV incurs soaring costs for flexibility, grid constraint payments, and transmission upgrades to handle
                    midday peak congestion. VBPV significantly reduces peak midday generation, minimising system-wide
                    congestion management.
                  </p>
                  <p className="text-sm text-brand-navy font-semibold mt-2">Source: Avoided Constraint Payments</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-bold mb-2">Layer 3: Market/Societal Cost</h3>
                  <p className="text-muted-foreground">
                    TMPV forces gas peaker plants and other expensive, rapid-response generation to fill the 4 PM-7 PM evening
                    ramp (the neck of the duck curve). VBPV's pronounced second peak directly meets the 4 PM-7 PM demand window.
                  </p>
                  <p className="text-sm text-orange-600 font-semibold mt-2">Source: Avoided Flexibility Services</p>
                </div>
              </div>
              <div className="bg-brand-light/10 border-2 border-brand-light-green p-6 mt-8 rounded-lg">
                <p className="text-lg font-semibold text-brand-navy italic">
                  In essence, the VBPV solution is so cost-effective at providing stable, demand-aligned power that the value
                  of the chaos it prevents outweighs the upfront cost of the alternative system designed to manage that chaos.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
