import styles from './page.module.css';

export default function Page() {
    return(
        <div className={styles.blogContainer}>
            <div>
            <div className={styles.blogHeader}>
                <h1 className={styles.blogHeader}>Blog</h1>
            </div>
            </div>
            <div className={styles.blogGallery}>
                <div className={styles.blogCard}>
                    <div className={styles.blogThumbnail}></div>
                    <div className={styles.blogContent}>
                        <div className={styles.blogDate}></div>
                        <div className={styles.blogTitle}></div>
                        <div className={styles.blogDescription}></div>
                        <div className={styles.blogTags}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}