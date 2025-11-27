import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const whatsappLink = "https://wa.me/552125683966?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20MBITTENCOURT.";

  const navLinks = [
    { name: 'Início', to: '/' },
    { name: 'Produtos', to: '/produtos' },
    { name: 'Sobre Nós', to: '/sobre' },
    { name: 'Contato', to: '/contato' },
  ];

  return (
    <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-10 min-h-[72px] py-2 flex items-center justify-between">
        <div className="flex items-center gap-4 shrink-0">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="size-8 text-primary shrink-0 transition-transform group-hover:scale-110">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor"></path>
              </svg>
            </div>
            <span className="text-foreground text-xl font-bold leading-tight tracking-tight transition-colors group-hover:text-primary">
              MBITTENCOURT
            </span>
          </Link>
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex flex-1 justify-end gap-8 items-center">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.to} 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button className="flex items-center gap-2 min-w-[140px] cursor-pointer justify-center rounded-lg h-10 px-5 bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-semibold transition-all shadow-lg hover:shadow-primary/20 hover:shadow-xl">
              <MessageCircle size={18} />
              <span>Fale Conosco</span>
            </button>
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-foreground p-2 hover:text-primary transition-colors" 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-border/50 p-4 flex flex-col gap-4 md:hidden shadow-2xl z-50 animate-fade-in">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.to} 
              onClick={() => setIsMenuOpen(false)}
              className="text-base font-medium text-foreground hover:text-primary transition-colors p-3 rounded-lg hover:bg-card"
            >
              {link.name}
            </Link>
          ))}
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
            <button className="w-full flex items-center justify-center gap-2 min-h-[48px] bg-primary text-primary-foreground rounded-lg font-semibold text-base hover:bg-primary/90 transition-colors py-3 shadow-lg">
              <MessageCircle size={20} />
              <span>Fale Conosco</span>
            </button>
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
