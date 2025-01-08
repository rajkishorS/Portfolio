import React from 'react'
import styles from "./About.module.css"
import { getImageUrl } from '../../utils';

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>
                About
            </h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/raj.jpg")}
                    alt="Me sitting with a laptop"
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Infolabz Intern</h3>
                            <p><h4>react.js</h4>
                                Worked on the React framework along with API integration and developed an API-based React application.<br />
                                Developed and maintained React components using ES6 features for a responsive user interface.<br />
                                Integrated RESTful APIs to fetch and display data.<br />
                                Worked closely with cross-functional teams including designers, back-end developer to translate requirements
                                into functional and appealing interfaces. </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="server icon" />
                        <div className={styles.aboutItemText}>
                            <h3>RUSA Intern</h3>
                            <p><h4>AI and ML</h4>
                                Work on: python, tensorFlow/PyTorch, Scikit-learn, Numpy, Pandas,KNN, linear regression, Matplotlibe/Seaborn.<br />
                                Conducted experiences with different algorithms and techniques to optimize model performance
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="Ui icon" />
                        <div className={styles.aboutItemText}>
                            <h3>NPTL</h3>
                            <p> <h5> DSA using Java</h5>Successfully completed a 12-week comprehensive program on Data Structures and Algorithms conducted by NPTEL.<br /> 
                            Gained in-depth knowledge of core data structures such as arrays, linked lists, stacks, queues, trees, and graphs, along with hands-on experience in implementing algorithms like sorting, searching, dynamic programming, and graph traversal using Java.<br />
                                Enhanced problem-solving skills and learned to optimize solutions with a focus on time and space complexity.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}
