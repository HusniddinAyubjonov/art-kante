import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.col}>
          <div className={styles.logo}>ART KANTE</div>
          <p>© 2026 Все права защищены</p>
        </div>
        <div className={styles.col}>
          <h4>Контакты</h4>
          <p>+7 (495) 700 80 90</p>
          <p>info@artkante.ru</p>
          <p>105120, г. Москва, ул. Сыромятническая, д.10, стр.12</p>
        </div>
        <div className={styles.col}>
          <h4>Каталог</h4>
          <ul>
            <li>
              <a href="/portfolio">Портфолио</a>
            </li>
            <li>
              <a href="/inspiration">Вдохновение</a>
            </li>
            <li>
              <a href="/favorites">Избранное</a>
            </li>
          </ul>
        </div>
        <div className={styles.col}>
          <h4>Разделы</h4>
          <ul>
            <li>
              <a href="/project-design">Проектирование</a>
            </li>
            <li>
              <a href="/philosophy">Философия</a>
            </li>
            <li>
              <a href="/concept">Концепт</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
