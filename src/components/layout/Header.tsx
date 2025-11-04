
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { SolarisVerticalLogo } from "@/components/icons";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/agriculture", label: "Agriculture" },
  { href: "/grid", label: "Grid Benefits" },
  { href: "/technology", label: "Technology" },
  { href: "/implementation", label: "Implementation" },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          isActive ? "text-primary" : "text-muted-foreground"
        )}
        onClick={() => isMobileMenuOpen && setIsMobileMenuOpen(false)}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <SolarisVerticalLogo className="h-6 w-6" />
          <span className="font-bold font-headline">Vertical Agrivoltaic Solar</span>
        </Link>
        <nav className="hidden md:flex flex-1 items-center space-x-4">
          {navItems.map((item) => (
            <NavLink key={item.href} {...item} />
          ))}
        </nav>
        <div className="hidden md:flex items-center justify-end space-x-4">
            <Button asChild>
                <Link href="/contact">Contact Us</Link>
            </Button>
        </div>
        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="p-4">
                <Link href="/" className="mr-6 flex items-center space-x-2 mb-8">
                  <SolarisVerticalLogo className="h-6 w-6" />
                  <span className="font-bold font-headline">Vertical Agrivoltaic Solar</span>
                </Link>
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <NavLink key={item.href} {...item} />
                  ))}
                   <Button asChild className="mt-4">
                        <Link href="/contact">Contact Us</Link>
                   </Button>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
