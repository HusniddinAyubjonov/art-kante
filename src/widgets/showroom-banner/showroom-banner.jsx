import { useState } from "react";
import { Container } from "../../shared/ui/container";
import { Button } from "../../shared/ui/button";
import { Modal } from "../modal/modal";
import { CallbackForm } from "../callback-form/callback-form.jsx";
import styles from "./showroom-banner.module.css";

export const ShowroomBanner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
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
                <img src="/show1.png" alt="Шоурум 106" />
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
                <img src="/show2.png" alt="Шоурум 112" />
              </div>
              <div className={styles.caption}>Шоурум 112</div>
            </div>
          </div>
        </div>

        <div className={styles.ctaBtnWrapper}>
          <Button variant="cta" onClick={() => setIsModalOpen(true)}>
            ЗАКАЗАТЬ ОБРАТНЫЙ ЗВОНОК
          </Button>
        </div>
      </Container>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Заказать обратный звонок"
      >
        <CallbackForm onClose={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
};
