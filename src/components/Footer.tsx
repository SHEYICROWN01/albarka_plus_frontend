import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-soft-blue to-background dark:from-background dark:to-card border-t border-border/50">
      {/* Tier 1: Newsletter & CTA Section */}
      <div className="container py-16">
        <div className="max-w-5xl mx-auto bg-gradient-primary rounded-3xl p-12 shadow-elegant text-center relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
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
                className="h-12 bg-white/95 border-0 text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-white/50"
              />
              <Button
                size="lg"
                className="h-12 bg-white text-primary hover:bg-white/90 font-semibold shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
              >
                <Send className="h-4 w-4 mr-2" />
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Tier 2: Main Footer Navigation */}
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-6 text-lg">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/about" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group inline-block"
                >
                  About Us
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/careers" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group inline-block"
                >
                  Careers
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group inline-block"
                >
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group inline-block"
                >
                  Blog
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Center */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-6 text-lg">Help Center</h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/how-it-works" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group inline-block"
                >
                  How It Works
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/faq" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group inline-block"
                >
                  FAQs
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/support" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group inline-block"
                >
                  Support
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/returns" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group inline-block"
                >
                  Returns
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-6 text-lg">Shop</h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/categories" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group inline-block"
                >
                  Categories
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/brands" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group inline-block"
                >
                  Brands
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/gift-cards" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group inline-block"
                >
                  Gift Cards
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/deals" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group inline-block"
                >
                  Deals
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-6 text-lg">Legal</h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/privacy" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group inline-block"
                >
                  Privacy Policy
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group inline-block"
                >
                  Terms & Conditions
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/cookie-policy" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group inline-block"
                >
                  Cookie Policy
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/disclaimer" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group inline-block"
                >
                  Disclaimer
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Tier 3: Bottom Strip */}
      <div className="border-t border-border/50">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Albarka+. All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-soft-blue hover:bg-primary transition-all duration-300 flex items-center justify-center group shadow-sm hover:shadow-card"
              >
                <Facebook className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-soft-blue hover:bg-primary transition-all duration-300 flex items-center justify-center group shadow-sm hover:shadow-card"
              >
                <Twitter className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-soft-blue hover:bg-primary transition-all duration-300 flex items-center justify-center group shadow-sm hover:shadow-card"
              >
                <Instagram className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-soft-blue hover:bg-primary transition-all duration-300 flex items-center justify-center group shadow-sm hover:shadow-card"
              >
                <Linkedin className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
