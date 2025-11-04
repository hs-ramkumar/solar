import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';
import fs from 'fs/promises';
import path from 'path';
import * as LucideIcons from 'lucide-react';
import { Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Environmental Impact | Solaris Vertical',
  description: 'Learn how vertical solar contributes to a healthier planet.',
};

type EnvironmentalBenefit = {
  icon: keyof typeof LucideIcons;
  title: string;
  description: string;
  details?: string[];
};

const Icon = ({ name, className }: { name: keyof typeof LucideIcons, className: string }) => {
  const LucideIcon = LucideIcons[name] as React.ElementType;
  return LucideIcon ? <LucideIcon className={className} /> : null;
};

export default async function EnvironmentPage() {
  const dataPath = path.join(process.cwd(), 'src', 'data', 'environment.txt');
  const fileContent = await fs.readFile(dataPath, 'utf8');
  const benefits: EnvironmentalBenefit[] = JSON.parse(fileContent);

  return (
    <div className="container mx-auto px-4 py-12 sm:py-16">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
          Greener Energy, Greener Planet
        </h1>
        <p className="text-lg text-muted-foreground">
          Solaris Vertical is committed to sustainability. Discover the positive environmental impacts of adopting vertical solar technology.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit) => (
          <Card key={benefit.title} className="flex flex-col hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-col items-center text-center">
              <div className="mb-4 p-4 bg-background rounded-full">
                <Icon name={benefit.icon} className="w-10 h-10 text-primary" />
              </div>
              <CardTitle className="font-headline text-xl">{benefit.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center flex-grow">
              <p className="text-muted-foreground mb-4">{benefit.description}</p>
              {benefit.details && (
                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                  {benefit.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-4 h-4 mr-2 mt-1 text-green-500 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
