import Header from "../components/Header";
import styles from "../styles/About.module.css";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1>À propos de moi</h1>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/profile2.jpeg"
              alt="Photo de profil"
              width={200}
              height={200}
              className={styles.image}
            />
          </div>
          <div className={styles.text}>
            <p>
              Bonjour ! Je suis un développeur full-stack passionné par la
              création d'applications web modernes et performantes. J’ai de
              l’expérience avec React, Next.js, Node.js, et MongoDB.
            </p>
            <p>
              J’aime travailler sur des projets innovants, apprendre de
              nouvelles technologies, et résoudre des problèmes complexes. En
              dehors du code, je m'intéresse aussi au design UI/UX, à
              l'automatisation et à l'intelligence artificielle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
