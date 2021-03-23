import React from "react"
import {Link} from "gatsby"
import WorkItem from "../components/workitem"
import workStyles from "../styles/work.module.css"
import frontpageStyles from "../styles/frontpage.module.css" 


export default function WorkContent(){

	return (

		<div className={workStyles.work}>

		<p>Here are some examples of projects that I have worked on. Click on See work to go to the sites and if you have any questions please feel free to contact me.</p>

			<div ClassName={workStyles.workgrid}>

				<WorkItem> 
					<h2>Design is the Difference - Vodafone</h2>
					<p>Winner of Digital Impact Award 2021 online learning video piece made for Vodafone. Static site generation with rich media and content created with We Are Tilt</p>
					<Link className={frontpageStyles.more} to="https://wearetilt.com/design-is-the-difference/">See case study</Link>
				</WorkItem>

				<WorkItem> 
					<h2>Sea on Glass</h2>
					<p>A freelance Wordpress storefront project for an artist duo in north Devon</p>
					<Link className={frontpageStyles.more} to="https://sea-on-glass.co.uk">See work</Link>
				</WorkItem>

				<WorkItem> 
					<h2>Frontline Aids</h2>
					<p>Wordpress build project for Frontline Aids Charity utilising ACF's and custom functions to display multiple content types and resources with We Are Tilt.</p>
					<Link className={frontpageStyles.more} to="https://frontlineaids.org">See work</Link>
				</WorkItem>

				<WorkItem> 
					<h2>We Are Tilt Website</h2>
					<p>Wordpress Build and maintenance project utilising ACF's for custom post and function builds for content population and CSS animations and styling for interactive visuals.</p>
					<Link className={frontpageStyles.more} to="https://wearetilt.com">See Work</Link>
				</WorkItem>

				<WorkItem> 
					<h2>Roffey Park Institute</h2>
					<p>A Wordpress Woocommerce build project for Roffey Park Institute based in Horsham, with a global reach for business courses with We Are Tilt. </p>
					<Link className={frontpageStyles.more} to="https://roffeypark.ac.uk">See work</Link>
				</WorkItem>

				<WorkItem> 
					<h2>BA i360</h2>
					<p>A wordpress build for the BA i360 in Brighton. Creating custom theme template parts, functions with ACF's for events, ticketing and posts/marketing campaigns with We Are Tilt.</p>
					<Link className={frontpageStyles.more} to="https://britishairwaysi360.com/">See work</Link>
				</WorkItem>

				<WorkItem> 
					<h2>Travelbound</h2>
					<p>A wordpress build With We Are Tilt for Experience Education brand. creating a fully CMSable site for the client to use with new Gutenberg blocks and utilising custom functions to display trips and post information.</p>
					<Link className={frontpageStyles.more} to="https://travelbound.co.uk/">See work</Link>
				</WorkItem>

			</div>

		</div>


		)

}