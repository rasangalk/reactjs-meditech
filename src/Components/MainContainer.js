import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "../images/logo.png";
import user from "../images/user.png";
import Sidebar from "./Sidebar";
import logout from "../images/logout.png";
import people from "../images/people.png";
import shadow from "../images/shadow.png";
import Calendar from "react-calendar";

function MainContainer() {
	//const [leaverequest, setLeaverequest] = useState("");

	const [empCount, setEmpCount] = useState(0);
	const [leaveCount, setLeavecount] = useState(0);

	useEffect(() => {
		axios
			.get("http://localhost:3004/employee/")
			.then(response => {
				setEmpCount(response.data.length);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	useEffect(() => {
		axios
			.get("http://localhost:3004/leave/all")
			.then(response => {
				setLeavecount(response.data.length);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	return (
		<div className='MainContainer'>
			<div className='containermini'>
				<img src={logo} className='logo' />
				<img src={user} className='user' />
				<Sidebar />
				<img src={logout} className='logout' />
			</div>
			<div className='welcome-card-1'>
				<img src={people} className='people' />
				<img src={shadow} className='shadow' />
				<h2 className='hello-message'>Hello Rasanga!</h2>
				<p className='hello-message-2'>
					May every step you make be filled with happiness
				</p>
			</div>
			<div className='welcome-card-calendar'>
				<Calendar />
			</div>
			<div className='welcome-employee-card'>
				<h2>Employees</h2>
				<p>{empCount}</p>
			</div>
			<div className='welcome-leave_req-card'>
				<h2>Leave Requests</h2>
				<p>{leaveCount}</p>
			</div>
		</div>
	);
}

export default MainContainer;
