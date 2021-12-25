import React, { useEffect, useState } from "react";
import CloseIcon from "../images/closeicon.png";
import axios from "axios";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useHistory } from "react-router-dom";

function EmployeeView(props) {
	const [data, setData] = useState([]);
	const history = useHistory();

	useEffect(() => {
		axios
			.get("http://localhost:3004/employee/" + props.id)
			.then(response => {
				setData(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	const handleDelete = () => {
		confirmAlert({
			title: "Confirm to submit",
			message: "Are you sure to do this.",
			buttons: [
				{
					label: "Yes",
					onClick: () => {
						axios
							.delete("http://localhost:3004/employee/" + props.id)
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
		<div className='emp-view-card'>
			<button className='emp-card-close-btn'>
				<img src={CloseIcon} className='closeicon' onClick={props.closePopup} />
			</button>
			<div className='emp-card-body'>
				<table className='emp-view-card-table'>
					<col width='10px' />
					<tr>
						<td className='emp-card-heading'>First Name</td>
						<td className='emp-card-heading'>Last Name</td>
					</tr>
					<tr>
						<td>{data.fname}</td>
						<td>{data.lname}</td>
					</tr>

					<tr>
						<td className='emp-card-heading'>Role</td>
					</tr>
					<tr>
						<td>{data.role}</td>
					</tr>

					<tr>
						<td className='emp-card-heading'>Email</td>
					</tr>
					<tr>
						<td>{data.email}</td>
					</tr>

					<tr>
						<td className='emp-card-heading'>Phone</td>
					</tr>
					<tr>
						<td>{data.phone}</td>
					</tr>
					<tr>
						<td className='emp-card-heading'>Address</td>
					</tr>
					<tr>
						<td width='20%'>{data.address}</td>
					</tr>
				</table>
			</div>
			<div className='emp-card-btn'>
				<button
					className='emp-card-update-btn'
					onClick={() => history.push("/employee-update" + props.id)}>
					update
				</button>
				<button onClick={handleDelete} className='emp-card-del-btn'>
					Delete
				</button>
			</div>
		</div>
	);
}

export default EmployeeView;
