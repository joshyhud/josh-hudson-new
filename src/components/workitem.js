import React from "react"
import workStyles from "../styles/work.module.css"

export default function WorkItem({ children }){
	return <div className={workStyles.workitem}>{children}</div>
}