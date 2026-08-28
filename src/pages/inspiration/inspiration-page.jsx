import { Navbar } from "@/widgets/navbar";
import { Footer } from "@/widgets/footer";
import { Inspiration } from "@/entities/inspiration";

export const InspirationPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Inspiration />
      </main>
      <Footer />
    </>
  );
};
