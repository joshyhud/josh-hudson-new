import React from "react"
import {Link} from "gatsby"
import headerStyles from "../styles/header.module.css"

export default function Header() {

	return (
		<div className={headerStyles.header}>
			<h2><Link to="/">Josh Hudson</Link></h2>
				<nav>
					<Link to="/work">Work</Link>
					<Link to="/blog">Blog</Link>
					<Link to="/contact">Contact</Link>
				</nav>
		</div>

	)

}