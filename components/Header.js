import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Yves Kouame</div>
      <nav className={styles.nav}>
        <Link href="/" className={styles.link}>
          Accueil
        </Link>
        <Link href="/about" className={styles.link}>
          À propos
        </Link>
        <Link href="/projects" className={styles.link}>
          Projets
        </Link>
        <Link href="/contact" className={styles.link}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
