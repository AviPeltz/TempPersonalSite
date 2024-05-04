import Image from "next/image";
import styles from "./page.module.css";

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <main className={styles.main}>
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
      {children}
    </main>
  );
}
