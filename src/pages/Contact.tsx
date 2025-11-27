import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem Enviada!",
      description: "Obrigado pela sua mensagem! Entraremos em contato em breve.",
    });
  };

  return (
    <main className="flex flex-1 mx-auto w-full min-w-0 py-5 px-4 sm:px-10">
      <div className="layout-content-container flex w-full max-w-7xl flex-1 flex-col">
        <section className="flex-1 py-10 md:py-16">
          <div className="flex flex-wrap justify-between gap-4 pb-8">
            <div className="flex min-w-72 flex-col gap-3">
              <p className="text-foreground text-3xl sm:text-4xl font-black leading-tight tracking-[-0.033em] break-words">Entre em Contato</p>
              <p className="text-muted-foreground text-base font-normal leading-normal max-w-2xl break-words">Estamos aqui para ajudar. Preencha o formulário ou utilize nossos canais diretos.</p>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            
            {/* Contact Info Section */}
            <div className="flex flex-col gap-8">
              <h2 className="text-foreground text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5 border-b border-border break-words">Nossa Localização e Contatos</h2>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-card/50 transition-colors">
                  <div className="text-primary flex items-center justify-center rounded-lg bg-primary/20 shrink-0 size-12">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-foreground text-base font-medium leading-normal">Endereço</p>
                    <p className="text-muted-foreground text-sm font-normal leading-normal mt-1 break-words">Rua Haddock Lobo, 200 - Sala 301, Tijuca, Rio de Janeiro - RJ, CEP 20.260-132</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-card/50 transition-colors">
                  <div className="text-primary flex items-center justify-center rounded-lg bg-primary/20 shrink-0 size-12">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-foreground text-base font-medium leading-normal">Telefone</p>
                    <p className="text-muted-foreground text-sm font-normal leading-normal mt-1 break-words">(21) 2568-3966</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-card/50 transition-colors">
                  <div className="text-primary flex items-center justify-center rounded-lg bg-primary/20 shrink-0 size-12">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-foreground text-base font-medium leading-normal">E-mail</p>
                    <p className="text-muted-foreground text-sm font-normal leading-normal mt-1 break-all">vendas@mbittencourt.com.br</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="flex flex-col gap-6 rounded-xl border border-border bg-card/50 p-6 md:p-8 shadow-xl">
              <h3 className="text-foreground text-xl font-bold leading-tight break-words">Envie uma Mensagem</h3>
              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-1.5">
                  <label className="text-foreground text-sm font-medium leading-normal" htmlFor="name">Nome</label>
                  <input 
                    aria-label="Seu nome completo" 
                    className="h-12 rounded-lg border border-input bg-background px-4 text-foreground text-base focus:border-primary focus:ring-primary outline-none transition-colors" 
                    id="name" 
                    name="name" 
                    placeholder="Seu nome completo" 
                    type="text"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-foreground text-sm font-medium leading-normal" htmlFor="email">E-mail</label>
                  <input 
                    aria-label="Seu melhor e-mail" 
                    className="h-12 rounded-lg border border-input bg-background px-4 text-foreground text-base focus:border-primary focus:ring-primary outline-none transition-colors" 
                    id="email" 
                    name="email" 
                    placeholder="seu.email@exemplo.com" 
                    type="email"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-foreground text-sm font-medium leading-normal" htmlFor="subject">Assunto</label>
                  <input 
                    aria-label="Assunto da sua mensagem" 
                    className="h-12 rounded-lg border border-input bg-background px-4 text-foreground text-base focus:border-primary focus:ring-primary outline-none transition-colors" 
                    id="subject" 
                    name="subject" 
                    placeholder="Sobre o que gostaria de falar?" 
                    type="text"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-foreground text-sm font-medium leading-normal" htmlFor="message">Mensagem</label>
                  <textarea 
                    aria-label="Escreva sua mensagem aqui" 
                    className="rounded-lg border border-input bg-background px-4 py-3 text-foreground text-base focus:border-primary focus:ring-primary outline-none transition-colors" 
                    id="message" 
                    name="message" 
                    placeholder="Escreva sua mensagem aqui..." 
                    rows={4}
                    required
                  ></textarea>
                </div>
                <button 
                  className="flex w-full cursor-pointer items-center justify-center rounded-lg min-h-[48px] h-auto py-3 px-4 bg-primary text-primary-foreground text-base font-bold leading-normal tracking-[-0.015em] hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background transition-colors shadow-lg" 
                  type="submit"
                >
                  <span className="text-center whitespace-normal">Enviar Mensagem</span>
                </button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16 md:mt-24">
            <div className="relative w-full overflow-hidden rounded-xl border border-border aspect-[4/3] sm:aspect-video md:aspect-[21/9]">
              <img 
                alt="Mapa mostrando a localização da MBITTENCOURT na Rua Haddock Lobo, Tijuca, Rio de Janeiro." 
                className="absolute inset-0 size-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxTbnOzIbep8IXvm3wrVjHdhUlHLcC14NoSKqSyATqE31c0ZuUdi86Wy_EvLCBgMMcXM-Tm13pOMjr74MIHwHqjdIKdLwb9vfeBwnFD30e8ObDZcbBaHwYHx9q8RPCrVHeaAaZ1tZGnyXpyMQWgmx2i9wf4pQPzRsFmv0rXI7kAhM5gSee41cGg_-lhiwAHU50UdOCzizDuDAMyo_8bzC6MWlFbuijDR_bf67nvAmICXKKlxtHrm1ZEvxjS9v-bLArtxKaymMdTmfb"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Contact;
