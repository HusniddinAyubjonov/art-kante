import styles from "./button.module.css";

export const Button = ({
  children,
  variant = "text",
  onClick,
  className = "",
  type = "button",
}) => {
  const variantClass =
    variant === "cta" ? styles.variantCta : styles.variantText;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${variantClass} ${className}`}
    >
      <span>{children}</span>
      {variant === "text" && <span className={styles.arrow}>→</span>}
    </button>
  );
};
