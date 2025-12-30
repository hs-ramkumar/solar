import { SolarisVerticalLogo } from "@/components/icons";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <SolarisVerticalLogo className="h-6 w-6 text-brand-teal" />
              <span className="text-sm font-bold font-headline">
                Harvesting the Sun Twice
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Vertical bifacial solar technology for UK energy transformation.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Learn More</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/benefits" className="text-muted-foreground hover:text-brand-teal transition-colors">Benefits</Link></li>
              <li><Link href="/agriculture" className="text-muted-foreground hover:text-brand-teal transition-colors">Agriculture</Link></li>
              <li><Link href="/grid" className="text-muted-foreground hover:text-brand-teal transition-colors">Grid Benefits</Link></li>
              <li><Link href="/technology" className="text-muted-foreground hover:text-brand-teal transition-colors">Technology</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/sources" className="text-muted-foreground hover:text-brand-teal transition-colors">Research Sources</Link></li>
              <li><Link href="/methodology" className="text-muted-foreground hover:text-brand-teal transition-colors">Methodology</Link></li>
              <li><Link href="/faq" className="text-muted-foreground hover:text-brand-teal transition-colors">FAQ</Link></li>
              <li><Link href="/implementation" className="text-muted-foreground hover:text-brand-teal transition-colors">Implementation</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Get Involved</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact" className="text-muted-foreground hover:text-brand-teal transition-colors">Contact Us</Link></li>
              <li><Link href="/environment" className="text-muted-foreground hover:text-brand-teal transition-colors">Environmental Impact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground text-center md:text-left mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Harvesting the Sun Twice. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Built with research-backed data and peer-reviewed science
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
