import Header from "../components/Header";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1>Contact</h1>
        <p>
          Tu peux me contacter via ce formulaire ou directement par mail :{" "}
          <a href="mailto:kouamekoffiyves57@gmail.com">
            kouamekoffiyves57@gmail.com
          </a>
        </p>
        <form className={styles.form}>
          <label>
            Nom :
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              required
              className={styles.formField}
            />
          </label>
          <label>
            Email :
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              required
              className={styles.formField}
            />
          </label>
          <label>
            Message :
            <textarea
              name="message"
              rows="5"
              placeholder="Votre message..."
              required
              className={styles.formField}
            ></textarea>
          </label>
          <button type="submit" className={styles.button}>
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}
