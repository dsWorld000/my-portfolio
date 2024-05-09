import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi I'm Deepak</h1>
        <p className={styles.description}>
          I'm a front-end developer with 1 years of experience using React.
          Reach out if you'd like to learn more!
        </p>
        <a
          href="https://www.linkedin.com/in/deepaksingh14th?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/ds14.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
