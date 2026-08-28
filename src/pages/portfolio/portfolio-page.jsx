import { Navbar } from "@/widgets/navbar";
import { Footer } from "@/widgets/footer";
import { Portfolio } from "@/entities/portfolio";

export const PortfolioPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Portfolio />
      </main>
      <Footer />
    </>
  );
};
