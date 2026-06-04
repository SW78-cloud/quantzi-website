import React from "react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="font-serif text-2xl font-bold tracking-wider mb-4 inline-block">
              QUANTZI
            </Link>
            <p className="text-primary-foreground/80 max-w-md mt-4 text-sm leading-relaxed">
              We are a trusted strategic partner, delivering measurable transformation across Financial, Legal, Automotive, Insurance, Regulatory & Compliance, Data Warehousing, and AI sectors.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">Services</Link></li>
              <li><Link href="/about" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">About Us</Link></li>
              <li><Link href="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Global Reach</h4>
            <ul className="space-y-3 text-primary-foreground/80 text-sm">
              <li>South Africa (HQ)</li>
              <li>Rest of Africa</li>
              <li>Europe</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Quantzi. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Management Consulting & Technology Partners</p>
        </div>
      </div>
    </footer>
  );
}
