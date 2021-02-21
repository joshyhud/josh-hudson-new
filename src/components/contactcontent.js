import React from "react"
import contactStyles from "../styles/contact.module.css"

export default function ContactContent(){

	return (

		<div className={contactStyles.contact}>

			<p>If you would like to get in touch to discuss a potential project or just for a chat, reach out on the form below or contact me on social.</p>

			<form method="post" action="https://getform.io/f/6e8428d4-bb9c-4066-ab2e-b2dd212930fa">
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
			  <div class="g-recaptcha" data-sitekey="6LeqbwMaAAAAADKhtz3ISBtzSLPPcANedLIjea_2"></div>
			</form>

		</div>


		)

}