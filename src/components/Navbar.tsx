import { useState } from 'react';
import { Link } from 'react-router-dom';

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
    <header className="border-b border-solid border-border/50 bg-background sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-10 min-h-[64px] py-2 flex items-center justify-between">
        <div className="flex items-center gap-4 text-foreground shrink-0">
          <Link to="/" className="size-6 text-primary shrink-0">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor"></path>
            </svg>
          </Link>
          <Link to="/" className="text-foreground text-lg font-bold leading-tight tracking-[-0.015em] hover:text-primary transition-colors">
            MBITTENCOURT
          </Link>
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex flex-1 justify-end gap-8 items-center">
          <div className="flex items-center gap-9">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.to} 
                className="text-sm font-medium leading-normal text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
             <button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg min-h-[40px] px-4 bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-bold leading-normal tracking-[0.015em] transition-colors shadow-md">
                <span className="text-center">Fale Conosco</span>
            </button>
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-foreground p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu">
          <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-background border-b border-border/50 p-4 flex flex-col gap-4 md:hidden shadow-xl z-50 backdrop-blur-sm">
          {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.to} 
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-medium leading-normal text-foreground hover:text-primary transition-colors p-2"
              >
                {link.name}
              </Link>
            ))}
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
            <button className="w-full min-h-[48px] bg-primary text-primary-foreground rounded-lg font-bold text-base hover:bg-primary/90 transition-colors py-2 shadow-md">Fale Conosco</button>
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
