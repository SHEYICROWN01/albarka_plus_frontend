import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-soft-blue dark:from-background dark:to-primary-dark/5">
      {/* Tier 1: Newsletter & CTA Section */}
      <div className="border-b">
        <div className="container py-16">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-3xl bg-gradient-primary p-8 md:p-12 shadow-elegant text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Start Owning Smarter.
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of Nigerians paying small-small for big dreams.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="h-12 bg-white/95 border-white/20 text-primary-dark placeholder:text-primary-dark/60"
                />
                <Button variant="secondary" className="h-12 px-8 whitespace-nowrap">
                  <Send className="h-4 w-4 mr-2" />
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tier 2: Main Footer Navigation */}
      <div className="border-b">
        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Company */}
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-muted-foreground hover:text-primary transition-colors relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Help Center */}
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">Help Center</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/how-it-works" className="text-muted-foreground hover:text-primary transition-colors relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link to="/support" className="text-muted-foreground hover:text-primary transition-colors relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                    Support
                  </Link>
                </li>
                <li>
                  <Link to="/returns" className="text-muted-foreground hover:text-primary transition-colors relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                    Returns
                  </Link>
                </li>
              </ul>
            </div>

            {/* Shop */}
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">Shop</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/catalog" className="text-muted-foreground hover:text-primary transition-colors relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link to="/brands" className="text-muted-foreground hover:text-primary transition-colors relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                    Brands
                  </Link>
                </li>
                <li>
                  <Link to="/gift-cards" className="text-muted-foreground hover:text-primary transition-colors relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                    Gift Cards
                  </Link>
                </li>
                <li>
                  <Link to="/deals" className="text-muted-foreground hover:text-primary transition-colors relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                    Deals
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">Legal</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/repayment-policy" className="text-muted-foreground hover:text-primary transition-colors relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                    Repayment Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Tier 3: Bottom Strip */}
      <div className="py-6">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Albarka+. All rights reserved.
            </p>
            
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center group"
              >
                <Facebook className="h-4 w-4 transition-transform group-hover:scale-110" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center group"
              >
                <Twitter className="h-4 w-4 transition-transform group-hover:scale-110" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center group"
              >
                <Instagram className="h-4 w-4 transition-transform group-hover:scale-110" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center group"
              >
                <Linkedin className="h-4 w-4 transition-transform group-hover:scale-110" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
