import React from 'react'

import styles from "./Contact.module.css"
import { getImageUrl } from '../../utils'

const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email" />
                <a href="ds137958@gmail.com">ds137958@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedin.png")} alt="LinkedIn" />
                <a href="https://www.linkedin.com/in/deepaksingh14th?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">linkedin.com/in/deepaksingh14th</a>
            </li>
            <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/dsWorld000">github.com/dsWorld000</a>
        </li>
        </ul>
    </footer>
  )
}

export default Contact