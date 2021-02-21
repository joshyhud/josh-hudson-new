import React from "react"
import contactStyles from "../styles/contact.module.css"

export default function ContactContent(){

	return (

		<div className={contactStyles.contact}>

			<p>If you would like to get in touch to discuss a potential project or just for a chat, reach out on the form below or contact me on social.</p>

			<form name="contact" method="POST" data-netlify="true">
			  <p>
			    <label>Name: <input type="text" name="name" /></label>   
			  </p>
			  <p>
			    <label>Email: <input type="email" name="email" /></label>
			  </p>
			  <p>
			    <label>Message: <textarea name="message"></textarea></label>
			  </p>
			  <p>
			    <button type="submit">Send</button>
			  </p>
			</form>

		</div>


		)

}