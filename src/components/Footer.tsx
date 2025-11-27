import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative mt-auto pt-16 pb-8 border-t border-border/50 bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50"></div>
      
      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="flex flex-col items-center md:items-start gap-3">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="size-6 text-primary transition-transform group-hover:scale-110">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor"></path>
                </svg>
              </div>
              <h2 className="text-foreground text-xl font-black group-hover:text-primary transition-colors">
                MBITTENCOURT
              </h2>
            </Link>
            <p className="text-muted-foreground text-sm">Suprimentos de Informática LTDA</p>
            <p className="text-muted-foreground text-xs">Desde 1996 | Rio de Janeiro, Brasil</p>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="#" 
              aria-label="Facebook"
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all hover:scale-110"
            >
              <Facebook size={20} />
            </a>
            <a 
              href="#" 
              aria-label="Twitter"
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all hover:scale-110"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="#" 
              aria-label="LinkedIn"
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all hover:scale-110"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} MBITTENCOURT. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
