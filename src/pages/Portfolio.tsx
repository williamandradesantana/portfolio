import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";

export function Portfolio() {
  return (
    <div
      className="
        min-h-screen
        flex flex-col
        overflow-x-hidden
        bg-white dark:bg-black
        pt-16
        md:pt-20
      "
    >
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
