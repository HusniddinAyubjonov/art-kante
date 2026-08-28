import { Container } from "../../shared/ui/container/container";
import { SectionTitle } from "../../shared/ui/section-title/section-title";
import { ShowroomBanner } from "../../widgets/showroom-banner/showroom-banner";
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
                Делаем визуализации и рабочие чертежи в программах: ArchiCad,
                3Ds Max, Revit, Palette Cad, Inventor.
              </p>
              <p>
                Предоставляем 3D модель для интеграции в проект, работаем с BIM.
              </p>
              <p>
                При помощи современных технологий у бюро есть возможность зайти
                в проект и подобрать вариант очага под интерьер на любом этапе
                строительства.
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
            {[1, 2, 3].map((i) => (
              <img
                key={i}
                className={styles.card}
                src={`/project${i}.png`}
                alt={`Проект ${i}`}
              />
            ))}
          </div>
        </Container>
      </section>

      <ShowroomBanner />
    </main>
  );
};
