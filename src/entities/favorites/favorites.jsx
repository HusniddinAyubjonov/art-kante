import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { favoriteCollections } from "./favorites-data.js";
import styles from "./favorites.module.css";

export const Favorites = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>Моя подборка</h1>

        {favoriteCollections.map((collection) => (
          <div key={collection.id} className={styles.collection}>
            <div className={styles.collectionHeader}>
              <h2 className={styles.collectionTitle}>{collection.title}</h2>
              <button type="button" className={styles.shareLink}>
                <FontAwesomeIcon icon={faShareNodes} />
                Поделится этой подборкой
              </button>
            </div>

            <div className={styles.grid}>
              {collection.items.map((item, index) => (
                <div key={index} className={styles.card}>
                  <img src={item.image} alt="" className={styles.cardImage} />
                  <span className={styles.badge}>{item.badge}</span>
                  <div className={styles.cardIcons}>
                    <button
                      type="button"
                      className={styles.iconBtn}
                      aria-label="Убрать из избранного"
                    >
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                    <button
                      type="button"
                      className={styles.iconBtn}
                      aria-label="Поделиться"
                    >
                      <FontAwesomeIcon icon={faShareNodes} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
