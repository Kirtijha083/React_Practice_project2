import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
export default function ContactForm() {
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}> <Button/>  </div>
        <div className={styles.top_btn}></div>
    </section>

  );
};

