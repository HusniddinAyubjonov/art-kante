import { useState } from "react";
import styles from "./callback-form.module.css";

export const CallbackForm = ({ onClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) {
      alert("Заполните все поля");
      return;
    }
    setLoading(true);
    // Имитация отправки
    setTimeout(() => {
      alert(`Заявка от ${name}, телефон ${phone} отправлена!`);
      setLoading(false);
      onClose();
    }, 1000);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <p className={styles.subtitle}>
        Оставьте ваши контакты, и мы перезвоним вам для консультации
      </p>

      <div className={styles.field}>
        <label>Ваше имя</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Иван Иванов"
          required
        />
      </div>

      <div className={styles.field}>
        <label>Ваш телефон</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+7 (999) 123-45-67"
          required
        />
      </div>

      <div className={styles.agreement}>
        <input type="checkbox" id="agree" required />
        <label htmlFor="agree">
          Нажимая на кнопку, я соглашаюсь с{" "}
          <a href="#">политикой конфиденциальности</a>
        </label>
      </div>

      <button type="submit" className={styles.submitBtn} disabled={loading}>
        {loading ? "Отправка..." : "ОТПРАВИТЬ"}
      </button>
    </form>
  );
};
