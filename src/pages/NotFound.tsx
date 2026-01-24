import { Link } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center bg-zinc-100 dark:bg-zinc-950 px-6">
        <div className="max-w-md text-center flex flex-col items-center gap-6">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-black dark:text-white">
            Página não encontrada
          </h1>

          <p className="text-zinc-700 dark:text-zinc-400">
            A página que você tentou acessar não existe ou foi movida.
          </p>

          <div className="flex gap-4 mt-4">
            <Link
              to="/"
              className="
              rounded-md 
              bg-black
              dark:bg-white 
              px-5 py-2 
              text-sm font-medium 
              text-zinc-200
              dark:text-zinc-900
              hover:bg-zinc-900
              dark:hover:bg-zinc-200
              transition
            "
            >
              Voltar para o início
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
