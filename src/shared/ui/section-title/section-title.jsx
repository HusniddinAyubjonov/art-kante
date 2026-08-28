import styles from "./section-title.module.css";

export const SectionTitle = ({
  title,
  caption,
  as: Tag = "h2",
  className = "",
}) => {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      {caption && <div className={styles.caption}>{caption}</div>}
      <Tag className={styles.title}>{title}</Tag>
    </div>
  );
};
