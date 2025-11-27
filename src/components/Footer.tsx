import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="relative mt-auto pt-16 pb-8 border-t border-border/50 bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50"></div>
      
      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-10">
        <div className="flex flex-col items-center gap-8 mb-8">
          <div className="flex flex-col items-center gap-3">
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
