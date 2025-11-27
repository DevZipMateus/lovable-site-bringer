import { useState } from 'react';
import { Wrench, Shield, CheckCircle, Zap, Construction, Settings, MessageCircle } from 'lucide-react';
import productGuide from '@/assets/product-guide.jpg';
import productExtractor from '@/assets/product-extractor.jpg';
import productAccessories from '@/assets/product-accessories.jpg';
import productService from '@/assets/product-service.jpg';

const Products = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filters = ['Todos', 'Guias-Isolantes', 'Extratores', 'Acessórios'];
  const whatsappLink = "https://wa.me/552125683966?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20MBITTENCOURT%20sobre%20os%20produtos.";

  return (
    <main className="flex flex-1 mx-auto w-full min-w-0 py-10 px-4 sm:px-10 font-grotesk">
      <div className="max-w-7xl mx-auto flex-1 w-full">
        
        {/* Page Header */}
        <div className="mb-12">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-sm font-medium text-primary">Catálogo Completo</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">
            <span className="text-foreground">Soluções </span>
            <span className="text-gradient">Inovadoras</span>
            <span className="text-foreground"> para Circuitos Impressos</span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-3xl">
            Fornecemos componentes de alta precisão que garantem segurança e eficiência na montagem eletrônica.
          </p>
        </div>

        {/* Filter Chips */}
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

        {/* Featured Products */}
        <h2 className="text-2xl font-black mb-8 text-foreground">Produtos em Destaque</h2>

        <div className="space-y-8 mb-12">
          {/* Product Card 1 */}
          <div className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all glow-card">
            <div className="flex flex-col lg:flex-row">
              <div className="relative lg:w-2/5 aspect-video lg:aspect-auto overflow-hidden">
                <img 
                  src={productGuide}
                  alt="Guia-Isolante para PCB de alta qualidade" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent lg:hidden"></div>
              </div>
              
              <div className="flex-1 p-6 sm:p-8 lg:p-10">
                <div className="mb-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                  Tecnologia de Ponta
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-black mb-4 text-foreground">Guia-Isolante para PCB</h3>
                
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
                
                <button className="flex items-center justify-center h-12 px-6 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-lg transition-all shadow-lg hover:shadow-primary/30">
                  Saiba Mais
                </button>
              </div>
            </div>
          </div>

          {/* Product Card 2 */}
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
                
                <h3 className="text-2xl sm:text-3xl font-black mb-4 text-foreground">Extratores para Circuito Impresso</h3>
                
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
                
                <button className="flex items-center justify-center h-12 px-6 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-lg transition-all shadow-lg hover:shadow-primary/30">
                  Saiba Mais
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Card 3 */}
          <div className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all glow-card">
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={productAccessories}
                alt="Componentes e acessórios eletrônicos" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-6">
              <div className="mb-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                Acessórios
              </div>
              <h3 className="text-xl font-black mb-3 text-foreground">Componentes e Acessórios</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Tudo o que você precisa para uma montagem eletrônica completa e segura.
              </p>
              <button className="flex items-center justify-center w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all">
                Ver Acessórios
              </button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all glow-card">
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={productService}
                alt="Serviços de montagem especializada" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-6">
              <div className="mb-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                Serviços
              </div>
              <h3 className="text-xl font-black mb-3 text-foreground">Montagem Especializada</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Serviços de montagem e consultoria para otimizar seu processo produtivo.
              </p>
              <button className="flex items-center justify-center w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all">
                Nossos Serviços
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
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
    </main>
  );
};

export default Products;
