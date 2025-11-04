import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { CheckCircle2, XCircle } from 'lucide-react';
import type { Metadata } from 'next';
import fs from 'fs/promises';
import path from 'path';

export const metadata: Metadata = {
  title: 'Technology Comparison | Vertical Agrivoltaic Solar',
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
        <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" /> : 
        <XCircle className="h-5 w-5 text-red-500 mx-auto" />;
    }
    return content;
  };

  return (
    <div className="container mx-auto px-4 py-12 sm:py-16">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
          VBPV vs. Traditional Solar
        </h1>
        <p className="text-lg text-muted-foreground">
          A head-to-head comparison of Vertical Bifacial Photovoltaics and conventional tilted solar panel systems.
        </p>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[40%] font-bold text-lg">Feature</TableHead>
                <TableHead className="text-center font-bold text-lg">Vertical Agrivoltaic Solar (VBPV)</TableHead>
                <TableHead className="text-center font-bold text-lg">Traditional Tilted Panels</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonData.map((item) => (
                <TableRow key={item.feature}>
                  <TableCell className="font-medium">{item.feature}</TableCell>
                  <TableCell className="text-center">{renderCellContent(item.vbvp)}</TableCell>
                  <TableCell className="text-center">{renderCellContent(item.traditional)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
