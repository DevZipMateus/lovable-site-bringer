import { Link } from 'react-router-dom';
import { Shield, Package, TruckIcon } from 'lucide-react';
import heroImage from '@/assets/hero-tech.jpg';

const Home = () => {
  return (
    <main className="flex flex-1 mx-auto w-full min-w-0">
      <div className="flex flex-col w-full flex-1">
        {/* Hero Section with parallax effect */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Background with overlay */}
          <div className="absolute inset-0">
            <img 
              src={heroImage}
              alt="Tecnologia de ponta em circuitos impressos" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background"></div>
          </div>

          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5"></div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-10 py-20">
            <div className="max-w-4xl">
              <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span className="text-sm font-medium text-primary">Mais de 25 anos de excelência</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6 animate-fade-in">
                <span className="text-foreground">Sua fonte </span>
                <span className="text-gradient">segura e confiável</span>
                <span className="text-foreground"> de suprimentos de informática</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                Compre com facilidade e a segurança que você merece. Soluções inovadoras para circuitos impressos.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/produtos">
                  <button className="group flex items-center justify-center gap-2 min-w-[180px] h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground text-base font-bold rounded-lg transition-all shadow-lg hover:shadow-primary/30 hover:shadow-xl hover:scale-105">
                    <span>Ver Produtos</span>
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </Link>
                
                <Link to="/sobre">
                  <button className="flex items-center justify-center min-w-[180px] h-14 px-8 bg-card hover:bg-card/80 text-foreground border border-border text-base font-semibold rounded-lg transition-all hover:scale-105">
                    Sobre Nós
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
              <div className="w-1 h-2 rounded-full bg-primary animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative py-24 px-4 sm:px-10">
          <div className="absolute inset-0 gradient-radial opacity-50"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-black mb-4 text-foreground">Por que escolher a MBITTENCOURT?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Compromisso com qualidade, segurança e atendimento excepcional
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group relative p-8 rounded-2xl bg-card/50 border border-border hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform">
                    <Shield size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Compra 100% Segura</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Seus dados protegidos do início ao fim da sua compra com tecnologia de ponta em segurança.
                  </p>
                </div>
              </div>

              <div className="group relative p-8 rounded-2xl bg-card/50 border border-border hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform">
                    <Package size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Catálogo Completo</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    As melhores marcas e a maior variedade de produtos especializados para suas necessidades.
                  </p>
                </div>
              </div>

              <div className="group relative p-8 rounded-2xl bg-card/50 border border-border hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform">
                    <TruckIcon size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Entrega Nacional</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Receba seus produtos com agilidade e segurança em qualquer lugar do Brasil.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
