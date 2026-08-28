import { Container } from "../../shared/ui/container/container";
import { SectionTitle } from "../../shared/ui/section-title/section-title";
import { Button } from "../../shared/ui/button/button";
import { ShowroomBanner } from "../../widgets/showroom-banner/showroom-banner";
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
              src="./public/makhaon.png"
              alt="Камин Махаон"
            />

            <div className={styles.thumbs}>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={styles.thumb}>
                  <img key={i} src={`./public/makh${i}.png`} alt="" />
                </div>
              ))}
            </div>

            <div className={styles.details}>
              <h1 className={styles.fireplaceTitle}>Камин «Махаон»</h1>
              <div className={styles.specs}>
                <p>
                  <strong>Облицовка:</strong> изразцы глазурованные, белые, с
                  росписью
                </p>
                <p>
                  <strong>Размеры:</strong>
                  <br />
                  — высота 2400 мм
                  <br />
                  — ширина 800 мм
                  <br />— глубина 600 мм
                </p>
                <p>
                  <strong>Помещение:</strong> 40–60 м²
                </p>
                <p>
                  Идеально для второго света.
                  <br />
                  Возможны любые цветовые решения.
                </p>
                <p>
                  <strong>Топливо:</strong> дрова, био, электро
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
                Цифровые технологии, искусственный интеллект и экскурсии на Луну
                не отменяют радость встречи с загородным домом, изразцовой печью
                и настоящим гостеприимством. Матовая поверхность изразцов,
                необычная техника работы с цветом и шамотом конструкции печи —
                дизайн и технология в одном флаконе.
              </p>
              <p>
                Внутренняя конструкция миниатюрной печи из эко-шамота дает
                приятное и полезное лучистое тепло, а изразцовая облицовка
                дополнительно удерживает его длительное время. Изразцы
                исключительно геометрически декорированы матовыми глазурями в
                специальной технике, имитирующей эффект «потертости».
              </p>
              <p>
                Отопительная печь MAXAON с КПД 82% эффективно обогреет помещение
                до 40 м². Мощность этой печи 2,4 кВт. В помещениях более 40 м²
                более рационально будет использоваться печь «Свежее утро»
                мощностью 4,0 кВт.
              </p>
              <p>
                Все комплектующие печи (шамотное ядро, дверца, дымоход,
                изразцовый огнетушитель) изготовлены из натуральных материалов и
                долговечны, срок службы печи свыше 30 лет.
              </p>
              <p>Концепт Maxaon был реализован в 2020 году.</p>
            </div>
            <img
              className={styles.descImage}
              src="./public/inter.png"
              alt="Интерьер"
            />
          </div>
        </Container>
      </section>

      <ShowroomBanner />
    </main>
  );
};
