import React from "react"
import contactStyles from "../styles/contact.module.css"

export default function ContactContent(){

	return (

		<div className={contactStyles.contact}>

			<p>If you would like to get in touch to discuss a potential project or just for a chat, reach out on the form below or contact me on social.</p>

			<form action="https://getform.io/f/6e8428d4-bb9c-4066-ab2e-b2dd212930fa" method="POST">

			  <input type="text" name="name">
			  <input type="email" name="email">
			  <input type="text" name="message">
			  <button type="submit">Send</button>

			</form>

		</div>


		)

}