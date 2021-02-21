import React from "react"
import contactStyles from "../styles/contact.module.css"

export default function ContactContent(){

	return (

		<div className={contactStyles.contact}>

			<p>If you would like to get in touch to discuss a potential project or just for a chat, reach out on the form below or contact me on social.</p>

			<form name="contact" data-netlify-recaptcha="true" data-netlify="true" method="POST">
			  <label>
			    Name
			    <input type="text" name="name" id="name" />
			  </label>
			  <label>
			    Email
			    <input type="email" name="email" id="email" />
			  </label>
			  <label>
			    Message
			    <textarea name="message" id="message" rows="5" />
			  </label>
			  <button type="submit">Send</button>
			  <div data-netlify-recaptcha="true"></div>
			</form>

		</div>


		)

}