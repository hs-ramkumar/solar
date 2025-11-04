import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, DraftingCompass, FileText, Wrench, Rocket, Monitor } from 'lucide-react';
import type { Metadata } from 'next';
import fs from 'fs/promises';
import path from 'path';
import * as LucideIcons from 'lucide-react';

export const metadata: Metadata = {
  title: 'Implementation Plan | Vertical Agrivoltaic Solar',
  description: 'Our streamlined process for vertical solar installation from consultation to activation.',
};

type ImplementationStep = {
  icon: keyof typeof LucideIcons;
  title: string;
  description: string;
};

const Icon = ({ name, className }: { name: keyof typeof LucideIcons, className: string }) => {
  const LucideIcon = LucideIcons[name] as React.ElementType;
  return LucideIcon ? <LucideIcon className={className} /> : null;
};

export default async function ImplementationPage() {
  const dataPath = path.join(process.cwd(), 'src', 'data', 'implementation-steps.txt');
  const fileContent = await fs.readFile(dataPath, 'utf8');
  const implementationSteps: ImplementationStep[] = JSON.parse(fileContent);

  return (
    <div className="container mx-auto px-4 py-12 sm:py-16">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
          Your Path to Energy Independence
        </h1>
        <p className="text-lg text-muted-foreground">
          We've streamlined the process of going solar into six simple, transparent steps. Here's what to expect on your journey with Vertical Agrivoltaic Solar.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" aria-hidden="true"></div>
        
        {implementationSteps.map((step, index) => (
          <div key={step.title} className="relative mb-8 md:mb-12 flex items-center md:justify-normal">
            <div className={`flex w-full items-start gap-6 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto md:text-right'}`}>
              <div className={`p-3 bg-card rounded-full border shadow-sm order-1 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                <Icon name={step.icon} className="w-8 h-8 text-primary" />
              </div>
              <div className={`flex-1 order-2 ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                <h3 className="font-headline text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
            <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-primary rounded-full border-4 border-card -translate-x-1/2 -translate-y-1/2 hidden md:block"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
