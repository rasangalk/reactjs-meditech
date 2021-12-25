import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import logo from "../images/logo.png";
import user from "../images/user.png";
import logout from "../images/logout.png";
import "./Leaves.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import LeaveView from "./LeaveView";

function Leaves() {
	const [leaves, setLeaves] = useState([]);
	const [popupOn, setPopupOn] = useState(false);
	const [viewLeaves, setViewLeaves] = useState();

	useEffect(() => {
		axios
			.get("http://localhost:3004/leave/all")
			.then(response => {
				setLeaves(response.data);
				console.log(response.data.length);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	const openPopup = e => {
		e.preventDefault();
		var value = e.target.value;
		if (value === undefined || value === "" || value === null) {
			value = e.target.parentNode.value;
		}
		setViewLeaves(value);
		setPopupOn(true);
	};

	const closePopup = () => {
		setPopupOn(false);
		setViewLeaves();
	};

	return (
		<>
			<div>
				<div className='MainContainer'>
					<div className='containermini'>
						<img src={logo} className='logo' />

						<img src={user} className='user' />

						<Sidebar />

						<img src={logout} className='logout' />
					</div>
					<div className='emp-list-body'>
						<div className='emp-list-body2'>
							<div className='emp-list-title'>
								<h2 className='emp-list-heading'>Leave Request</h2>
								<NavLink
									to='/employee-leaveReport'
									activeClassName='active-nav'
									className='row'>
									<button className='emp-leave-btn'>Create Report</button>
								</NavLink>
							</div>
							<br />
							<div className='leave-list-table2'>
								<div>
									<h5>ID</h5>
									<h5>Employee ID</h5>
									<h5>Requeted date</h5>
									<h5>Leave date</h5>
								</div>
								<div>
									{leaves.map((leave, index) => {
										return (
											<button key={index} value={leave.id} onClick={openPopup}>
												<div clickable={false}>{leave.id}</div>
												<div>{leave.employeeId}</div>
												<div>{leave.createdAt}</div>
												<div>{leave.appliedDate}</div>
											</button>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{popupOn && <LeaveView closePopup={closePopup} id={viewLeaves} />}
		</>
	);
}

export default Leaves;
