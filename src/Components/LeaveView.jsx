import React, { useEffect, useState } from "react";
import CloseIcon from "../images/closeicon.png";
import axios from "axios";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useHistory } from "react-router-dom";
import "./LeaveView.css";

function LeaveView(props) {
	const [data, setData] = useState([]);
	const history = useHistory();

	useEffect(() => {
		axios
			.get("http://localhost:3004/leave/" + props.id)
			.then(response => {
				setData(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	const handleDeny = () => {
		confirmAlert({
			title: "Confirm to submit",
			message: "Are you sure to deny the request?",
			buttons: [
				{
					label: "Yes",
					onClick: () => {
						axios
							.patch("http://localhost:3004/leave/" + props.id, {
								status: "denied",
							})
							.then(history.go(0))
							.catch();
					},
				},
				{
					label: "No",
				},
			],
		});
	};

	const handleAccept = () => {
		confirmAlert({
			title: "Confirm to submit",
			message: "Are you sure to do accept the request",
			buttons: [
				{
					label: "Yes",
					onClick: () => {
						axios
							.patch("http://localhost:3004/leave/" + props.id, {
								status: "accepted",
							})
							.then(history.go(0))
							.catch();
					},
				},
				{
					label: "No",
				},
			],
		});
	};

	return (
		<div className='leave-view-card'>
			<button className='emp-card-close-btn'>
				<img src={CloseIcon} className='closeicon' onClick={props.closePopup} />
			</button>
			<div className='leave-card-body'>
				<h3 className='leave-card-heading'>Leave id</h3>
				<h3 className='leave-card-desc'>{data.id}</h3>
				<br />
				<h3 className='leave-card-heading'>Employee id</h3>
				<h3 className='leave-card-desc'>{data.employeeId}</h3>
				<br />
				<h3 className='leave-card-heading'>Leave status</h3>
				<h3 className='leave-card-desc'>{data.status}</h3>
				<br />
				<h3 className='leave-card-heading'>Leave date</h3>
				<h3 className='leave-card-desc'>{data.appliedDate}</h3>
				<br />
				<h3 className='leave-card-heading'>Leave Reason</h3>
				<div className='leave-card-de'>
					<h3 className='leave-card-desc'>{data.reason}</h3>
				</div>
			</div>
			<div className='emp-card-btn'>
				<button className='emp-card-update-btn' onClick={handleAccept}>
					accept
				</button>
				<button onClick={handleDeny} className='emp-card-del-btn'>
					deny
				</button>
			</div>
		</div>
	);
}

export default LeaveView;
