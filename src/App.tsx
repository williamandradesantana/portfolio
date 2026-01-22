import { Header } from "./components/Header";
import { Main } from "./components/Main";

export function App() {
  return (
    <div className="min-h-screen overflow-y-auto bg-neutral-400">
      <Header />
      <Main />
    </div>
  );
}
