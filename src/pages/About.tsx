const About = () => {
  const whatsappLink = "https://wa.me/552125683966?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20da%20MBITTENCOURT.";

  return (
    <main className="flex flex-1 mx-auto w-full min-w-0 px-4 sm:px-10 py-5">
      <div className="layout-content-container flex w-full max-w-7xl flex-1 flex-col">
        <section className="flex flex-col gap-10 md:gap-16">
          
          {/* HeroSection */}
          <div className="@container mt-5">
            <div className="@[480px]:px-0">
              <div 
                className="flex min-h-[350px] sm:min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-end px-6 pb-10 sm:px-10 shadow-2xl" 
                style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(16, 22, 34, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDuzw9ZRAXfgKdZj_iuFgc1ka7nCbXgxWAONT8PyjR6PTioFLQr7RkAsKlJpww3Q8GUATLqtUPSptVUvhT099xNQEhTOcz-nEI9XflYRrbaboJnvuSDnN-N05bl4XUQ_N6BZlU9rcENsassmVMBPdjQkymgxiQL8uVupWIkmkcgMkJfN7JmymkhRwGE-wE4LFCaOxfTAFUeL-3F-2BGPGfjDGFl5-QyGgEU9iKIkPZ4LMELvpCodyFIO-7oftjyc4rkNS-FgNKbtjn2")'}}
              >
                <div className="flex flex-col gap-2 text-left max-w-3xl">
                  <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] break-words">
                    Sobre Nós: Mais de Duas Décadas de Confiança e Inovação
                  </h1>
                  <h2 className="text-white/90 text-sm sm:text-base font-normal leading-normal mt-2 break-words">
                    Conheça a história da MBITTENCOURT, fundada em 1996 a partir da Activel Comp. E Apar. Ltda, e nosso compromisso contínuo com a qualidade, confiabilidade e o melhor custo-benefício para nossos clientes.
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* SectionHeader + Timeline */}
          <div>
            <h2 className="text-foreground text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">Nossa Trajetória</h2>
            <div className="grid grid-cols-[40px_1fr] gap-x-4 px-0 sm:px-4">
              
              {/* Timeline Item 1 */}
              <div className="flex flex-col items-center gap-1 pt-3">
                <div className="text-primary flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 shrink-0">
                  <span className="material-symbols-outlined">flag</span>
                </div>
                <div className="w-[1.5px] bg-border h-2 grow"></div>
              </div>
              <div className="flex flex-1 flex-col py-3">
                <p className="text-foreground text-base font-medium leading-normal">Nascimento da MBITTENCOURT</p>
                <p className="text-muted-foreground text-base font-normal leading-normal">1996</p>
              </div>

              {/* Timeline Item 2 */}
              <div className="flex flex-col items-center gap-1">
                <div className="w-[1.5px] bg-border h-2"></div>
                <div className="text-primary flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 shrink-0">
                  <span className="material-symbols-outlined">trending_up</span>
                </div>
                <div className="w-[1.5px] bg-border h-2 grow"></div>
              </div>
              <div className="flex flex-1 flex-col py-3">
                <p className="text-foreground text-base font-medium leading-normal">Crescimento e Expansão</p>
                <p className="text-muted-foreground text-base font-normal leading-normal">2010</p>
              </div>

              {/* Timeline Item 3 */}
              <div className="flex flex-col items-center gap-1 pb-3">
                <div className="w-[1.5px] bg-border h-2"></div>
                <div className="text-primary flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 shrink-0">
                  <span className="material-symbols-outlined">workspace_premium</span>
                </div>
              </div>
              <div className="flex flex-1 flex-col py-3">
                <p className="text-foreground text-base font-medium leading-normal">Líderes de Mercado Hoje</p>
                <p className="text-muted-foreground text-base font-normal leading-normal">Atualmente</p>
              </div>

            </div>
          </div>

          {/* FeatureSection (Our Pillars) */}
          <div className="flex flex-col gap-10 py-10 @container">
            <div className="flex flex-col gap-4">
              <h1 className="text-foreground tracking-tight text-3xl sm:text-4xl font-black leading-tight max-w-[720px] break-words">
                Nossos Pilares
              </h1>
              <p className="text-muted-foreground text-base font-normal leading-normal max-w-[720px] break-words">
                Nossa missão é atender nossos clientes com a máxima eficiência, guiados por três princípios fundamentais que definem tudo o que fazemos.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-0">
              <div className="flex flex-1 gap-4 rounded-xl border border-border bg-card/50 p-6 flex-col hover:bg-card transition-colors">
                <div className="text-primary">
                  <span className="material-symbols-outlined" style={{fontSize: '32px'}}>verified_user</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-foreground text-lg font-bold leading-tight">Confiabilidade</h2>
                  <p className="text-muted-foreground text-sm font-normal leading-normal">Garantimos a segurança e a qualidade superior em todos os nossos produtos e serviços.</p>
                </div>
              </div>
              <div className="flex flex-1 gap-4 rounded-xl border border-border bg-card/50 p-6 flex-col hover:bg-card transition-colors">
                <div className="text-primary">
                  <span className="material-symbols-outlined" style={{fontSize: '32px'}}>schedule</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-foreground text-lg font-bold leading-tight">Assiduidade</h2>
                  <p className="text-muted-foreground text-sm font-normal leading-normal">Oferecemos suporte contínuo, pontualidade e presença constante para nossos clientes.</p>
                </div>
              </div>
              <div className="flex flex-1 gap-4 rounded-xl border border-border bg-card/50 p-6 flex-col hover:bg-card transition-colors">
                <div className="text-primary">
                  <span className="material-symbols-outlined" style={{fontSize: '32px'}}>sell</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-foreground text-lg font-bold leading-tight">Custo Reduzido</h2>
                  <p className="text-muted-foreground text-sm font-normal leading-normal">Nossa estratégia é focada em oferecer sempre o melhor custo-benefício do mercado.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quality Commitment & CTA */}
          <div className="flex flex-col md:flex-row items-center gap-8 rounded-xl bg-card/50 p-8 md:p-12 border border-border my-6">
            <div className="flex flex-col gap-4 flex-1">
              <h2 className="text-foreground text-2xl md:text-3xl font-bold tracking-tight">Nosso Compromisso com a Qualidade</h2>
              <p className="text-muted-foreground text-base font-normal leading-normal">
                A dedicação à excelência e à satisfação do cliente é o pilar central da nossa empresa. Reforçamos continuamente nosso compromisso em fornecer soluções que não apenas atendam, mas superem as expectativas, garantindo o melhor desempenho e valor.
              </p>
            </div>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
              <button className="flex w-full md:w-auto min-w-[84px] cursor-pointer items-center justify-center rounded-lg min-h-[56px] h-auto py-3 px-8 bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-bold leading-normal tracking-[0.015em] transition-colors shadow-lg">
                <span className="text-center whitespace-normal">Conheça Nossas Soluções</span>
              </button>
            </a>
          </div>

        </section>
      </div>
    </main>
  );
};

export default About;
