import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import styles from "../styles/Projects.module.css";

const projects = [
  {
    title: "Portfolio Next.js",
    image: "/images/portfolioimage.jpg",
    description: "Un site de portfolio moderne avec Next.js et CSS Modules.",
  },
  {
    title: "Application mobile",
    image: "/images/ApplicationMobileProject.jpg",
    description:
      "Application mobile avec React, Redux et stockage local pour un blog.",
  },
  {
    title: "Site E-commerce",
    image: "/images/e-commercieIMage.jpg",
    description: "Site E-commerce construite avec Express, Redux et MongoDB .",
  },
];

export default function Projects() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1>Mes projets</h1>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              image={project.image}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
