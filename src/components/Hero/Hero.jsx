import React from 'react';
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils'

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Raj Kishor</h1>
            <h2 className={styles.titles}>Full Stack Web Developer</h2>
            <p className={styles.description}>
                "Hi, my name is Raj Kishor, and I am a passionate Full Stack Web Developer. I have developed expertise in a wide range of technologies, including Java, Python, JavaScript, ReactJS, Node.js, Express.js, SQL, and MongoDB. I am highly passionate about software development and eager to pursue a role as a Full Stack Software Developer, where I can apply my skills to build innovative and impactful solutions."
            </p>
            <div className={styles.Btn}>
            <a href="mailto:rajkishorec39@gmail.com" className={styles.GmailBtn}>Gmail me</a>
            <a href="tel:+916209538988" className={styles.contactBtn}>&#9742;Coll</a>
            <a href="https://drive.google.com/file/d/1tsOIwW1zPGAb8ecJbh94V9YmRlW0GxJ_/view?usp=sharing" className={styles.cvBtn}>&darr;CV</a>
            </div>
            
        </div>
        <img src={getImageUrl("hero/heroimage.webp")} alt="Hero image of me" className={styles.heroImg} />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
}