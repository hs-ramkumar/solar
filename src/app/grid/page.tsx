import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';
import fs from 'fs/promises';
import path from 'path';
import * as LucideIcons from 'lucide-react';

export const metadata: Metadata = {
  title: 'Grid Infrastructure Benefits | Harvesting the Sun Twice',
  description: 'How vertical solar systems reduce grid infrastructure costs by £600M-£1,150M while improving grid stability.',
};

type GridBenefit = {
  icon: keyof typeof LucideIcons;
  title: string;
  description: string;
  benefits: string[];
  savings?: string;
  economic_impact?: string;
  strategic_value?: string;
  environmental_impact?: string;
  long_term_value?: string;
};

const Icon = ({ name, className }: { name: keyof typeof LucideIcons, className: string }) => {
  const LucideIcon = LucideIcons[name] as React.ElementType;
  return LucideIcon ? <LucideIcon className={className} /> : null;
};

export default async function GridPage() {
  const dataPath = path.join(process.cwd(), 'src', 'data', 'grid-infrastructure.txt');
  const fileContent = await fs.readFile(dataPath, 'utf8');
  const gridBenefits: GridBenefit[] = JSON.parse(fileContent);
  
  return (
    <div className="container mx-auto px-4 py-12 sm:py-16">
      <div className="text-center max-w-5xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-6">
          Grid Infrastructure Benefits
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Revolutionary findings from Finland and Norway demonstrate that VBPV systems fundamentally solve 
          the distribution grid challenges created by traditional solar deployment, saving £600M-£1,150M in infrastructure costs.
        </p>
        
        {/* Key Research Findings */}
        <div className="bg-gradient-to-r from-brand-teal/10 to-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-headline font-bold mb-6">
            🔌 Revolutionary Grid Integration Findings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-teal mb-2">+46%</div>
              <div className="font-medium">Grid Hosting Capacity</div>
              <div className="text-sm text-muted-foreground">vs traditional solar systems*</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-light-green mb-2">£600M-£1,150M</div>
              <div className="font-medium">Infrastructure Savings</div>
              <div className="text-sm text-muted-foreground">Avoided grid reinforcement costs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-navy mb-2">15-20%</div>
              <div className="font-medium">Cost Reduction</div>
              <div className="text-sm text-muted-foreground">Total solar deployment costs</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Source: University of Turku (Finland) & Norwegian University of Science and Technology (NTNU), 
            published in Renewable and Sustainable Energy Reviews (March 2022). *Grid hosting capacity improvement from 
            Joutijärvi et al. (2023), based on reduced overvoltage risk and improved load matching.
          </p>
        </div>
      </div>

      {/* Infrastructure Cost Breakdown */}
      <section className="mb-16">
        <h2 className="text-3xl font-headline font-bold text-center mb-8">
          Infrastructure Cost Comparison (to 70 GW deployment)
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-card rounded-lg overflow-hidden">
            <thead className="bg-muted">
              <tr>
                <th className="text-left p-4 font-semibold">Infrastructure Component</th>
                <th className="text-center p-4 font-semibold">Traditional Solar (TMPV)</th>
                <th className="text-center p-4 font-semibold">Vertical Solar (VBPV)</th>
                <th className="text-center p-4 font-semibold">Potential Savings</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-4 font-medium">Distribution Network Reinforcement</td>
                <td className="text-center p-4">£800M-£1,200M</td>
                <td className="text-center p-4">£550M-£650M</td>
                <td className="text-center p-4 text-brand-light-green font-semibold">£250M-£550M</td>
              </tr>
              <tr className="border-t bg-muted/50">
                <td className="p-4 font-medium">Substation Upgrades</td>
                <td className="text-center p-4">£600M-£900M</td>
                <td className="text-center p-4">£450M-£600M</td>
                <td className="text-center p-4 text-brand-light-green font-semibold">£150M-£300M</td>
              </tr>
              <tr className="border-t">
                <td className="p-4 font-medium">Grid-Scale Battery Storage</td>
                <td className="text-center p-4">£500M-£800M</td>
                <td className="text-center p-4">£300M-£500M</td>
                <td className="text-center p-4 text-brand-light-green font-semibold">£200M-£300M</td>
              </tr>
              <tr className="border-t bg-muted/50">
                <td className="p-4 font-medium">Balancing Services Reduction</td>
                <td className="text-center p-4">N/A</td>
                <td className="text-center p-4">Reduced costs</td>
                <td className="text-center p-4 text-brand-light-green font-semibold">£50M-£100M/year</td>
              </tr>
              <tr className="border-t bg-primary/10">
                <td className="p-4 font-bold">TOTAL SAVINGS</td>
                <td className="text-center p-4 font-bold">—</td>
                <td className="text-center p-4 font-bold">—</td>
                <td className="text-center p-4 text-brand-light-green font-bold text-lg">£650M-£1,250M</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Grid Benefits Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {gridBenefits.map((benefit) => (
          <Card key={benefit.title} className="flex flex-col hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-col items-start">
              <div className="mb-4 p-3 bg-primary/10 rounded-full">
                <Icon name={benefit.icon} className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="font-headline text-xl">{benefit.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground mb-4">{benefit.description}</p>
              
              <ul className="space-y-2 mb-4">
                {benefit.benefits.map((benefitItem, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-sm">{benefitItem}</span>
                  </li>
                ))}
              </ul>
              
              {benefit.savings && (
                <div className="bg-brand-light/10 border border-brand-light-green/50 rounded-lg p-3 mb-3">
                  <div className="text-sm font-medium text-brand-light-green">Infrastructure Savings</div>
                  <div className="text-sm text-brand-light-green">{benefit.savings}</div>
                </div>
              )}
              
              {benefit.economic_impact && (
                <div className="bg-brand-teal/10 border border-brand-teal/50 rounded-lg p-3 mb-3">
                  <div className="text-sm font-medium text-brand-teal">Economic Impact</div>
                  <div className="text-sm text-brand-teal">{benefit.economic_impact}</div>
                </div>
              )}
              
              {benefit.strategic_value && (
                <div className="bg-brand-navy/10 border border-brand-navy/50 rounded-lg p-3 mb-3">
                  <div className="text-sm font-medium text-brand-navy">Strategic Value</div>
                  <div className="text-sm text-brand-navy">{benefit.strategic_value}</div>
                </div>
              )}
              
              {benefit.environmental_impact && (
                <div className="bg-brand-light/10 border border-brand-light-green/50 rounded-lg p-3 mb-3">
                  <div className="text-sm font-medium text-brand-light-green">Environmental Impact</div>
                  <div className="text-sm text-brand-light-green">{benefit.environmental_impact}</div>
                </div>
              )}
              
              {benefit.long_term_value && (
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                  <div className="text-sm font-medium text-orange-800">Long-term Value</div>
                  <div className="text-sm text-orange-700">{benefit.long_term_value}</div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* UK Electricity Demand Pattern */}
      <section className="mt-16">
        <h2 className="text-3xl font-headline font-bold text-center mb-8">
          UK Electricity Demand Patterns & VBPV Alignment
        </h2>
        <div className="bg-card rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-xl font-bold text-orange-600 mb-2">Morning Peak</div>
              <div className="text-sm text-muted-foreground mb-2">7:00-11:00 AM</div>
              <div className="text-lg font-semibold text-brand-light-green">+26.91% VBPV Advantage</div>
              <div className="text-xs text-muted-foreground mt-2">
                People waking, breakfast, commute, business start-up
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-brand-teal mb-2">Midday Trough</div>
              <div className="text-sm text-muted-foreground mb-2">11:00 AM-3:00 PM</div>
              <div className="text-lg font-semibold">Both Systems Generate Well</div>
              <div className="text-xs text-muted-foreground mt-2">
                Lowest demand period
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-red-600 mb-2">Evening Peak</div>
              <div className="text-sm text-muted-foreground mb-2">5:00-9:00 PM</div>
              <div className="text-lg font-semibold text-brand-light-green">+22.88% VBPV Advantage</div>
              <div className="text-xs text-muted-foreground mt-2">
                Highest demand - up to 42 GW
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-16 text-center">
        <div className="bg-primary/5 rounded-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-headline font-bold mb-4">
            Critical Policy Implication
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            Technology choice determines grid infrastructure costs. By selecting VBPV over traditional systems, the UK can:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="text-left">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Deploy the same 70 GW solar capacity</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Save £600M-£1,150M in grid reinforcement costs</span>
                </li>
              </ul>
            </div>
            <div className="text-left">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Achieve higher effective solar penetration on existing infrastructure</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Reduce ongoing balancing and curtailment costs</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-xl font-semibold">
            This represents a 15-20% reduction in total solar deployment costs when grid infrastructure is properly accounted for.
          </p>
        </div>
      </section>
    </div>
  );
}