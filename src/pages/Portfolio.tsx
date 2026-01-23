import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";

export function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col overflow-y-auto bg-white dark:bg-black">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
