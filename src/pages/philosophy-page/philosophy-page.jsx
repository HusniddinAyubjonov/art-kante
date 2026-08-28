import { Container } from "../../shared/ui/container/container";
import { SectionTitle } from "../../shared/ui/section-title/section-title";
import { ShowroomBanner } from "../../widgets/showroom-banner/showroom-banner";
import styles from "./philosophy-page.module.css";

const TIMELINE = [
  {
    year: "2021",
    events: [
      'Участие в конференции "Печное искусство"',
      "Обучение сотрудников новым техникам",
      'Номинация на премию "Оскар печей"',
    ],
  },
  {
    year: "2020",
    events: [
      "Открытие второго шоурума",
      'Разработка коллекции изразцов "Арт-деко"',
      "Участие в выставке Arch Moscow",
    ],
  },
  {
    year: "2019",
    events: [
      "Запуск BIM-проектирования",
      "Сотрудничество с дизайн-студией",
      "Победа в конкурсе инноваций",
    ],
  },
  {
    year: "2018",
    events: [
      "Расширение производства",
      "Внедрение эко-материалов",
      "Обучение мастеров",
    ],
  },
  {
    year: "2017",
    events: [
      "Основание бюро Art Kante",
      "Первый авторский камин",
      'Участие в выставке "Мир каминов"',
    ],
  },
];

export const PhilosophyPage = () => {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <Container>
          <SectionTitle title="Философия" />
          <div className={styles.heroGrid}>
            <div className={styles.heroBox}>
              <img src="./public/artKante.png" alt="artKante" />
            </div>
            <div className={styles.heroText}>
              <p>
                Проект Art Kante — это смелый, порой эпатажный взгляд на
                парадигму печного строительства. В основе нашей деятельности
                лежит постулат: домашний очаг — это в первую очередь место для
                общения, где можно собраться с близкими и насладиться теплом.
              </p>
              <p>
                Мы стремимся создать атмосферу тепла и уюта, используя
                безопасные и экологичные материалы на любом этапе жизни проекта.
              </p>
              <p>
                Наша цель — переломить привычное представление о печах,
                выложенных из камня или кирпича, и создать тренд на эстетичный и
                устойчивый дизайн. Мы проектируем неповторимые художественные
                объекты, которые можно рассматривать бесконечно.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.timelineSection}>
        <Container>
          <SectionTitle title="История развития" />
          <div className={styles.timelineGrid}>
            {TIMELINE.map((item) => (
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

      <ShowroomBanner />
    </main>
  );
};
