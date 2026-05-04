import styles from "../page.module.css";

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.contactCard} id="contact">
        <div className={styles.cupcakeIcon}></div>
        <h2 className={styles.contactTitle}>Contact Card</h2>
        <p className={styles.contactSubtitle}>Thank you yada yada yada</p>
        <a href="mailto:your@email.com" className={`${styles.contactInput} ${styles.inputEmail}`}>Email</a>
        <a href="tel:+11234567890" className={`${styles.contactInput} ${styles.inputPhone}`}>Phone Number</a>
        <a href="https://instagram.com/yourhandle" target="_blank" className={`${styles.contactInput} ${styles.inputInstagram}`}>Instagram</a>
        <a href="https://linkedin.com/in/yourhandle" target="_blank" className={`${styles.contactInput} ${styles.inputLinkedin}`}>LinkedIn</a>
      </div>
    </div>
  );
}