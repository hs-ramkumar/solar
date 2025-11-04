import { SolarisVerticalLogo } from "@/components/icons";

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto py-6 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <SolarisVerticalLogo className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground font-headline">
              Vertical Agrivoltaic Solar
            </span>
          </div>
          <p className="text-sm text-muted-foreground text-center md:text-right">
            &copy; {new Date().getFullYear()} Vertical Agrivoltaic Solar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
