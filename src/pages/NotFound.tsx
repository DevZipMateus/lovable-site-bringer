import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="flex min-h-[60vh] items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <h1 className="mb-4 text-6xl font-black text-foreground">404</h1>
        <p className="mb-8 text-xl text-muted-foreground">Oops! Página não encontrada</p>
        <Link to="/">
          <button className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg min-h-[48px] h-auto py-3 px-6 bg-primary text-primary-foreground text-base font-bold leading-normal hover:bg-primary/90 transition-colors shadow-lg mx-auto">
            Voltar para o Início
          </button>
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
