import Link from "next/link";
import projects from "../data/projects";
import styles from "./portfolio.module.css";

export default function Portfolio() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Portfolio</h1>
      <div className={styles.grid}>
        {projects.map(project => (
          <div key={project.id} className={styles.card}>
            <img src={project.images[0].url} alt={project.title} className={styles.image} />
            <div className={styles.cardBody}>
              <h2 className={styles.cardTitle}>{project.title}</h2>
              <p className={styles.cardSummary}>{project.summary}</p>
              <div className={styles.tags}>
                {project.tags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
              <Link href={`/portfolio/${project.slug}`} className={styles.viewBtn}>
                View Project
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}