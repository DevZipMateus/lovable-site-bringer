import { Flag, TrendingUp, Award, ShieldCheck, Clock, DollarSign, MessageCircle } from 'lucide-react';
import aboutImage from '@/assets/about-manufacturing.jpg';

const About = () => {
  const whatsappLink = "https://wa.me/552125683966?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20da%20MBITTENCOURT.";

  return (
    <main className="flex flex-1 mx-auto w-full min-w-0">
      <div className="flex w-full flex-1 flex-col">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
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
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6">
                <span className="text-foreground">Mais de Duas Décadas de </span>
                <span className="text-gradient">Confiança e Inovação</span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Conheça a história da MBITTENCOURT, fundada em 1996 a partir da Activel Comp. E Apar. Ltda, e nosso compromisso contínuo com a qualidade, confiabilidade e o melhor custo-benefício para nossos clientes.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 px-4 sm:px-10">
          <div className="max-w-7xl mx-auto">
            {/* Timeline */}
            <div className="mb-24">
              <h2 className="text-3xl font-black mb-12 text-foreground">Nossa Trajetória</h2>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>
                
                <div className="space-y-12">
                  {/* Timeline Item 1 */}
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

                  {/* Timeline Item 2 */}
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

                  {/* Timeline Item 3 */}
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

            {/* Our Pillars */}
            <div className="mb-24">
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

            {/* CTA Section */}
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
      </div>
    </main>
  );
};

export default About;
