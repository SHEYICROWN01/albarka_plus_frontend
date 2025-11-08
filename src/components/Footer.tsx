import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaTiktok, FaGlobe, FaGooglePlay, FaApple } from "react-icons/fa";
const Footer = () => {
  return <footer className="bg-[#0B1E44] text-white" >
    <div className="container py-16" >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12" >
        {/* Logo & Info Column */ }
        < div className = "space-y-6" >
          <Link to="/" className = "inline-block" >
            <div className="flex items-center space-x-2" >
              <span className="text-3xl font-heading font-bold text-white" >
                Albarka
                </span>
                < span className = "text-3xl font-heading font-bold text-[#FF8C42]" >
                  +
                  </span>
                  </div>
                  </Link>

                  < p className = "text-white/80 text-sm leading-relaxed" >
                    "We empower Africans to own easily using smart installments."
                    </p>

                    < div className = "space-y-3 text-sm" >
                      <p className="text-white/90" > Omida Shopping Complex, Abeokuta, Ogun state.</p>
                        < a href = "mailto:hello@albarkaplus.com" className = "text-white/90 hover:text-[#FF8C42] transition-colors block underline" >
                          hello@albarkaplus.com
  </a>
    < div className = "space-y-1" >
      <p className="text-white/70 text-xs" > Call us on freecall - toll free </p>
        < a href = "tel:0707-460-3897" className = "text-white/90 hover:text-[#FF8C42] transition-colors block underline" >
                  0707 - 460 - 3897
          </a>
          < a href = "tel:0707-445-2992" className = "text-white/90 hover:text-[#FF8C42] transition-colors block underline" >
                  0707 - 445 - 2992
            </a>
            </div>
            </div>
            </div>

  {/* Company Column */ }
  <div>
    <h3 className="text-white font-semibold text-lg mb-6" > Company </h3>
      < ul className = "space-y-3" >
        <li>
        <Link to="/about" className = "text-white/80 hover:text-[#FF8C42] transition-colors text-sm underline" >
          About us
            </Link>
            </li>
            < li >
            <Link to="/contact" className = "text-white/80 hover:text-[#FF8C42] transition-colors text-sm underline" >
              Contact us
                </Link>
                </li>
                < li >
                <Link to="/testimonials" className = "text-white/80 hover:text-[#FF8C42] transition-colors text-sm underline" >
                  Testimonials
                  </Link>
                  </li>
                  < li >
                  <Link to="/enquiry" className = "text-white/80 hover:text-[#FF8C42] transition-colors text-sm underline" >
                    Enquiry / Pick Up Centres
                      </Link>
                      </li>
                      </ul>
                      </div>

  {/* Business Column */ }
  <div>
    <h3 className="text-white font-semibold text-lg mb-6" > Business </h3>
      < ul className = "space-y-3" >
        <li>
        <Link to="/catalog" className = "text-white/80 hover:text-[#FF8C42] transition-colors text-sm underline" >
          Shop on web
            </Link>
            </li>
            < li >
            <Link to="/app" className = "text-white/80 hover:text-[#FF8C42] transition-colors text-sm underline" >
              Get the app
                </Link>
                </li>
                < li >
                <Link to="/faq" className = "text-white/80 hover:text-[#FF8C42] transition-colors text-sm underline" >
                  Help and FAQ
                    </Link>
                    </li>
                    </ul>
                    </div>

  {/* Terms of Service Column */ }
  <div>
    <h3 className="text-white font-semibold text-lg mb-6" > Terms of Service </h3>
      < ul className = "space-y-3" >
        <li>
        <Link to="/terms" className = "text-white/80 hover:text-[#FF8C42] transition-colors text-sm underline" >
          Terms of Use
            </Link>
            </li>
            < li >
            <Link to="/terms-conditions" className = "text-white/80 hover:text-[#FF8C42] transition-colors text-sm underline" >
              Terms and Conditions
                </Link>
                </li>
                < li >
                <Link to="/privacy" className = "text-white/80 hover:text-[#FF8C42] transition-colors text-sm underline" >
                  Privacy Policy
                    </Link>
                    </li>
                    < li >
                    <Link to="/proprietary" className = "text-white/80 hover:text-[#FF8C42] transition-colors text-sm underline" >
                      Proprietary Rights
                        </Link>
                        </li>
                        < li >
                        <Link to="/warranty" className = "text-white/80 hover:text-[#FF8C42] transition-colors text-sm underline" >
                          After sales Support & General Warranty
                            </Link>
                            </li>
                            </ul>
                            </div>
                            </div>

  {/* Social Icons & App Store Buttons */ }
  <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-white/20 gap-6" >
    {/* Social Icons */ }
    < div className = "flex items-center gap-4" >
      <a href="https://youtube.com" target = "_blank" rel = "noopener noreferrer" className = "w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0B1E44] hover:bg-[#FF8C42] hover:text-white transition-colors" >
        <FaYoutube className="text-lg" />
          </a>
          < a href = "https://tiktok.com" target = "_blank" rel = "noopener noreferrer" className = "w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0B1E44] hover:bg-[#FF8C42] hover:text-white transition-colors" >
            <FaTiktok className="text-lg" />
              </a>
              < a href = "https://linkedin.com" target = "_blank" rel = "noopener noreferrer" className = "w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0B1E44] hover:bg-[#FF8C42] hover:text-white transition-colors" >
                <FaLinkedinIn className="text-lg" />
                  </a>
                  < a href = "https://twitter.com" target = "_blank" rel = "noopener noreferrer" className = "w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0B1E44] hover:bg-[#FF8C42] hover:text-white transition-colors" >
                    <FaTwitter className="text-lg" />
                      </a>
                      < a href = "https://facebook.com" target = "_blank" rel = "noopener noreferrer" className = "w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0B1E44] hover:bg-[#FF8C42] hover:text-white transition-colors" >
                        <FaFacebookF className="text-lg" />
                          </a>
                          < a href = "https://instagram.com" target = "_blank" rel = "noopener noreferrer" className = "w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0B1E44] hover:bg-[#FF8C42] hover:text-white transition-colors" >
                            <FaInstagram className="text-lg" />
                              </a>
                              < a href = "https://albarkaplus.com" target = "_blank" rel = "noopener noreferrer" className = "w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0B1E44] hover:bg-[#FF8C42] hover:text-white transition-colors" >
                                <FaGlobe className="text-lg" />
                                  </a>
                                  </div>

  {/* App Store Buttons */ }
  <div className="flex items-center gap-4" >
    <a href="#" className = "inline-flex items-center gap-2 bg-white text-[#0B1E44] px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors" >
      <FaGooglePlay className="text-2xl" />
        <div className="text-left" >
          <div className="text-[10px] uppercase" > Get it on </div>
            < div className = "text-sm font-semibold" > Google Play </div>
              </div>
              </a>
              < a href = "#" className = "inline-flex items-center gap-2 bg-white text-[#0B1E44] px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors" >
                <FaApple className="text-3xl" />
                  <div className="text-left" >
                    <div className="text-[10px] uppercase" > Get it on </div>
                      < div className = "text-sm font-semibold" > Apple Store </div>
                        </div>
                        </a>
                        </div>
                        </div>

  {/* Copyright */ }
  <div className="text-center mt-8 pt-6 border-t border-white/20" >
    <p className="text-white/60 text-sm" >
      Copyright © { new Date().getFullYear() } Albarka + Inc.
          </p>
        </div>
        </div>
        </footer>;
};
export default Footer;