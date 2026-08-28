import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { inspirationItems } from "./inspiration-data.js";
import styles from "./inspiration.module.css";

export const Inspiration = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>Вдохновение</h1>

        <div className={styles.grid}>
          {inspirationItems.map((item) => (
            <div key={item.id} className={styles.card}>
              <img src={item.image} alt="" className={styles.cardImage} />
              <button
                type="button"
                className={styles.iconBtn}
                aria-label="Добавить в избранное"
              >
                <FontAwesomeIcon icon={faHeart} />
              </button>
            </div>
          ))}
        </div>

        <button type="button" className={styles.moreBtn}>
          Показать ещё
        </button>
      </div>
    </section>
  );
};
