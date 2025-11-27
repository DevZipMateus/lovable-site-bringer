import { useState } from 'react';

const Products = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filters = ['Todos', 'Guias-Isolantes', 'Extratores', 'Acessórios'];
  const whatsappLink = "https://wa.me/552125683966?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20MBITTENCOURT%20sobre%20os%20produtos.";

  return (
    <main className="flex flex-1 mx-auto w-full min-w-0 px-4 sm:px-10 py-5 font-grotesk">
      <div className="layout-content-container flex flex-col max-w-7xl flex-1">
        
        {/* PageHeading */}
        <div className="flex flex-wrap justify-between gap-3 pt-5 md:pt-10 pb-4">
          <div className="flex min-w-0 flex-col gap-3 max-w-3xl">
            <p className="text-foreground text-2xl sm:text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em] break-words">Soluções Inovadoras para Circuitos Impressos</p>
            <p className="text-muted-foreground text-sm sm:text-base font-normal leading-normal break-words">Fornecemos componentes de alta precisão que garantem segurança e eficiência na montagem eletrônica.</p>
          </div>
        </div>

        {/* Chips */}
        <div className="flex gap-3 pb-3 pt-4 overflow-x-auto no-scrollbar touch-pan-x">
          {filters.map(filter => (
             <div 
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg px-6 cursor-pointer transition-colors whitespace-nowrap select-none ${activeFilter === filter ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground hover:bg-primary/50 hover:text-primary-foreground'}`}
            >
              <p className="text-sm font-bold leading-normal">{filter}</p>
            </div>
          ))}
        </div>

        {/* SectionHeader */}
        <h2 className="text-foreground text-xl sm:text-[22px] font-bold leading-tight tracking-[-0.015em] pb-6 pt-8">Produtos em Destaque</h2>

        {/* Card 1 */}
        <div className="mb-6">
          <div className="flex flex-col lg:flex-row items-stretch justify-start rounded-xl bg-card border border-border hover:border-primary/50 transition-all shadow-lg hover:shadow-2xl overflow-hidden">
            <div 
              className="w-full lg:w-2/5 aspect-video lg:aspect-auto lg:h-auto bg-center bg-no-repeat bg-cover" 
              style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDhPVLImq7iXRiYRV0d7sktTcUcN9Vl3lzUimAk9SE8qg28DYD4PluOM18hPb_U7x3VVW8VJlgbNIxiLu1FX3HOy8KGTKhGSmr8HF8fwsrsiu3DXQf7_hiAbG6l1DwMIB52vko5RB3pFt1sTvbJ9auKoGmkSLAxbwY3MxAkh2Lwla9P2ltjffcYTZHZ8rP0Qe_Gjvk5sXi5365WlnnM6ZmG9dHiU40RtImQVj6t66qH_nfCmpR_wVHDlzdzH_BV2KSQp_cjRTufjorx")'}}
            ></div>
            <div className="flex w-full lg:w-3/5 min-w-0 flex-col justify-center gap-4 p-5 sm:p-8">
              <div className="flex flex-col gap-2">
                <p className="text-primary text-xs sm:text-sm font-bold leading-normal uppercase tracking-wider">Tecnologia de Ponta</p>
                <p className="text-foreground text-xl sm:text-2xl font-bold leading-tight tracking-[-0.015em] break-words">Guia-Isolante para PCB</p>
                <p className="text-muted-foreground text-sm sm:text-base font-normal leading-relaxed break-words">Garanta alinhamento perfeito e proteção contra danos elétricos e mecânicos. Elimine falhas na inserção e remoção de PCBs com nosso material de alta resistência.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-2">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl sm:text-2xl">build_circle</span>
                  <p className="text-muted-foreground text-sm font-medium">Fácil Instalação</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl sm:text-2xl">shield</span>
                  <p className="text-muted-foreground text-sm font-medium">Material de Alta Resistência</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl sm:text-2xl">verified_user</span>
                  <p className="text-muted-foreground text-sm font-medium">Segurança Operacional</p>
                </div>
              </div>
              <div className="flex items-end justify-start sm:justify-end mt-4">
                <button className="flex w-full sm:w-auto min-w-[120px] cursor-pointer items-center justify-center rounded-lg min-h-[44px] h-auto py-2 px-6 bg-primary text-primary-foreground text-sm font-bold leading-normal hover:bg-primary/90 transition-colors shadow-md">
                  <span className="text-center whitespace-normal">Saiba Mais</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="mb-6">
          <div className="flex flex-col lg:flex-row items-stretch justify-start rounded-xl bg-card border border-border hover:border-primary/50 transition-all shadow-lg hover:shadow-2xl overflow-hidden">
            <div 
              className="w-full lg:w-2/5 aspect-video lg:aspect-auto lg:h-auto bg-center bg-no-repeat bg-cover" 
              style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAOw0Sp0QjQ_YnExLaYleHyu1upzxKA6UOgWv0V0Ri3P_6wLOKyHmg4V3LF-DiDCdQOpvh1O7jgVKc4GQ75HISfCJVduOC6T_KJvjPGjHx5AEkRz8gVUdo0luTV-Dpo06zscJ6q0phuIQidezAemEiLvAGsIzBLo9mWbUnrTEZJnQ69iwhFDdeCPDF2Blyf5QboQ4lKD1Fqiiet07fquZbFr0FJhB7EP5u9-dyviufCBlCcrYTOYNt9tm3SemIh9tCk7C0Q3bvvaNNn")'}}
            ></div>
            <div className="flex w-full lg:w-3/5 min-w-0 flex-col justify-center gap-4 p-5 sm:p-8">
              <div className="flex flex-col gap-2">
                <p className="text-primary text-xs sm:text-sm font-bold leading-normal uppercase tracking-wider">Extração Segura</p>
                <p className="text-foreground text-xl sm:text-2xl font-bold leading-tight tracking-[-0.015em] break-words">Extratores para Circuito Impresso</p>
                <p className="text-muted-foreground text-sm sm:text-base font-normal leading-relaxed break-words">Projetados para remover placas de circuito impresso de maneira segura e eficiente, prevenindo danos aos componentes e garantindo a integridade do sistema.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-2">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl sm:text-2xl">precision_manufacturing</span>
                  <p className="text-muted-foreground text-sm font-medium">Design Ergonômico</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl sm:text-2xl">bolt</span>
                  <p className="text-muted-foreground text-sm font-medium">Proteção Antiestática</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl sm:text-2xl">construction</span>
                  <p className="text-muted-foreground text-sm font-medium">Durabilidade Superior</p>
                </div>
              </div>
              <div className="flex items-end justify-start sm:justify-end mt-4">
                <button className="flex w-full sm:w-auto min-w-[120px] cursor-pointer items-center justify-center rounded-lg min-h-[44px] h-auto py-2 px-6 bg-primary text-primary-foreground text-sm font-bold leading-normal hover:bg-primary/90 transition-colors shadow-md">
                  <span className="text-center whitespace-normal">Saiba Mais</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          {/* Card 3 */}
          <div className="flex flex-col rounded-xl bg-card p-5 sm:p-6 border border-border hover:border-primary/50 transition-all shadow-lg hover:shadow-2xl">
            <div 
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg mb-6" 
              style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuASlpKl2J-q2YKj0Oz5ZtxjxvbDDnp0sLIyAUMsd_FhtiS_SzgdtWvFDB5XJx1eAvzegfDHTX-d46hA4olnNdjLkje4XanyfUfsUIKJ4Zo8CS7aOyFKexOeof60PfGHDQ-MMRLZH8wJ2yGyVN4QzOdbrG-klQSjDTfs2kn1tdsrpu5beUy4aELK_4OB8zbW3S21qL39qipi5vLYFjx_xxERAOSyu4C3LbsBbDM9b-1QeRQKa8lDj0Me7ZDh1rhNbfPlCr7LCSvS8LeP")'}}
            ></div>
            <div className="flex flex-col gap-2 flex-grow min-w-0">
              <p className="text-primary text-xs sm:text-sm font-bold uppercase tracking-wider">Acessórios</p>
              <p className="text-foreground text-lg sm:text-xl font-bold leading-tight break-words">Componentes e Acessórios</p>
              <p className="text-muted-foreground text-sm sm:text-base font-normal leading-relaxed flex-grow break-words">Tudo o que você precisa para uma montagem eletrônica completa e segura.</p>
            </div>
            <div className="mt-6 flex justify-end">
              <button className="flex w-full sm:w-auto min-w-[120px] cursor-pointer items-center justify-center rounded-lg min-h-[44px] h-auto py-2 px-6 bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/90 transition-colors shadow-md">
                <span className="text-center whitespace-normal">Ver Acessórios</span>
              </button>
            </div>
          </div>
          {/* Card 4 */}
          <div className="flex flex-col rounded-xl bg-card p-5 sm:p-6 border border-border hover:border-primary/50 transition-all shadow-lg hover:shadow-2xl">
            <div 
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg mb-6" 
              style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuChTiXyalRh8n8cVvkdRKl5fHJEhmxbw152jj6H5YWDzmCXy6QBK6L8roYU2y1M0tfXE_iQQRUVe6dD0yh6dUCwYaquHebNvLBgxQtoHmObkkX_zmEPKbE6chlrZ7OC1syIvcwmHkFhrqVb8ARjB3a-4MsqwGFD1SITZW-rAyV2-Rd2p_lTBCoWOQkfWbKP311TbDfdHFxbHfCzd7PvCLTYXizJ0SOeda7qRNt9RBAuiAzrVNin0ef7yyyh05btZyn3LsT1l5rcY3tp")'}}
            ></div>
            <div className="flex flex-col gap-2 flex-grow min-w-0">
              <p className="text-primary text-xs sm:text-sm font-bold uppercase tracking-wider">Serviços</p>
              <p className="text-foreground text-lg sm:text-xl font-bold leading-tight break-words">Montagem Especializada</p>
              <p className="text-muted-foreground text-sm sm:text-base font-normal leading-relaxed flex-grow break-words">Serviços de montagem e consultoria para otimizar seu processo produtivo.</p>
            </div>
            <div className="mt-6 flex justify-end">
              <button className="flex w-full sm:w-auto min-w-[120px] cursor-pointer items-center justify-center rounded-lg min-h-[44px] h-auto py-2 px-6 bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/90 transition-colors shadow-md">
                <span className="text-center whitespace-normal">Nossos Serviços</span>
              </button>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="my-10 sm:my-16 p-6 sm:p-8 md:p-12 rounded-xl bg-card border border-border text-center flex flex-col items-center gap-4 shadow-xl">
          <h3 className="text-foreground text-xl sm:text-2xl md:text-3xl font-bold break-words">Pronto para otimizar sua produção?</h3>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl break-words">Entre em contato para um orçamento personalizado ou para saber mais sobre nossas especificações técnicas. Nossa equipe está pronta para ajudar.</p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <button className="mt-4 flex w-full sm:w-auto min-w-[84px] cursor-pointer items-center justify-center rounded-lg min-h-[48px] h-auto py-3 px-8 bg-primary text-primary-foreground text-base sm:text-lg font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors shadow-lg">
              <span className="text-center whitespace-normal">Solicitar Orçamento Agora</span>
            </button>
          </a>
        </div>

      </div>
    </main>
  );
};

export default Products;
