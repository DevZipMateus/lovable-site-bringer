import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Package, TruckIcon, Flag, TrendingUp, Award, ShieldCheck, Clock, DollarSign, MessageCircle, Wrench, CheckCircle, Zap, Construction, Settings, MapPin, Phone, Mail, Send, X } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import heroImage from '@/assets/hero-tech.jpg';
import aboutImage from '@/assets/about-manufacturing.jpg';
import productGuide from '@/assets/product-guide.gif';
import productExtractor from '@/assets/product-extractor.jpg';
import guiaTechnicalSpecs from '@/assets/guia-technical-specs.jpg';
import extractorTechnicalSpecs from '@/assets/extractor-technical-specs.gif';
import logo from '@/assets/logo.png';

const Home = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [showGuiaSpecs, setShowGuiaSpecs] = useState(false);
  const [showExtractorSpecs, setShowExtractorSpecs] = useState(false);
  const { toast } = useToast();
  const filters = ['Todos', 'Guias-Isolantes', 'Extratores'];
  const whatsappLink = "https://wa.me/552125683966?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20da%20MBITTENCOURT.";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem Enviada!",
      description: "Obrigado pela sua mensagem! Entraremos em contato em breve.",
    });
  };

  return (
    <main className="flex flex-1 mx-auto w-full min-w-0">
      <div className="flex flex-col w-full flex-1">
        {/* Hero Section */}
        <section id="inicio" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden scroll-mt-20">
          <div className="absolute inset-0">
            <img 
              src={heroImage}
              alt="Tecnologia de ponta em circuitos impressos" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background"></div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-10 py-20">
            <div className="max-w-4xl">
              <div className="mb-8">
                <img 
                  src={logo}
                  alt="MBITTENCOURT Logo" 
                  className="h-24 sm:h-32 md:h-40 w-auto brightness-0 invert"
                />
              </div>
              
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
                <a href="#produtos">
                  <button className="group flex items-center justify-center gap-2 min-w-[180px] h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground text-base font-bold rounded-lg transition-all shadow-lg hover:shadow-primary/30 hover:shadow-xl hover:scale-105">
                    <span>Ver Produtos</span>
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </a>
                
                <a href="#sobre">
                  <button className="flex items-center justify-center min-w-[180px] h-14 px-8 bg-card hover:bg-card/80 text-foreground border border-border text-base font-semibold rounded-lg transition-all hover:scale-105">
                    Sobre Nós
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
              <div className="w-1 h-2 rounded-full bg-primary animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="relative py-24 px-4 sm:px-10 scroll-mt-20">
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

        {/* About Section */}
        <section id="sobre" className="relative min-h-[70vh] flex items-center justify-center overflow-hidden scroll-mt-20">
          <div className="absolute inset-0">
            <img 
              src={aboutImage}
              alt="Instalações modernas de manufatura MBITTENCOURT" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-10 py-20">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                <span className="text-sm font-medium text-primary">Desde 1996</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6">
                <span className="text-foreground">Mais de Duas Décadas de </span>
                <span className="text-gradient">Confiança e Inovação</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Conheça a história da MBITTENCOURT, fundada em 1996 a partir da Activel Comp. E Apar. Ltda, e nosso compromisso contínuo com a qualidade, confiabilidade e o melhor custo-benefício para nossos clientes.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 px-4 sm:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-24">
              <h2 className="text-3xl font-black mb-12 text-foreground">Nossa Trajetória</h2>
              
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>
                
                <div className="space-y-12">
                  <div className="relative pl-20 group">
                    <div className="absolute left-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 border-4 border-background ring-2 ring-primary/30 group-hover:scale-110 transition-transform">
                      <Flag size={20} className="text-primary" />
                    </div>
                    <div className="p-6 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all">
                      <p className="text-xl font-bold text-foreground mb-2">Nascimento da MBITTENCOURT</p>
                      <p className="text-primary font-semibold mb-2">1996</p>
                      <p className="text-muted-foreground">Fundação da empresa com foco em suprimentos de informática de alta qualidade.</p>
                    </div>
                  </div>

                  <div className="relative pl-20 group">
                    <div className="absolute left-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 border-4 border-background ring-2 ring-primary/30 group-hover:scale-110 transition-transform">
                      <TrendingUp size={20} className="text-primary" />
                    </div>
                    <div className="p-6 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all">
                      <p className="text-xl font-bold text-foreground mb-2">Crescimento e Expansão</p>
                      <p className="text-primary font-semibold mb-2">2010</p>
                      <p className="text-muted-foreground">Expansão das operações e consolidação no mercado brasileiro.</p>
                    </div>
                  </div>

                  <div className="relative pl-20 group">
                    <div className="absolute left-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 border-4 border-background ring-2 ring-primary group-hover:scale-110 transition-transform">
                      <Award size={20} className="text-primary" />
                    </div>
                    <div className="p-6 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all glow-card">
                      <p className="text-xl font-bold text-foreground mb-2">Líderes de Mercado Hoje</p>
                      <p className="text-primary font-semibold mb-2">Atualmente</p>
                      <p className="text-muted-foreground">Referência em soluções para circuitos impressos com presença nacional.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section id="pilares" className="py-24 px-4 sm:px-10 scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-black mb-4 text-foreground">Nossos Pilares</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Nossa missão é atender nossos clientes com a máxima eficiência, guiados por três princípios fundamentais
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group relative p-8 rounded-2xl bg-card/50 border border-border hover:border-primary/50 transition-all hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <ShieldCheck size={40} className="text-primary mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Confiabilidade</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Garantimos a segurança e a qualidade superior em todos os nossos produtos e serviços.
                  </p>
                </div>
              </div>

              <div className="group relative p-8 rounded-2xl bg-card/50 border border-border hover:border-primary/50 transition-all hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <Clock size={40} className="text-primary mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Assiduidade</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Oferecemos suporte contínuo, pontualidade e presença constante para nossos clientes.
                  </p>
                </div>
              </div>

              <div className="group relative p-8 rounded-2xl bg-card/50 border border-border hover:border-primary/50 transition-all hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <DollarSign size={40} className="text-primary mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Custo Reduzido</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Nossa estratégia é focada em oferecer sempre o melhor custo-benefício do mercado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="produtos" className="py-24 px-4 sm:px-10 scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-sm font-medium text-primary">Catálogo Completo</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">
                <span className="text-foreground">Soluções </span>
                <span className="text-gradient">Inovadoras</span>
                <span className="text-foreground"> para Circuitos Impressos</span>
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-3xl">
                Fornecemos componentes de alta precisão que garantem segurança e eficiência na montagem eletrônica.
              </p>
            </div>

            <div className="flex gap-3 pb-8 overflow-x-auto no-scrollbar">
              {filters.map(filter => (
                <button 
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`flex h-11 shrink-0 items-center justify-center px-6 rounded-lg font-semibold text-sm transition-all whitespace-nowrap ${
                    activeFilter === filter 
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30' 
                      : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <h3 className="text-2xl font-black mb-8 text-foreground">Produtos em Destaque</h3>

            <div className="space-y-8 mb-12">
              <div className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all glow-card">
                <div className="flex flex-col lg:flex-row">
                  <div className="relative lg:w-2/5 aspect-video lg:aspect-auto overflow-hidden bg-card/50">
                    <img 
                      src={productGuide}
                      alt="Guia-Isolante para PCB de alta qualidade" 
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent lg:hidden"></div>
                  </div>
                  
                  <div className="flex-1 p-6 sm:p-8 lg:p-10">
                    <div className="mb-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                      Tecnologia de Ponta
                    </div>
                    
                    <h4 className="text-2xl sm:text-3xl font-black mb-4 text-foreground">Guia-Isolante para PCB</h4>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Garanta alinhamento perfeito e proteção contra danos elétricos e mecânicos. Elimine falhas na inserção e remoção de PCBs com nosso material de alta resistência.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                          <Wrench size={20} className="text-primary" />
                        </div>
                        <span className="text-sm font-medium text-muted-foreground">Fácil Instalação</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                          <Shield size={20} className="text-primary" />
                        </div>
                        <span className="text-sm font-medium text-muted-foreground">Alta Resistência</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                          <CheckCircle size={20} className="text-primary" />
                        </div>
                        <span className="text-sm font-medium text-muted-foreground">Segurança Operacional</span>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => setShowGuiaSpecs(true)}
                      className="flex items-center justify-center h-12 px-6 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-lg transition-all shadow-lg hover:shadow-primary/30"
                    >
                      Saiba Mais
                    </button>
                  </div>
                </div>
              </div>

              <div className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all glow-card">
                <div className="flex flex-col lg:flex-row">
                  <div className="relative lg:w-2/5 aspect-video lg:aspect-auto overflow-hidden">
                    <img 
                      src={productExtractor}
                      alt="Extratores para circuitos impressos" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent lg:hidden"></div>
                  </div>
                  
                  <div className="flex-1 p-6 sm:p-8 lg:p-10">
                    <div className="mb-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                      Extração Segura
                    </div>
                    
                    <h4 className="text-2xl sm:text-3xl font-black mb-4 text-foreground">Extratores para Circuito Impresso</h4>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Projetados para remover placas de circuito impresso de maneira segura e eficiente, prevenindo danos aos componentes e garantindo a integridade do sistema.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                          <Settings size={20} className="text-primary" />
                        </div>
                        <span className="text-sm font-medium text-muted-foreground">Design Ergonômico</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                          <Zap size={20} className="text-primary" />
                        </div>
                        <span className="text-sm font-medium text-muted-foreground">Proteção Antiestática</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                          <Construction size={20} className="text-primary" />
                        </div>
                        <span className="text-sm font-medium text-muted-foreground">Durabilidade Superior</span>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => setShowExtractorSpecs(true)}
                      className="flex items-center justify-center h-12 px-6 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-lg transition-all shadow-lg hover:shadow-primary/30"
                    >
                      Saiba Mais
                    </button>
                  </div>
                </div>
              </div>
            </div>


            <div className="relative rounded-3xl overflow-hidden glow-card text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent"></div>
              <div className="relative p-10 md:p-16">
                <h3 className="text-3xl sm:text-4xl font-black mb-4 text-foreground">
                  Pronto para otimizar sua produção?
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  Entre em contato para um orçamento personalizado ou para saber mais sobre nossas especificações técnicas.
                </p>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <button className="inline-flex items-center gap-3 h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-bold rounded-lg transition-all shadow-lg hover:shadow-primary/30 hover:scale-105">
                    <MessageCircle size={22} />
                    <span>Solicitar Orçamento</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="py-24 px-4 sm:px-10 scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center">
              <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-sm font-medium text-primary">Estamos Aqui</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">
                <span className="text-foreground">Entre em </span>
                <span className="text-gradient">Contato</span>
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Estamos prontos para ajudar. Preencha o formulário ou utilize nossos canais diretos.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-black mb-8 text-foreground">Nossa Localização</h3>
                  
                  <div className="space-y-6">
                    <div className="group flex items-start gap-4 p-6 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all hover:-translate-y-1">
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary shrink-0 group-hover:scale-110 transition-transform">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <p className="font-bold text-foreground mb-2">Endereço</p>
                        <p className="text-muted-foreground leading-relaxed">
                          Rua Haddock Lobo, 200 - Sala 301<br />
                          Tijuca, Rio de Janeiro - RJ<br />
                          CEP 20.260-132
                        </p>
                      </div>
                    </div>

                    <div className="group flex items-start gap-4 p-6 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all hover:-translate-y-1">
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary shrink-0 group-hover:scale-110 transition-transform">
                        <Phone size={24} />
                      </div>
                      <div>
                        <p className="font-bold text-foreground mb-2">Telefone</p>
                        <a href="tel:+552125683966" className="text-muted-foreground hover:text-primary transition-colors">
                          (21) 2568-3966
                        </a>
                      </div>
                    </div>

                    <div className="group flex items-start gap-4 p-6 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all hover:-translate-y-1">
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary shrink-0 group-hover:scale-110 transition-transform">
                        <Mail size={24} />
                      </div>
                      <div>
                        <p className="font-bold text-foreground mb-2">E-mail</p>
                        <a href="mailto:vendas@mbittencourt.com.br" className="text-muted-foreground hover:text-primary transition-colors break-all">
                          vendas@mbittencourt.com.br
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden glow-card">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                <div className="relative p-8 bg-card/80 backdrop-blur-sm border border-border">
                  <h3 className="text-2xl font-black mb-6 text-foreground">Envie uma Mensagem</h3>
                  
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2" htmlFor="name">
                        Nome Completo
                      </label>
                      <input 
                        className="w-full h-12 px-4 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
                        id="name" 
                        name="name" 
                        placeholder="Seu nome" 
                        type="text"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2" htmlFor="email">
                        E-mail
                      </label>
                      <input 
                        className="w-full h-12 px-4 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
                        id="email" 
                        name="email" 
                        placeholder="seu.email@exemplo.com" 
                        type="email"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2" htmlFor="subject">
                        Assunto
                      </label>
                      <input 
                        className="w-full h-12 px-4 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
                        id="subject" 
                        name="subject" 
                        placeholder="Sobre o que deseja falar?" 
                        type="text"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2" htmlFor="message">
                        Mensagem
                      </label>
                      <textarea 
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none" 
                        id="message" 
                        name="message" 
                        placeholder="Escreva sua mensagem..." 
                        rows={5}
                        required
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-lg transition-all shadow-lg hover:shadow-primary/30 hover:scale-[1.02]"
                    >
                      <Send size={20} />
                      <span>Enviar Mensagem</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="relative rounded-2xl overflow-hidden border border-border aspect-[21/9] glow-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.8193829247287!2d-43.231!3d-22.9213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997e5e3c5c5c5c5c%3A0x5c5c5c5c5c5c5c5c!2sRua%20Haddock%20Lobo%2C%20200%20-%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020260-132!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da MBITTENCOURT no Google Maps"
                className="absolute inset-0"
              />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-4 sm:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden glow-card">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent"></div>
              <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-black mb-4 text-foreground">
                    Nosso Compromisso com a Qualidade
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    A dedicação à excelência e à satisfação do cliente é o pilar central da nossa empresa. Reforçamos continuamente nosso compromisso em fornecer soluções que não apenas atendam, mas superem as expectativas.
                  </p>
                </div>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <button className="flex items-center gap-3 min-w-[220px] h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-bold rounded-lg transition-all shadow-lg hover:shadow-primary/30 hover:scale-105">
                    <MessageCircle size={22} />
                    <span>Fale Conosco</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specs Dialog */}
        <Dialog open={showGuiaSpecs} onOpenChange={setShowGuiaSpecs}>
          <DialogContent className="max-w-5xl max-h-[90vh] p-0 overflow-hidden">
            <DialogTitle className="sr-only">Especificações Técnicas - Guia Isolante</DialogTitle>
            <div className="relative w-full h-full">
              <button
                onClick={() => setShowGuiaSpecs(false)}
                className="absolute top-4 right-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background transition-all"
                aria-label="Fechar"
              >
                <X size={20} />
              </button>
              <div className="overflow-auto max-h-[90vh] p-6">
                <img
                  src={guiaTechnicalSpecs}
                  alt="Especificações Técnicas - Guias Isolantes AC101/AC102/AC103/AC104"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Extractor Technical Specs Dialog */}
        <Dialog open={showExtractorSpecs} onOpenChange={setShowExtractorSpecs}>
          <DialogContent className="max-w-3xl max-h-[90vh] p-0 overflow-hidden">
            <DialogTitle className="sr-only">Especificações Técnicas - Extrator AC201</DialogTitle>
            <div className="relative w-full h-full">
              <button
                onClick={() => setShowExtractorSpecs(false)}
                className="absolute top-4 right-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background transition-all"
                aria-label="Fechar"
              >
                <X size={20} />
              </button>
              <div className="overflow-auto max-h-[90vh] p-6">
                <img
                  src={extractorTechnicalSpecs}
                  alt="Especificações Técnicas - Extrator AC201"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </main>
  );
};

export default Home;