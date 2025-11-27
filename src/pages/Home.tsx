import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="flex flex-1 mx-auto w-full min-w-0 py-5 px-4 sm:px-10">
      <div className="layout-content-container flex flex-col w-full max-w-7xl flex-1">
        <section className="flex flex-col gap-12 md:gap-16 lg:gap-20 py-8 md:py-16">
          
          {/* HeroSection */}
          <div className="@container">
            <div className="@[480px]:px-0">
              <div 
                className="flex min-h-[350px] sm:min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-end px-6 pb-10 sm:px-10 shadow-2xl" 
                style={{backgroundImage: 'linear-gradient(rgba(16, 22, 34, 0.2) 0%, rgb(16, 22, 34) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBw13y4UZxxeGxy5v61_wAH5FsUbgpYq8uRJL0H-3NsbxhWazoO0wUPOjsADxZyFcZhvlIDzz4D_5pVzuvt_0DAYQXW3kzbp3CuhkeTvoZYgYyi9ZSOiTN7PvO5qNwdYBzV-B5nCgw7TGmnvvXLAaH8RRdTQCJt1jDh1HftnwPCtQaH3emsdwFROwPsvTauHWiUr78UoySx7GCAYP2mHZlCFF3cKTc9ngM4TqXtA5mO8OLpTwySFxTAUd7YD3YzveGtZwQUqPbBD28w")'}}
              >
                <div className="flex flex-col gap-4 text-left max-w-3xl">
                  <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] break-words">
                    Sua fonte segura e confiável de suprimentos de informática
                  </h1>
                  <h2 className="text-gray-300 text-base sm:text-lg font-normal leading-normal break-words">
                    Compre com facilidade e a segurança que você merece
                  </h2>
                </div>
                <Link to="/produtos">
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center rounded-lg min-h-[48px] h-auto py-3 px-6 bg-primary text-primary-foreground text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors shadow-lg">
                    <span className="text-center whitespace-normal">Ver Produtos</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center gap-4 p-6 bg-card/50 rounded-xl border border-border hover:bg-card transition-colors">
              <div className="flex items-center justify-center size-12 bg-primary/20 rounded-full text-primary">
                <span className="material-symbols-outlined">shield</span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-foreground font-bold text-lg">Compra 100% Segura</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Seus dados protegidos do início ao fim da sua compra.</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-4 p-6 bg-card/50 rounded-xl border border-border hover:bg-card transition-colors">
              <div className="flex items-center justify-center size-12 bg-primary/20 rounded-full text-primary">
                <span className="material-symbols-outlined">inventory_2</span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-foreground font-bold text-lg">Catálogo Completo</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">As melhores marcas e a maior variedade de produtos para você.</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-4 p-6 bg-card/50 rounded-xl border border-border sm:col-span-2 lg:col-span-1 hover:bg-card transition-colors">
              <div className="flex items-center justify-center size-12 bg-primary/20 rounded-full text-primary">
                <span className="material-symbols-outlined">local_shipping</span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-foreground font-bold text-lg">Entrega para todo o Brasil</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Receba seus produtos com agilidade e segurança onde estiver.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
