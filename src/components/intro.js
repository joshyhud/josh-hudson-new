import React from "react"
import {Link} from "gatsby"
import introStyles from "../styles/intro.module.css"

export default function Intro() {
	
	return(

	<div className={introStyles.intro}>

		<div className={introStyles.introText}>
			<span>
			<h2>Josh Hudson</h2>
			<p>I am a Web Developer from sunny Worthing, working for digital agency <Link to="https://wearetilt.com">We are Tilt</Link> in Brghton. I am an avid learner of all new things and love css animations, also a dedicated coffee drinker and Fullstack morning person.</p>
			</span>
				<div className={introStyles.introImage}>
					<img alt="headshot" src="../images/head.png" />  
				</div>
		</div>
	</div>

	)
}