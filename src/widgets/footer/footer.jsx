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
          <h4>Разделы</h4>
          <ul>
            <li>
              <a href="/">Проектирование</a>
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
