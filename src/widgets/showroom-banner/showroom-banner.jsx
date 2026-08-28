import { Container } from "../../shared/ui/container";
import { Button } from "../../shared/ui/button";
import styles from "./showroom-banner.module.css";

export const ShowroomBanner = () => {
  return (
    <Container>
      <div className={styles.card}>
        <div className={styles.subTitle}>
          Приглашаем в комфортные удобные для встреч и презентаций шоурумы
        </div>
        <h3 className={styles.title}>
          ЦЕНТР ДИЗАЙНА ARTPLAY
          <br />
          строение 12
        </h3>

        <div className={styles.grid}>
          <div>
            <div className={styles.imageBox}>
              <img
                src="https://via.placeholder.com/400x250/333/fff?text=Showroom+106"
                alt="Шоурум 106"
              />
            </div>
            <div className={styles.caption}>Шоурум 106</div>
          </div>

          <div className={styles.info}>
            <label>Часы работы:</label>
            <p>
              Пн-Пт: 10.00 – 20.00
              <br />
              Сб-Вс: 11.00 – 19.00
              <br />
              Без перерыва и выходных
            </p>

            <label style={{ marginTop: "20px" }}>Адрес:</label>
            <p>105120, г. Москва, ул. Нижняя Сыромятническая, д. 10, стр. 12</p>
          </div>

          <div>
            <div className={styles.imageBox}>
              <img
                src="https://via.placeholder.com/400x250/333/fff?text=Showroom+112"
                alt="Шоурум 112"
              />
            </div>
            <div className={styles.caption}>Шоурум 112</div>
          </div>
        </div>
      </div>

      <div className={styles.ctaBtnWrapper}>
        <Button variant="cta">ЗАКАЗАТЬ ОБРАТНЫЙ ЗВОНОК</Button>
      </div>
    </Container>
  );
};
