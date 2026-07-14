import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' },
    { name: 'AI Property Hub', path: '/ai-hub' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      {/* Mobile Topbar (Dark Red) */}
      <div className="md:hidden bg-[#863A27] text-white px-4 py-3 flex items-center justify-between sticky top-0 z-50">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg">
          <Home className="w-5 h-5 text-[#D4755B]" />
          PlotFarm
        </Link>
        <button onClick={() => setIsOpen(!isOpen)} className="p-1">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Desktop Navbar (Cream/Transparent) */}
      <nav className="hidden md:flex bg-[#FAF8F4] px-8 py-4 items-center justify-between sticky top-0 z-50 border-b border-[#E6D5C3]">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#1C1B1A]">
          <Home className="w-6 h-6 text-[#D4755B]" />
          PlotFarm
        </Link>

        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-sm font-semibold transition-colors ${
                location.pathname === link.path ? 'text-[#D4755B]' : 'text-[#5A5856] hover:text-[#1C1B1A]'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link to="/signin" className="text-sm font-semibold text-[#1C1B1A]">Login</Link>
          <Link to="/signup" className="px-4 py-2 bg-[#D4755B] text-white text-sm font-semibold rounded-lg hover:bg-[#C05E44] transition-colors">
            Signup
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[52px] bg-[#FAF8F4] z-40 p-4 flex flex-col gap-4 shadow-lg border-b border-[#E6D5C3]">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-lg font-semibold text-[#1C1B1A] py-2 border-b border-[#E6D5C3]/50"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <Link to="/signin" onClick={() => setIsOpen(false)} className="w-full text-center py-3 border border-[#E6D5C3] rounded-lg font-semibold text-[#1C1B1A]">Login</Link>
            <Link to="/signup" onClick={() => setIsOpen(false)} className="w-full text-center py-3 bg-[#D4755B] text-white rounded-lg font-semibold">Signup</Link>
          </div>
        </div>
      )}
    </>
  );
}