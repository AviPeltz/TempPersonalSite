import Image from "next/image";
import styles from "./page.module.css";
import profile from "../../public/profile.png";


export default function Page() {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.socialsContainer}>
        <div className={styles.linkedin}>
          <button>l</button>
        </div>
        <div className={styles.github}>
          <button>g</button>
        </div>
        <div className={styles.twitter}>
          <button>t</button>
        </div>
        <div className={styles.hackaday}>
          <button>h</button>
        </div>
      </div>
      <div className={styles.aboutContent}>
        <div className={styles.thumbnail}>
          <Image
            src={profile}
            alt="Profile Picture"
            width={125}
            height={125}
          />
        </div>
        <div className={styles.textContent}>
          <div className={styles.animatedTitle}>Hi! 👋 I'm Avi.</div>
          <p className={styles.bio}>I&apos;ve been working on machine learning related problems for about 8+ years now, and have been programming since I was 13... I really love to make cool shit..<br/><br/>
          Currently working on <span className={styles.textSpecial}>BioGlyph</span>, we’re building a copilot helping scientist design the next generation of protein therapeutics.</p>
        </div>
      </div>
    </div>
  );
}
