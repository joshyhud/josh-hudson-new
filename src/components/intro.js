import React from "react"
import { Link } from "gatsby"
import introStyles from "../styles/intro.module.css"

export default function Intro() {
  return (
    <div className={introStyles.intro}>
      <div className={introStyles.introText}>
        <span>
          <h2>Josh Hudson</h2>
          <p>
            A Web Developer from sunny Worthing. Avid learner, css animations
            lover, dedicated coffee drinker & Fullstack morning person.
          </p>
          <Link href="mailto:&#106;&#111;&#115;&#104;&#104;&#117;&#100;&#115;&#111;&#110;&#100;&#101;&#118;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">
            Email Me
          </Link>
        </span>
        <div className={introStyles.introImage}>
          <img alt="headshot" src="../images/head.png" />
        </div>
      </div>
    </div>
  )
}
