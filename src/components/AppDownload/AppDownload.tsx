import * as React from "react";
import styles from "./AppDownload.sass";

const AppDownload: React.FC = () => {
  return (
    <div className={`${styles.wrapper} container`}>
      <div className={styles.section}>
        <div className={styles.content}>
          <h2 className={styles.title}>Download our App now !</h2>
          <p className={styles.description}>
            The rise of mobile devices transforms the way we consume information entirely
            and the world`&apos;s most relevant channels such as Facebook.
          </p>
          <div className={styles.stores}>
            <img className={styles.store} src="/assets/images/download/app-store.jpg" alt=""/>
            <img className={styles.store} src="/assets/images/download/google-play.jpg" alt=""/>
          </div>
        </div>
        <img className={styles.image} src="/assets/images/download/app.png" alt="" />
      </div>
    </div>
  )
}

export default AppDownload
