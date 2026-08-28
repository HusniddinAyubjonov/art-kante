import { Navbar } from "@/widgets/navbar";
import { Footer } from "@/widgets/footer";
import { Favorites } from "@/entities/favorites";

export const FavoritesPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Favorites />
      </main>
      <Footer />
    </>
  );
};
