import { Link } from "react-router";

export function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-zinc-950 px-6">
      <div className="max-w-md text-center flex flex-col items-center gap-6">
        <h1 className="text-6xl font-bold text-white">Página não encontrada</h1>

        <p className="text-zinc-400">
          A página que você tentou acessar não existe ou foi movida.
        </p>

        <div className="flex gap-4 mt-4">
          <Link
            to="/"
            className="
              rounded-md 
              bg-white 
              px-5 py-2 
              text-sm font-medium 
              text-zinc-900
              hover:bg-zinc-200
              transition
            "
          >
            Voltar para o início
          </Link>
        </div>
      </div>
    </main>
  );
}
