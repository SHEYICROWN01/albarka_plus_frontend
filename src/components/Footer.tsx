import { Facebook, Twitter, Instagram, Linkedin, Youtube, MessageCircle, Apple } from "lucide-react";
import { Link } from "react-router-dom";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#001440] text-white">
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left Section - Logo & Info */}
          <div className="lg:col-span-4 space-y-6">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <span className="text-3xl font-heading font-bold text-white transition-all duration-300">
                  Albarka
                </span>
                <span className="text-3xl font-heading font-bold text-gold absolute -top-1 -right-4 transition-all duration-300 group-hover:rotate-12">
                  +
                </span>
              </div>
            </Link>

            {/* Tagline */}
            <p className="text-white/80 text-sm max-w-xs">
              "We empower Nigerians to own easily using smart installments."
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <p className="text-white/70">6, Ike Asogwa Close, Anthony, Lagos.</p>
              
              <a 
                href="mailto:hello@albarkaplus.ng"
                className="block text-white/80 hover:text-white underline transition-colors"
              >
                hello@albarkaplus.ng
              </a>
              
              <p className="text-white/70">Call us on Trecall - toll free</p>
              
              <a 
                href="tel:07074603997"
                className="block text-white/80 hover:text-white underline transition-colors"
              >
                0707-460-3997, 0707-445-2992
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-4">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white hover:bg-white/90 transition-all duration-300 flex items-center justify-center group"
              >
                <Youtube className="h-5 w-5 text-[#001440] transition-transform group-hover:scale-110" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white hover:bg-white/90 transition-all duration-300 flex items-center justify-center group"
              >
                <FaTiktok className="h-4 w-4 text-[#001440] transition-transform group-hover:scale-110" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white hover:bg-white/90 transition-all duration-300 flex items-center justify-center group"
              >
                <Linkedin className="h-5 w-5 text-[#001440] transition-transform group-hover:scale-110" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white hover:bg-white/90 transition-all duration-300 flex items-center justify-center group"
              >
                <Twitter className="h-5 w-5 text-[#001440] transition-transform group-hover:scale-110" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white hover:bg-white/90 transition-all duration-300 flex items-center justify-center group"
              >
                <Facebook className="h-5 w-5 text-[#001440] transition-transform group-hover:scale-110" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white hover:bg-white/90 transition-all duration-300 flex items-center justify-center group"
              >
                <Instagram className="h-5 w-5 text-[#001440] transition-transform group-hover:scale-110" />
              </a>
              <a
                href="https://wa.me"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white hover:bg-white/90 transition-all duration-300 flex items-center justify-center group"
              >
                <MessageCircle className="h-5 w-5 text-[#001440] transition-transform group-hover:scale-110" />
              </a>
            </div>
          </div>

          {/* Middle Sections - Navigation Columns */}
          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Company */}
            <div>
              <h3 className="font-semibold text-white/60 mb-4 text-sm uppercase tracking-wider">Company</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/about" className="text-white hover:text-gold transition-colors underline">
                    About us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-white hover:text-gold transition-colors underline">
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link to="/testimonials" className="text-white hover:text-gold transition-colors underline">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link to="/enquiry" className="text-white hover:text-gold transition-colors underline">
                    Enquiry/Pick Up Centres
                  </Link>
                </li>
              </ul>
            </div>

            {/* Business */}
            <div>
              <h3 className="font-semibold text-white/60 mb-4 text-sm uppercase tracking-wider">Business</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/shop" className="text-white hover:text-gold transition-colors underline">
                    Shop on web
                  </Link>
                </li>
                <li>
                  <Link to="/app" className="text-white hover:text-gold transition-colors underline">
                    Get the app
                  </Link>
                </li>
                <li>
                  <Link to="/help" className="text-white hover:text-gold transition-colors underline">
                    Help and FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Terms of Service */}
            <div>
              <h3 className="font-semibold text-white/60 mb-4 text-sm uppercase tracking-wider">Terms of Service</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/terms" className="text-white hover:text-gold transition-colors underline">
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link to="/terms-conditions" className="text-white hover:text-gold transition-colors underline">
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-white hover:text-gold transition-colors underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/proprietary" className="text-white hover:text-gold transition-colors underline">
                    Proprietary Rights
                  </Link>
                </li>
                <li>
                  <Link to="/warranty" className="text-white hover:text-gold transition-colors underline">
                    After sales Support & General Warranty
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section - App Store Buttons */}
          <div className="lg:col-span-2 flex flex-col items-start lg:items-end gap-4">
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-white/90 text-[#001440] px-6 py-3 rounded-lg flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <div className="text-left">
                <div className="text-xs">GET IT ON</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </a>
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-white/90 text-[#001440] px-6 py-3 rounded-lg flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Apple className="h-8 w-8" />
              <div className="text-left">
                <div className="text-xs">GET IT ON</div>
                <div className="text-sm font-semibold">Apple Store</div>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Border & Copyright */}
        <div className="border-t border-white/10 mt-12 pt-6">
          <p className="text-center text-white/60 text-sm">
            Copyright © {new Date().getFullYear()} Albarka+ Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
