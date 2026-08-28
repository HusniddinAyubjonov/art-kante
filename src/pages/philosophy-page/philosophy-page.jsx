import { Container } from "../../shared/ui/container";
import { SectionTitle } from "../../shared/ui/section-title";
import styles from "./philosophy-page.module.css";

const TIMELINE_DATA = [
  {
    year: "2021 г.",
    events: [
      "Выставка АрхиМосква",
      "Новая коллекция изразцов",
      "Проект в Барвихе",
    ],
  },
  {
    year: "2020 г.",
    events: ["Расширение производства", "Открытие второго шоурума"],
  },
  {
    year: "2019 г.",
    events: ["Участие в международном конкурсе", "Запуск серии облицовок"],
  },
];

export const PhilosophyPage = () => {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <Container>
          <SectionTitle title="Философия" />
          <div className={styles.heroGrid}>
            <div className={styles.heroBox}>ART KANTE</div>
            <div className={styles.heroText}>
              <p>
                Бюро каминов Art Kante — это команда профессионалов с 15-летним
                опытом работы в сфере проектирования и монтажа авторских
                каминов.
              </p>
              <p>
                Наша цель — превратить каждый камин в центральный элемент
                интерьера, сочетающий эстетику и надежность.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.timelineSection}>
        <Container>
          <div className={styles.timelineGrid}>
            {TIMELINE_DATA.map((item) => (
              <div key={item.year} className={styles.timelineItem}>
                <div className={styles.year}>{item.year}</div>
                <ul className={styles.eventsList}>
                  {item.events.map((ev, idx) => (
                    <li key={idx}>— {ev}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
};
