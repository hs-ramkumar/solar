import { Button } from '@/components/ui/button';
import { ArrowRight, FileText } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Get Started | Vertical Agrivoltaic Solar',
  description: 'Take the next step towards energy independence with Vertical Agrivoltaic Solar.',
};

export default function CtaPage() {
  return (
    <div className="bg-card">
      <div className="container mx-auto max-w-5xl px-4 py-16 sm:py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
          Ready to Harness the Sun?
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          Your journey to a sustainable, cost-effective energy future is just a click away. Explore your options and see how Vertical Agrivoltaic Solar can work for you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-md mx-auto">
          <div className="flex flex-col items-center p-8 border rounded-lg hover:shadow-lg transition-shadow">
            <FileText className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-2xl font-bold font-headline mb-2">View Our Process</h2>
            <p className="text-muted-foreground mb-6">
              Learn about our transparent, step-by-step implementation plan from consultation to activation.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/implementation">
                See the Plan <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-headline font-semibold mb-4">Have More Questions?</h3>
          <p className="text-muted-foreground mb-6">
            Check out our FAQ page or get in touch with our team.
          </p>
          <Button asChild variant="ghost">
             <Link href="/faq">
                Read the FAQ
              </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
