import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faShareNodes,
  faArrowLeftLong,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "@/shared/lib";
import { portfolioProjects } from "./portfolio-data.js";
import styles from "./portfolio.module.css";
import "swiper/css";

const PortfolioCard = ({ project }) => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const [activeIndex, setActiveIndex] = useState(0);
  const otherPhotos = project.photos.filter(
    (_, index) => index !== activeIndex,
  );
  const swiperRef = useRef(null);

  return (
    <article className={styles.card}>
      <h3 className={styles.cardTitle}>{project.title}</h3>

      {isMobile ? (
        <div className={styles.mobileGallery}>
          <Swiper
            className={styles.swiper}
            spaceBetween={0}
            slidesPerView={1}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          >
            {project.photos.map((photo, index) => (
              <SwiperSlide key={photo + index}>
                <div className={styles.mobilePhotoFrame}>
                  <img
                    src={photo}
                    alt={project.title}
                    className={styles.mobilePhoto}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className={styles.arrows}>
            <button
              type="button"
              className={styles.arrowBtn}
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Предыдущее фото"
            >
              <FontAwesomeIcon icon={faArrowLeftLong} />
            </button>
            <button
              type="button"
              className={styles.arrowBtn}
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Следующее фото"
            >
              <FontAwesomeIcon icon={faArrowRightLong} />
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.gallery}>
          <div className={styles.mainPhotoFrame}>
            <img
              src={project.photos[activeIndex]}
              alt={project.title}
              className={styles.mainPhoto}
            />
          </div>
          <div className={styles.thumbRail}>
            {otherPhotos.map((photo) => {
              const photoIndex = project.photos.indexOf(photo);
              return (
                <button
                  type="button"
                  key={photo}
                  className={styles.thumbBtn}
                  onClick={() => setActiveIndex(photoIndex)}
                >
                  <img src={photo} alt="" className={styles.thumbPhoto} />
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className={styles.actions}>
        <button type="button" className={styles.actionBtn}>
          <FontAwesomeIcon icon={faHeart} />
          Добавить в избранное
        </button>
        <button type="button" className={styles.actionBtn}>
          <FontAwesomeIcon icon={faShareNodes} />
          Поделится
        </button>
      </div>

      <p className={styles.description}>{project.description}</p>
    </article>
  );
};

export const Portfolio = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Портфолио</h2>

        <div className={styles.grid}>
          {portfolioProjects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
