import styles from "./portfolio.module.css";

const projects = [
  {
    id: "1",
    title: "Coeur d'Alene Poster",
    summary: "A poster project based on CDA Lake at Sunset.",
    image: "/images/CDAPoster.png",
    tags: ["Research", "Sketching", "Digital Design"]
  },
  {
    id: "2",
    title: "Art Nouveau Poster",
    summary: "Poster in the Art Nouveau style, with a woman figure and bike.",
    image: "/images/ArtNouveau.png",
    tags: ["History", "Digital Paint", "Artistic"]
  },
  {
    id: "3",
    title: "First Hobby Logo",
    summary: "The first logo I created for an imaginary coffee shop.",
    image: "/images/CoolBeansLogo.png",
    tags: ["Logo Design", "First Project", "Learning"]
  },
  {
    id: "4",
    title: "Christmas Chalk Menu Board",
    summary: "A Menu board design idea for a coffee shop, with Christmas illustrations.",
    image: "/images/MenuBoard.png",
    tags: ["Brainstorming", "Layout Design", "Final Production"]
  },
  {
    id: "5",
    title: "Graphic Design Quote Poster",
    summary: "A poster completely made of type and letters.",
    image: "/images/QuotePoster.png",
    tags: ["Typography", "Layout Design", "Rock and Roll"]
  },
  {
    id: "6",
    title: "Icon Pattern; Pumpkin Spice Life",
    summary: "A pattern made of icons I created.",
    image: "/images/PSLPattern.png",
    tags: ["Consistency", "Color Theme", "Spacing"]
  }
];

export default function Portfolio() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Portfolio</h1>
      <div className={styles.grid}>
        {projects.map(project => (
          <div key={project.id} className={styles.card}>
            <img src={project.image} alt={project.title} className={styles.image} />
            <div className={styles.cardBody}>
              <h2 className={styles.cardTitle}>{project.title}</h2>
              <p className={styles.cardSummary}>{project.summary}</p>
              <div className={styles.tags}>
                {project.tags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}