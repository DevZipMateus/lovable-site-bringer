import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-auto pt-10 pb-5 border-t border-solid border-border/50 bg-background text-foreground w-full">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <Link to="/" className="flex items-center justify-center md:justify-start gap-4 text-foreground hover:opacity-80 transition-opacity">
              <div className="size-5 text-primary">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor"></path>
                </svg>
              </div>
              <h2 className="text-foreground text-lg font-bold">MBITTENCOURT</h2>
            </Link>
            <p className="text-muted-foreground text-sm">Suprimentos de Informática LTDA</p>
          </div>
          <div className="flex gap-6">
            <a className="text-muted-foreground hover:text-primary transition-colors" href="#" aria-label="Facebook">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.999 11.999C22.999 6.476 18.522 2 12.999 2C7.476 2 3 6.476 3 11.999C3 16.992 6.624 21.118 11.249 21.84V14.249H8.249V11.249H11.249V8.955C11.249 5.979 13.064 4.354 15.751 4.354C16.994 4.354 18.249 4.557 18.249 4.557V7.249H16.84C15.399 7.249 14.749 8.169 14.749 9.249V11.249H18.249L17.499 14.249H14.749V21.84C19.374 21.118 22.999 16.992 22.999 11.999Z"></path>
              </svg>
            </a>
            <a className="text-muted-foreground hover:text-primary transition-colors" href="#" aria-label="Twitter">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.091 7.185C22.384 10.339 20.377 14.004 17.141 15.42C15.112 16.312 12.83 16.205 10.916 15.15C10.916 15.15 10.835 15.939 10.43 16.939C9.722 18.691 8.13 19.866 6.22 20.016C3.999 20.19 2 18.514 2 16.291C2 14.832 2.871 13.518 4.121 12.841C4.819 12.464 5.613 12.33 6.36 12.457C6.883 12.55 7.022 11.93 6.84 11.472C6.12 9.61 6.516 7.433 7.828 5.922C9.577 3.916 12.585 3.422 14.868 4.69C15.225 4.879 15.54 5.112 15.82 5.378C16.099 5.644 16.335 5.937 16.519 6.25C16.669 6.511 16.915 6.643 17.18 6.588C17.653 6.49 18.147 6.46 18.636 6.502C19.883 6.611 20.738 7.025 21.091 7.185Z"></path>
              </svg>
            </a>
            <a className="text-muted-foreground hover:text-primary transition-colors" href="#" aria-label="LinkedIn">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.999 2C6.476 2 2 6.476 2 11.999C2 17.522 6.476 22 11.999 22C17.522 22 22 17.522 22 11.999C22 6.476 17.522 2 11.999 2ZM8.749 17.249H6.249V9.749H8.749V17.249ZM7.499 8.749C6.67 8.749 6 8.079 6 7.25C6 6.421 6.67 5.75 7.499 5.75C8.328 5.75 8.999 6.421 8.999 7.25C8.999 8.079 8.328 8.749 7.499 8.749ZM17.249 17.249H14.749V13.624C14.749 12.724 14.724 11.574 13.499 11.574C12.274 11.574 12.024 12.524 12.024 13.549V17.249H9.499V9.749H11.924V10.899H11.974C12.324 10.249 13.199 9.499 14.299 9.499C16.799 9.499 17.249 11.124 17.249 13.124V17.249Z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-muted-foreground text-sm">
          <p>© 2024 MBITTENCOURT. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
