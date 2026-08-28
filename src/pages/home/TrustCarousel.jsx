import { useState } from "react";
import "./TrustCarousel.css";

const people = [
  {
    name: "Дуэйн Джонсон",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Dwayne_The_Rock_Johnson_2009_portrait.jpg",
  },
  {
    name: "Ислам Махачев",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Islam_Makhachev_2022-10-26.jpg",
  },
  {
    name: "Марк Цукерберг",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mark-Zuckerberg-2019.jpg",
  },
  {
    name: "Человек-паук",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Spider-Man.jpg",
  },
  {
    name: "MrBeast",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/MrBeast.png",
  },
  {
    name: "IShowSpeed",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/IShowSpeed_at_Chinatown_(Portrait)_02.jpg",
  },
  {
    name: "Криштиану Роналду",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Cristiano_Ronaldo.jpg",
  },
];

const TrustCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  const visiblePeople = people.slice(startIndex, startIndex + 3);

  const previousSlide = () => {
    if (startIndex === 0) return;

    setDirection("prev");
    setStartIndex((current) => current - 1);
  };

  const nextSlide = () => {
    if (startIndex === people.length - 3) return;

    setDirection("next");
    setStartIndex((current) => current + 1);
  };

  return (
    <section className="trust-section">
      <p className="trust-section__label">ВДОХНОВЕНИЕ</p>

      <h2 className="trust-section__title">
        ЛЮДИ, КОТОРЫЕ
        <br />
        ВДОХНОВЛЯЮТ
      </h2>

      <div className="trust-section__controls">
        <button
          type="button"
          onClick={previousSlide}
          disabled={startIndex === 0}
          aria-label="Предыдущие"
        >
          ←
        </button>

        <span>
          {startIndex + 1} / {people.length - 2}
        </span>

        <button
          type="button"
          onClick={nextSlide}
          disabled={startIndex === people.length - 3}
          aria-label="Следующие"
        >
          →
        </button>
      </div>

      <div className="trust-section__cards">
        {visiblePeople.map((person) => (
          <article
            className={`trust-card ${
              direction === "next"
                ? "trust-card--next"
                : "trust-card--prev"
            }`}
            key={person.name}
          >
            <div className="trust-card__image">
              <img src={person.image} alt={person.name} />
            </div>

            <h3>{person.name}</h3>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TrustCarousel;