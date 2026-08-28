import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>ART KANTE</div>
        <ul className={styles.links}>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Проектирование
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/philosophy"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Философия
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/concept"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Концепт
            </NavLink>
          </li>
        </ul>
        <div className={styles.phone}>+7 (495) 700 80 90</div>
      </div>
    </nav>
  );
};
