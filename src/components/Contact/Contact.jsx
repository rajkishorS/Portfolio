import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>I believe great things happen when creative minds come together. If you’re 
          looking for a passionate Full Stack Developer who can bring your ideas to life, let’s 
          connect! Whether it's a simple query or an exciting project, don’t hesitate to drop me a message.</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:rajkishorec39@gmail.com">Gmail</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/raj-kishor-595a082a1/">Linkedin</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/rajkishorS">Github</a>
        </li>
      </ul>
    </footer>
  );
};