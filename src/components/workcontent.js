import React from "react"
import {Link} from "gatsby"
import WorkItem from "../components/workitem"
import workStyles from "../styles/work.module.css"

export default function WorkContent(){

	return (

		<div className={workStyles.work}>

		<p> Here are some exmaples of projects that I have worked on:</p>

			<div ClassName={workStyles.workgrid}>

				<WorkItem> 
					<h2>Sea on Glass</h2>
					<p>A freelance wordpress store front project for an artist duo in north Devon</p>
					<Link to="https://sea-on-glass.co.uk">See work</Link>
				</WorkItem>

				<WorkItem> 
					<h2>Frontline Aids</h2>
					<p>Wordpress build project for Frontline Aids Charity</p>
					<Link to="https://frontlineaids.org">See work</Link>
				</WorkItem>

				<WorkItem> 
					<h2>wearetilt.com</h2>
					<p>Wordpress Build and maintenance project</p>
					<Link to="https://wearetilt.com">See Work</Link>
				</WorkItem>

				<WorkItem> 
					<h2>Roffey Park Institute</h2>
					<p>A wordpress build and maintenance project for Roffey Park institute in Horsham</p>
					<Link to="https://roffeypark.ac.uk">See work</Link>
				</WorkItem>

				<WorkItem> 
					<h2>BA i360</h2>
					<p>A wordpress build and maintenance project for Roffey Park institute in Horsham</p>
					<Link to="https://britishairwaysi360.com/">See work</Link>
				</WorkItem>

				<WorkItem> 
					<h2>Travelbound</h2>
					<p>A wordpress build and maintenance project for Roffey Park institute in Horsham</p>
					<Link to="https://travelbound.co.uk/">See work</Link>
				</WorkItem>

			</div>

		</div>


		)

}