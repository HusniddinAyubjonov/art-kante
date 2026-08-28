import { ShowroomBanner } from "../../widgets/showroom-banner";
import { Container } from "../../shared/ui/container";
import { SectionTitle } from "../../shared/ui/section-title";
import { Button } from "../../shared/ui/button";
import styles from "./concept-page.module.css";

export const ConceptPage = () => {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <Container>
          <SectionTitle title="Концепт" />
          <div className={styles.heroGrid}>
            <img
              className={styles.mainImage}
              src="https://via.placeholder.com/480x520/222/fff?text=Fireplace+Mahaon"
              alt="Камин Махаон"
            />

            <div className={styles.thumbs}>
              <div className={styles.thumb}></div>
              <div className={styles.thumb}></div>
              <div className={styles.thumb}></div>
              <div className={styles.thumb}></div>
            </div>

            <div className={styles.details}>
              <h1 className={styles.fireplaceTitle}>Камин «Махаон»</h1>
              <div className={styles.specs}>
                <p>Облицовка: изразцы глазурованные, белые, с росписью</p>
                <p>
                  Размеры:
                  <br />- высота 2700мм
                  <br />- ширина 900мм
                  <br />- глубина 600мм
                </p>
                <p>Помещение: 40-80м²</p>
                <p>
                  Идеально для второго света.
                  <br />
                  Возможны любые цветовые решения.
                </p>
              </div>
              <div className={styles.actions}>
                <span>📷 Чертежи</span>
                <span>♡ В избранное</span>
                <span>⤢ Поделиться</span>
              </div>
              <Button variant="text">ЗАПРОСИТЬ РАСЧЕТ ПРОЕКТА</Button>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.descSection}>
        <Container>
          <SectionTitle caption="ОПИСАНИЕ КОНЦЕПТА" title="" />
          <div className={styles.descGrid}>
            <div className={styles.descText}>
              <p>
                Классическая форма камина совмещает лаконичность и аккуратность.
                Он отлично впишется в интерьер с элементами барокко, классики
                или модерна. Изразцы теплого оттенка создают эффект мягкого
                отблеска огня.
              </p>
              <p>
                Внутренний контур выполнен из шамотного кирпича, защищающего
                стены от нагрева.
              </p>
            </div>
            <img
              className={styles.descImage}
              src="https://via.placeholder.com/500x360/333/fff?text=Interior+View"
              alt="Интерьер"
            />
          </div>
        </Container>
      </section>

      <ShowroomBanner />
    </main>
  );
};
