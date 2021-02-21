import React, { useState } from "react"
import contactStyles from "../styles/contact.module.css"
import axios from "axios";

export default function ContactContent(){

	const [serverState, setServerState] = useState({
      submitting: false,
      status: null
    });
    const handleServerResponse = (ok, msg, form) => {
      setServerState({
        submitting: false,
        status: { ok, msg }
      });
      if (ok) {
        form.reset();
      }
    };
    const handleOnSubmit = e => {
      e.preventDefault();
      const form = e.target;
      setServerState({ submitting: true });
      axios({
        method: "post",
        url: "https://getform.io/f/6e8428d4-bb9c-4066-ab2e-b2dd212930fa",
        data: new FormData(form)
      })
        .then(r => {
          handleServerResponse(true, "Thanks!", form);
        })
        .catch(r => {
          handleServerResponse(false, r.response.data.error, form);
        });
    };

	return (

		<div className={contactStyles.contact}>

			<p>If you would like to get in touch to discuss a potential project or just for a chat, reach out on the form below or contact me on social.</p>

			<form onSubmit={handleOnSubmit}>
	            <div className="form-group">
	                <label for="exampleInputEmail1" required="required">Email address</label>
	                <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
	            </div> 
	            <div className="form-group">
	                <label for="exampleInputName">Name</label>
	                <input type="text" name="name" className="form-control" id="exampleInputName" placeholder="Enter your name" required="required"/>
	            </div>
	            <button type="submit" className="btn btn-primary"  disabled={serverState.submitting}>
	                Submit
	            </button>
	            {serverState.status && (
	                <p className={!serverState.status.ok ? "errorMsg" : ""}>
	                {serverState.status.msg}
	                </p>
	            )}
            </form>

		</div>


		)

}