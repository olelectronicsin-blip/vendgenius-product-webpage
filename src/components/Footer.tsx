import { Mail, Phone, MapPin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/Logo.png" alt="VendGenius Logo" className="h-12 w-auto brightness-0 invert" />
            </div>
            <h3 className="text-xl font-bold mb-3">VendGenius</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Revolutionizing fresh juice delivery with IoT-enabled automation and patented technology.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/people/VendGenius/100067025800737/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-lg hover:bg-teal-600 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('features')} className="text-gray-400 hover:text-teal-400 transition-colors">
                  Features
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('how-it-works')} className="text-gray-400 hover:text-teal-400 transition-colors">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('management')} className="text-gray-400 hover:text-teal-400 transition-colors">
                  Management
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('specifications')} className="text-gray-400 hover:text-teal-400 transition-colors">
                  Specifications
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('faq')} className="text-gray-400 hover:text-teal-400 transition-colors">
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-teal-400" />
                <a href="mailto:connect@vendgenius.in" className="hover:text-teal-400 transition-colors">
                  connect@vendgenius.in
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-teal-400" />
                <a href="tel:+916900105606" className="hover:text-teal-400 transition-colors">
                  +91 6900105606
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-teal-400" />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm flex items-center gap-1 flex-wrap">
              <span>&copy; {new Date().getFullYear()} VendGenius. All rights reserved.</span>
              <span className="hidden md:inline">|</span>
              <span className="flex items-center gap-1">
                Developed by{' '}
                <a
                  href="https://www.byteflowdigiai.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-gray-300 hover:text-teal-400 transition-colors"
                >
                  ByteFlow DigiAI
                </a>
              </span>
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <Link to="/privacy-policy" className="hover:text-teal-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-teal-400 transition-colors">Terms of Service</Link>
              <Link to="/cookie-policy" className="hover:text-teal-400 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
