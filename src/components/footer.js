import React from "react"
import {Link} from "gatsby"
import footerStyles from "../styles/footer.module.css"

export default function Footer(){

	return(

		<div className={footerStyles.footer}>

		<div className={footerStyles.social}>
			<Link to="https://twitter.com/joshyhud">Twitter</Link>
			<Link to="https://www.buymeacoffee.com/joshyhud">Buy me a Coffee</Link>
		</div>

		<div className={footerStyles.copyright}>
		Copyright 2020 Josh Hudson 
		</div>

		</div>

	)

}