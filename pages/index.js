import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header />
      <div className={styles.hero}>
        <div className={styles.text}>
          <h1>
            Bienvenue ! <hr /> Moi c'est Yves Kouame
          </h1>
          <p>
            Je suis un développeur web passionné, spécialisé en React, Next.js
            et Node.js.
          </p>
          <Link href="/projects" className={styles.button}>
            Voir mes projets
          </Link>
        </div>
        <div className={styles.image}>
          <Image
            src="/images/profile.png"
            alt="Photo de profil"
            width={250}
            height={340}
            className={styles.profileImage}
          />
        </div>
      </div>
    </div>
  );
}
