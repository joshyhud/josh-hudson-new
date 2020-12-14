import React from "react"
import {Link} from "gatsby"
import introStyles from "../styles/intro.module.css"

export default function Intro() {
	
	return(

	<div className={introStyles.intro}>

		<div className={introStyles.introText}>
			<span>
			<h2>Josh Hudson</h2>
			<p>A Web Developer from sunny Worthing. Avid learner, css animations lover, dedicated coffee drinker & Fullstack morning person.</p>
			<Link to="https://twitter.com/joshyhud">Twitter</Link>
			<Link to="https://www.buymeacoffee.com/joshyhud">Buy me a Coffee</Link>
			</span>
				<div className={introStyles.introImage}>
					<img alt="headshot" src="../images/head.png" />  
				</div>
		</div>
	</div>

	)
}