import React from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/values", label: "Our Values" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-primary border-b border-primary-foreground/10 text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center" data-testid="link-logo">
            <Logo variant="light" height={50} />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    location === link.href ? "text-accent" : "text-primary-foreground/90"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Link 
              href="/contact" 
              className="bg-accent text-accent-foreground px-6 py-2.5 rounded-sm font-medium text-sm transition-all hover:bg-accent/90"
            >
              Speak to Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-primary-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/10 py-4 px-4 shadow-xl">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
               <Link
               key={link.href}
               href={link.href}
               className="text-primary-foreground/90 hover:text-accent font-medium text-lg block py-2"
               onClick={() => setIsOpen(false)}
             >
               {link.label}
             </Link>
            ))}
            <Link 
              href="/contact" 
              className="bg-accent text-accent-foreground px-6 py-3 rounded-sm font-medium text-center w-full mt-2"
              onClick={() => setIsOpen(false)}
            >
              Speak to Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
