import { ShowroomBanner } from "../../widgets/showroom-banner";
import { Container } from "../../shared/ui/container";
import { SectionTitle } from "../../shared/ui/section-title";
import styles from "./design-page.module.css";

const STEPS = [
  "ОЗНАКОМЛЕНИЕ С ТЕХНИЧЕСКОЙ ДОКУМЕНТАЦИЕЙ",
  "ОБСУЖДЕНИЕ ЗАДАЧ И ЦЕЛЕЙ ПРОЕКТА",
  "BIM-ПРОЕКТИРОВАНИЕ",
  "СОГЛАСОВАНИЕ / ЗАВЕРШЕНИЕ",
];

export const DesignPage = () => {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <Container>
          <SectionTitle title="Проектирование" />
          <div className={styles.heroGrid}>
            <div className={styles.text}>
              <p>
                Делаем документацию работ по 3D-проектам в программах Archicad,
                3ds Max, Revit, Palette CAD, 3D Studio.
              </p>
              <p>
                Точное вычерчивание закладных и узлов сопряжения с прочими
                элементами в BIM.
              </p>
            </div>

            <div className={styles.steps}>
              {STEPS.map((step, idx) => (
                <div key={idx} className={styles.stepItem}>
                  <span className={styles.stepNum}>{idx + 1}</span>
                  <span className={styles.stepText}>{step}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.portfolioSection}>
        <Container>
          <SectionTitle title="Примеры наших проектов" />
          <div className={styles.portfolioGrid}>
            <img
              className={styles.card}
              src="https://via.placeholder.com/300x380/222/fff?text=Project+1"
              alt="Проект 1"
            />
            <img
              className={styles.card}
              src="https://via.placeholder.com/300x380/222/fff?text=Project+2"
              alt="Проект 2"
            />
            <img
              className={styles.card}
              src="https://via.placeholder.com/300x380/222/fff?text=Project+3"
              alt="Проект 3"
            />
          </div>
        </Container>
      </section>

      <ShowroomBanner />
    </main>
  );
};
