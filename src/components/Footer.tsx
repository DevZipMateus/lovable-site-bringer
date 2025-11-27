import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="relative mt-auto pt-16 pb-8 border-t border-border/50 bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50"></div>
      
      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="flex flex-col items-center md:items-start gap-3">
            <Link to="/" className="group">
              <div className="h-14 overflow-hidden flex items-center">
                <img 
                  src={logo} 
                  alt="MBITTENCOURT Logo" 
                  className="h-20 w-auto brightness-0 invert transition-all group-hover:scale-105 object-contain"
                />
              </div>
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
