import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

export function App() {
  return (
    <div className="min-h-screen flex flex-col overflow-y-auto bg-black">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
