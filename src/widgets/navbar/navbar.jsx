import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";

const linkClass = ({ isActive }) => (isActive ? styles.active : "");

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <NavLink to="/" className={styles.logo}>
          ART KANTE
        </NavLink>
        <ul className={styles.links}>
          <li>
            <NavLink to="/portfolio" className={linkClass}>
              Портфолио
            </NavLink>
          </li>
          <li>
            <NavLink to="/project-design" className={linkClass}>
              Проектирование
            </NavLink>
          </li>
          <li>
            <NavLink to="/philosophy" className={linkClass}>
              Философия
            </NavLink>
          </li>
          <li>
            <NavLink to="/concept" className={linkClass}>
              Концепт
            </NavLink>
          </li>
          <li>
            <NavLink to="/inspiration" className={linkClass}>
              Вдохновение
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorites" className={linkClass}>
              Избранное
            </NavLink>
          </li>
        </ul>
        <div className={styles.phone}>+7 (495) 700 80 90</div>
      </div>
    </nav>
  );
};
