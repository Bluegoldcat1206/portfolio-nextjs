import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
        {/* <!-- Main Portfolio --> */}
        <div className={styles.section}>
            <div className={styles.headerSection}>
                <div className={styles.logo}></div>
                <h2 className={styles.headerTitle}>The<br/>Unhinged<br/>Creative</h2>
            </div>

            <div className={styles.navDots}>
                <div className={styles.dot}>About</div>
                <div className={styles.dot}>Portfolio</div>
                <div className={styles.dot}>FAQ's</div>
                <div className={styles.dot}>Reviews</div>
                <a href="#contact" className={styles.dot}>Contact</a>
            </div>

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
            <input type="text" className={styles.contactInput} placeholder="Email" value="Email"/>
            <input type="text" className={styles.contactInput} placeholder="Phone Number" value="Phone Number"/>
            <input type="text" className={styles.contactInput} placeholder="Instagram" value="Instagram"/>
            <input type="text" className={styles.contactInput} placeholder="LinkedIn" value="LinkedIn"/>
        </div>
    </div>
  );
}