import React from "react"
import contactStyles from "../styles/contact.module.css"

export default function ContactContent(){

	return (

		<div className={contactStyles.contact}>

			<p>If you would like to get in touch to discuss a potential project or just for a chat, reach out on the form below or contact me on social.</p>

			<form name="Contacts" method="POST" data-netlify="true" netlify-honeypot="bot-field">
			  <p>
			    <label>Name: <input type="text" name="name"></input></label>
			  </p>
			  <p>
			    <label>Email: <input type="text" name="email" /></label>
			  </p>
			  <p>
			    <label>Message: <textarea name="message"></textarea></label>
			  </p>
			    <p class="hidden">
				    <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
				</p>
			  <button type="submit">Send</button>
			</form>


		</div>


		)

}