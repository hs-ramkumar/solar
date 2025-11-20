import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agricultural Benefits | Harvesting the Sun Twice',
  description: 'Discover how vertical solar systems preserve agricultural productivity while generating renewable energy.',
};

export default function AgriculturePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-light/20 to-emerald-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge className="mb-6 bg-gradient-to-r from-brand-light-green to-brand-light-green text-white px-4 py-2">
            Agricultural Innovation
          </Badge>
          <h1 className="text-4xl md:text-6xl font-headline font-bold mb-6 bg-gradient-to-r from-gray-900 via-green-700 to-emerald-700 bg-clip-text text-transparent">
            Agricultural Benefits of Vertical Solar
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Vertical agrivoltaic systems eliminate the false choice between energy security and food security. 
            The same land can produce both renewable energy and agricultural crops, maintaining 95-100% of traditional yields.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">95-100%</div>
              <div className="text-sm text-muted-foreground">Crop Yield Maintained</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">£4,500-6,500</div>
              <div className="text-sm text-muted-foreground">Total Income per Hectare/Year</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">25,000-35,000</div>
              <div className="text-sm text-muted-foreground">Hectares of Farmland Saved</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">£968M</div>
              <div className="text-sm text-muted-foreground">Additional Agricultural Revenue (25 years)</div>
            </CardContent>
          </Card>
        </div>

        <section className="mt-16 text-center">
          <div className="bg-primary/5 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-headline font-bold mb-4">
              The False Choice Eliminated
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Traditional solar creates an unnecessary conflict between energy security and food security. 
              Vertical agrivoltaic systems deliver both renewable energy and continued agricultural productivity 
              on the same land, while reducing grid infrastructure costs by hundreds of millions of pounds.
            </p>
            <p className="text-xl font-semibold">
              The UK does not need to choose between feeding its people and powering its economy. 
              VBPV systems allow both, at lower total system cost.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}