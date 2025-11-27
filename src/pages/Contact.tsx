import { MapPin, Phone, Mail, Send } from 'lucide-react';
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
    <main className="flex flex-1 mx-auto w-full min-w-0 py-16 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto flex-1 w-full">
        
        {/* Page Header */}
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-sm font-medium text-primary">Estamos Aqui</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">
            <span className="text-foreground">Entre em </span>
            <span className="text-gradient">Contato</span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para ajudar. Preencha o formulário ou utilize nossos canais diretos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-black mb-8 text-foreground">Nossa Localização</h2>
              
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

          {/* Contact Form */}
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
    </main>
  );
};

export default Contact;
