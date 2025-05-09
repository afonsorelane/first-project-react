import { Header } from "./components/header.tsx";
import { Footer } from "./components/footer.tsx";
import { Main } from "./components/main.tsx";
export const App = () => {
  return (
    <>
      <div>
        <Header />
        <Main />
        <Footer name="Afonso Relane" date={new Date()} />
      </div>
    </>
  );
};
