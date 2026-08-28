import TrustCarousel from "./trust-carousel.jsx";
import { useEffect, useRef, useState } from 'react';

import './home-page.css';
import './home-page-fire.css';
import './about-founder.css';
import './process-section.css';

const cards = [
  ['Загородный дом', 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85'],
  ['Городская квартира', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85'],
  ['Общественные пространства', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85'],
  ['Облицовка', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85'],
];

const aboutText = `Более 17 лет опыта в работе с клиентами, проектами и современными интерьерными решениями.

Шахзод помогает превращать идеи в продуманные проекты: внимательно относится к деталям, качеству работы и пожеланиям каждого клиента.`;

const ProcessSection = () => {
  const processRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (processRef.current) {
      observer.observe(processRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`process-section ${visible ? 'process-section--visible' : ''}`}
      ref={processRef}
    >
      <TrustCarousel />
      <div className="process-section__title">
        ВОПЛОЩЕНИЕ ЛЮБОЙ<br />
        ДИЗАЙНЕРСКОЙ ИДЕИ
      </div>

      <article className="process-card process-card--idea">
        <span className="process-card__logo">△</span>
        <h3>ОБЛЕКАЕМ ВАШУ ИДЕЮ В ВИЗУАЛЬНУЮ ФОРМУ</h3>
        <p>
          Помогаем сформулировать первичную идею очага
          и создаём технологичную 3D-визуализацию.
        </p>
      </article>

      <article className="process-card process-card--engineering">
        <span className="process-card__logo">△</span>
        <h3>РАЗРАБАТЫВАЕМ ОПТИМАЛЬНУЮ ИНЖЕНЕРИЮ ПРОЕКТА</h3>
        <p>
          Учитываем особенности объекта, продумываем систему
          очага и подбираем надёжные комплектующие.
        </p>
      </article>

      <article className="process-card process-card--project">
        <span className="process-card__logo">△</span>
        <h3>ПРЕДОСТАВЛЯЕМ РАЗРАБОТКИ ДЛЯ ИНТЕГРАЦИИ В ПРОЕКТ</h3>
        <p>
          Работаем в программах: ArchiCad, 3Ds Max,
          Revit, Palette Cad и Inventor.
        </p>
      </article>
    </section>
  );
};

export const HomePage = () => {
  const aboutRef = useRef(null);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAboutVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.35 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!aboutVisible) return;

    let letter = 0;

    const typing = setInterval(() => {
      letter += 1;
      setTypedText(aboutText.slice(0, letter));

      if (letter >= aboutText.length) {
        clearInterval(typing);
      }
    }, 18);

    return () => clearInterval(typing);
  }, [aboutVisible]);

  return (
    <main className="home">
      <section className="hero">
        <div className="hero-text" id="top">
          <p className="title">ПЕЧИ КАМИНЫ БАРБЕКЮ <span>ПОД КЛЮЧ</span></p>
          <h1>проектирование архитектура инженерия монтаж</h1>
          <p className="slogan">С НАМИ ЛЕГКО ВНЕДРЯЮТСЯ ПРОЕКТЫ</p>
          <div className="arrows"><button>←</button><button>→</button></div>
        </div>
        <div className="fire-glow" aria-hidden="true" />
      </section>
      <section className="cards-section" id="cards">
        <p>НАПРАВЛЕНИЯ</p>
        <h2>Пространства,<br />которые становятся вашими</h2>
        <div className="cards">
          {cards.map(([name, image], index) => (
            <a className={`card card-${index + 1}`} href="#" key={name}>
              <img src={image} alt="" />
              <span />
              <strong>{name}</strong>
              <em>↗</em>
            </a>
          ))}
        </div>
      </section>
      <section className="about-founder" ref={aboutRef}>
        <div className="about-founder__photo">
          <img src="/shahzod-kamalov.jpg" alt="Шахзод Камалов" />
        </div>

        <div className="about-founder__content">
          <p className="about-founder__label">СПЕЦИАЛИСТ И РУКОВОДИТЕЛЬ</p>

          <h2>ШАХЗОД КАМАЛОВ</h2>

          <p className="about-founder__typing">
            {typedText}
            <span className="typing-cursor">|</span>
          </p>
          <a className="about-founder__button" href="#contacts">
            ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
          </a>
        </div>
      </section>
      <ProcessSection />
    </main>
  );
};
