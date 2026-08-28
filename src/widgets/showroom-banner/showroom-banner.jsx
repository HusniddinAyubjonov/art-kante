import { Container } from "../../shared/ui/container/container";
import { Button } from "../../shared/ui/button/button";
import styles from "./showroom-banner.module.css";

export const ShowroomBanner = () => {
  return (
    <Container>
      <div className={styles.card}>
        <div className={styles.subTitle}>
          Приглашаем в комфортные, удобные для встреч и презентаций шоурумы
        </div>
        <h3 className={styles.title}>
          ЦЕНТР ДИЗАЙНА ARTPLAY
          <br />
          строение 12
        </h3>

        <div className={styles.grid}>
          <div>
            <div className={styles.imageBox}>
              <img src="./public/show1.png" alt="Шоурум 106" />
            </div>
            <div className={styles.caption}>Шоурум 106</div>
          </div>

          <div className={styles.info}>
            <label>Часы работы:</label>
            <p>
              Пн-Пт: 11:00 – 20:00
              <br />
              Сб: 12:00 – 20:00
              <br />
              Вс: по согласованию
            </p>

            <label style={{ marginTop: "20px" }}>Адрес:</label>
            <p>105120, г. Москва, ул. Сыромятническая, д.10, стр.12</p>
          </div>

          <div>
            <div className={styles.imageBox}>
              <img src="./public/show2.png" alt="Шоурум 112" />
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
