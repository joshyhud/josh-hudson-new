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
					<Link href="mailto:&#106;&#111;&#115;&#104;&#104;&#117;&#100;&#115;&#111;&#110;&#100;&#101;&#118;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">Contact</Link>
				</nav>
		</div>

	)

}