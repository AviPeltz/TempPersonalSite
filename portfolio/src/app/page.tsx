import Image from "next/image";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.main}>
      {/* start of cube animation */}
      <div className={styles.over}>
        <div className={styles.cube}></div>
        <div className={styles.cube}></div>
        <div className={styles.cube}></div>
        <div className={styles.cube}></div>
        <div className={styles.cube}></div>
        <div className={styles.cube}></div>
        <div className={styles.img}></div>
      </div>
      {/* end of cube animation */}
      {/* start of color balls */}
      <div className={styles.redball}></div>
      <div className={styles.blueball}></div>
      <div className={styles.tealball}></div>
       {/* end of color balls */}

    </div>
  );
}
