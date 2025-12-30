import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { CheckCircle2, XCircle } from 'lucide-react';
import type { Metadata } from 'next';
import fs from 'fs/promises';
import path from 'path';

export const metadata: Metadata = {
  title: 'Technology Comparison | Harvesting the Sun Twice',
  description: 'Comparing Vertical Bifacial PV (VBPV) with traditional solar systems.',
};

type ComparisonFeature = {
  feature: string;
  vbvp: string | boolean;
  traditional: string | boolean;
};

export default async function TechnologyPage() {
  const dataPath = path.join(process.cwd(), 'src', 'data', 'technology-comparison.txt');
  const fileContent = await fs.readFile(dataPath, 'utf8');
  const comparisonData: ComparisonFeature[] = JSON.parse(fileContent);

  const renderCellContent = (content: string | boolean) => {
    if (typeof content === 'boolean') {
      return content ? 
        <CheckCircle2 className="h-5 w-5 text-brand-light-green mx-auto" /> : 
        <XCircle className="h-5 w-5 text-red-500 mx-auto" />;
    }
    return content;
  };

  return (
    <div className="container mx-auto px-4 py-12 sm:py-16">
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
          VBPV vs. Traditional Solar
        </h1>
        <p className="text-lg text-muted-foreground mb-6">
          A head-to-head comparison of Vertical Bifacial Photovoltaics and conventional tilted solar panel systems.
        </p>
        <div className="bg-brand-teal/10 border-l-4 border-brand-teal p-6 text-left">
          <p className="font-semibold text-brand-navy mb-2">Peer-Reviewed Research Foundation</p>
          <p className="text-sm text-brand-teal mb-3">
            The performance claims for VBPV systems are supported by rigorous peer-reviewed research conducted at UK latitudes. 
            The University of York study provides comprehensive validation of VBPV advantages for UK deployment.
          </p>
          <p className="text-sm text-brand-navy font-medium">
            <strong>Citation:</strong> Badran, G., & Dhimish, M. (2024). Comprehensive study on the efficiency of vertical 
            bifacial photovoltaic systems: a UK case study. <em>Scientific Reports</em>, 14, 18380.
          </p>
          <a href="https://doi.org/10.1038/s41598-024-68018-1" target="_blank" rel="noopener noreferrer" 
             className="text-sm text-brand-teal hover:underline mt-2 inline-block">
            https://doi.org/10.1038/s41598-024-68018-1
          </a>
        </div>
      </div>

      <Card className="mb-8">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[40%] font-bold text-lg">Feature</TableHead>
                <TableHead className="text-center font-bold text-lg bg-brand-light/10">Vertical Bifacial (VBPV)</TableHead>
                <TableHead className="text-center font-bold text-lg bg-red-50">Traditional Mounted (TMPV)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonData.map((item, index) => (
                <TableRow key={item.feature} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                  <TableCell className="font-medium">{item.feature}</TableCell>
                  <TableCell className="text-center bg-brand-light/10 font-semibold">{renderCellContent(item.vbvp)}</TableCell>
                  <TableCell className="text-center bg-red-50">{renderCellContent(item.traditional)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-brand-light-green">Key Research Findings</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-brand-light-green mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>Annual energy generation:</strong> 119-122% of TMPV output at UK latitudes</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-brand-light-green mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>Winter energy gains:</strong> +24.52% compared to TMPV during October-March period</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-brand-light-green mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>Morning peak energy capture:</strong> +26.91% higher daily energy compared to TMPV</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-brand-light-green mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>Evening peak energy capture:</strong> +22.88% higher daily energy during critical demand</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-brand-light-green mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>Duck curve reduction:</strong> 57% less severe than TMPV systems</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-brand-teal">Total System Savings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-brand-light-green pl-4">
                <div className="text-2xl font-bold text-brand-light-green">£121-134 billion</div>
                <div className="text-sm text-muted-foreground">Battery Storage Savings (30 years)</div>
              </div>
              <div className="border-l-4 border-brand-teal pl-4">
                <div className="text-2xl font-bold text-brand-teal">£40-53 billion</div>
                <div className="text-sm text-muted-foreground">Grid Infrastructure Savings</div>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <div className="text-3xl font-bold text-brand-navy">£161-187 billion</div>
                <div className="text-sm text-muted-foreground">Total System Savings (30 years)</div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Even after accounting for the 16% premium in VBPV panel costs, net savings are £157-203 billion over 30 years.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
