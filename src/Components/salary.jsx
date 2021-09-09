import React from "react";
import logo from "../images/logo.png";
import user from "../images/user.png";
import Sidebar from "./Sidebar";
import logout from "../images/logout.png";
import people from "../images/people.png";
import shadow from "../images/shadow.png";
import Calendar from "react-calendar";

function salary() {
	return (
		<div>
			<h1>Salary page</h1>
			<div className='MainContainer'>
				<div className='containermini'>
					<img src={logo} className='logo' />

					<img src={user} className='user' />

					<Sidebar />

					<img src={logout} className='logout' />
				</div>
			</div>
		</div>
	);
}

export default salary;
