import { useState } from "react";
import { Container } from "../../shared/ui/container/container";
import { Button } from "../../shared/ui/button/button";
import { Modal } from "../modal/modal";
import styles from "./showroom-banner.module.css";
import { CallbackForm } from "../callback-form/callback-form.jsx";

export const ShowroomBanner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Container>
        <div className={styles.card}>
          {/* ... остальной контент без изменений ... */}
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
