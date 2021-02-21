import React from "react"
import contactStyles from "../styles/contact.module.css"

export default function ContactContent(){

	return (

		<div className={contactStyles.contact}>

			<p>If you would like to get in touch to discuss a potential project or just for a chat, reach out on the form below or contact me on social.</p>

			<form name="contact" method="POST" data-netlify="true">
			  <p>
			    <label>Your Name: <input type="text" name="name" /></label>   
			  </p>
			  <p>
			    <label>Your Email: <input type="email" name="email" /></label>
			  </p>
			  <p>
			    <label>Your Role: <select name="role[]" multiple>
			      <option value="leader">Leader</option>
			      <option value="follower">Follower</option>
			    </select></label>
			  </p>
			  <p>
			    <label>Message: <textarea name="message"></textarea></label>
			  </p>
			    <div data-netlify-recaptcha="true"></div>
			  <p>
			    <button type="submit">Send</button>
			  </p>
			</form>

		</div>


		)

}