import styles from "./page.module.css";

const projects = [
  {
    id: "1",
    title: "Coeur d'Alene Poster",
    summary: "A poster project based on CDA Lake at Sunset.",
    images: [{ url: "/images/CDAPoster.png", alt: "Logo design" }],
    tags: ["Research", "Sketching", "Digital Design"]
  },
  {
    id: "2",
    title: "Art Nouveau Poster",
    summary: "Poster in the Art Nouveau style, with a woman figure and bike.",
    images: [{ url: "/images/ArtNouveau.png", alt: "Website mockup" }],
    tags: ["History", "Digital Paint", "Artistic"]
  },
  {
    id: "3",
    title: "First Hobby Logo",
    summary: "The first logo I created for an imaginary coffee shop.",
    images: [{ url: "/images/CoolBeansLogo.png", alt: "Event poster" }],
    tags: ["Logo Design", "First Project", "Learning"]
  },
  {
    id: "4",
    title: "Christmas Chalk Menu Board",
    summary: "A Menu board design idea for a coffee shop, with Christmas illustrations.",
    images: [{ url: "/images/MenuBoard.png", alt: "Event poster" }],
    tags: ["Brainstorming", "Layout Design", "Final Production"]
  },
  {
    id: "5",
    title: "Graphic Design Quote Poster",
    summary: "A poster completely made of type and letters.",
    images: [{ url: "/images/QuotePoster.png", alt: "Event poster" }],
    tags: ["Typography", "Layout Design", "Rock and Roll"]
  },
  {
    id: "6",
    title: "Icon Pattern; Pumpkin Spice Life",
    summary: "A pattern made of icons I created.",
    images: [{ url: "/images/PSLPattern.png", alt: "Event poster" }],
    tags: ["Consistency", "Color Theme", "Spacing"]
  }
];

export default function Home() {
  return (
    <div className={styles.container}>
        {/* <!-- Main Portfolio --> */}
        <div className={styles.section}>

            <div className={styles.introBox}>
                <h3 className={styles.introTitle}>So, you want to make something...</h3>
                <p className={styles.introText}>I'm Natalie Cole, and I can help you create your dream design.</p>
                <div className={styles.sourceBox}>
                    <p className={styles.sourceTitle}>Source Serif Variable ExtraLight</p>
                    <p className={styles.sourceSubtitle}>Flavor</p>
                </div>
            </div>

            <div className={styles.rollingBar}>
                <p className={styles.rollingTitle}>Rolling bar of my icons</p>
            </div>

            <div className={styles.skillsGrid}>
                <div className={styles.skillBox}>Skill 1</div>
                <div className={styles.skillBox}>Skill 2</div>
                <div className={styles.skillBox}>Skill 3</div>
            </div>

            <div className={styles.portfolioBox}>
                <h3 className={styles.portfolioTitle}>Portfolio</h3>
                <p className={styles.portfolioText}>This is my work and these are the things I can do</p>
            </div>

            <div id="portfolio-container">
                {projects.map(project => (
                    <div key={project.id}>
                        <div className={styles.portfolioItem}>
                            <div className={styles.portfolioItemText}>
                                <p className={styles.portfolioItemTitle}>{project.title}</p>
                                <p>{project.summary}</p>
                            </div>
                            <div className={styles.portfolioImage}>
                                <img src={project.images[0].url} alt={project.images[0].alt} />
                            </div>
                        </div>
                        <div className={styles.portfolioTags}>
                            {project.tags.map(tag => (
                                <span key={tag} className={styles.tag}>{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.faqSection}>
                <h3 className={styles.faqTitle}>FAQ'S</h3>
                <div className={styles.faqQuestion}>Question (Click to expand for Answer)</div>
                <div className={styles.faqQuestion}>Question (Click to expand for Answer)</div>
                <div className={styles.faqQuestion}>Question (Click to expand for Answer)</div>
                <div className={styles.faqQuestion}>Question (Click to expand for Answer)</div>
                <div className={styles.faqQuestion}>Question (Click to expand for Answer)</div>
                
                <div className={styles.divider}>
                    <div className={styles.arrowDown}></div>
                </div>

                <div className={styles.skillsFinalInner}>
                    <div className={styles.skillsFinalGrid}>
                        <div className={styles.skillColumn}>
                            <h4 className={styles.skillColumnTitle}>Skill 1</h4>
                            <div className={styles.qualItem}>
                                <div className={styles.qualDot}></div>
                                <span>Qualifications</span>
                            </div>
                            <div className={styles.qualItem}>
                                <div className={styles.qualDot}></div>
                                <span>Qualifications</span>
                            </div>
                            <div className={styles.qualItem}>
                                <div className={styles.qualDot}></div>
                                <span>Qualifications</span>
                            </div>
                        </div>
                        <div className={styles.skillColumn}>
                            <h4 className={styles.skillColumnTitle}>Skill 2</h4>
                            <div className={styles.qualItem}>
                                <div className={styles.qualDot}></div>
                                <span>Qualifications</span>
                            </div>
                            <div className={styles.qualItem}>
                                <div className={styles.qualDot}></div>
                                <span>Qualifications</span>
                            </div>
                            <div className={styles.qualItem}>
                                <div className={styles.qualDot}></div>
                                <span>Qualifications</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.contactMeBtn}>Contact Me</div>
                </div>
            </div>
        </div>

        {/* <!-- Client Testimonies Section --> */}
        <div className={styles.section} style={{marginTop: "40px"}}>
            <h1 className={styles.sectionTitle}>Client Testimonies</h1>
            <div className={styles.testimonialsGrid}>
                <div className={styles.testimonialBox}></div>
                <div className={styles.testimonialBox}></div>
                <div className={styles.testimonialBox}></div>
                <div className={styles.testimonialBox}></div>
            </div>
        </div>

        <div className={styles.contactCard} id="contact">
            <div className={styles.cupcakeIcon}></div>
            <h2 className={styles.contactTitle}>Contact Card</h2>
            <p className={styles.contactSubtitle}>Thank you yada yada yada</p>
<input type="text" className={`${styles.contactInput} ${styles.inputEmail}`} placeholder="Email" defaultValue="Email"/>
<input type="text" className={`${styles.contactInput} ${styles.inputPhone}`} placeholder="Phone Number" defaultValue="Phone Number"/>
<input type="text" className={`${styles.contactInput} ${styles.inputInstagram}`} placeholder="Instagram" defaultValue="Instagram"/>
<input type="text" className={`${styles.contactInput} ${styles.inputLinkedin}`} placeholder="LinkedIn" defaultValue="LinkedIn"/>
        </div>
    </div>
  );
}