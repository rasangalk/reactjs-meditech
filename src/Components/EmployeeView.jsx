import React from "react";
import CloseIcon from "../images/closeicon.png";

function EmployeeView() {
	return (
		<div className='emp-view-card'>
			<button className='emp-card-close-btn'>
				<img src={CloseIcon} className='closeicon' />
			</button>
			<div className='emp-card-body'>
				<table className='emp-view-card-table'>
					<col width='10px' />
					<tr>
						<td className='emp-card-heading'>First Name</td>
						<td className='emp-card-heading'>Last Name</td>
					</tr>
					<tr>
						<td>Rasanga</td>
						<td>Lakshith</td>
					</tr>

					<tr>
						<td className='emp-card-heading'>Role</td>
					</tr>
					<tr>
						<td>Employee manager</td>
					</tr>

					<tr>
						<td className='emp-card-heading'>Email</td>
					</tr>
					<tr>
						<td>rasanagalakshitd152@gmail.com</td>
					</tr>

					<tr>
						<td className='emp-card-heading'>Phone</td>
					</tr>
					<tr>
						<td>0701864774</td>
					</tr>
					<tr>
						<td className='emp-card-heading'>Address</td>
					</tr>
					<tr>
						<td width='20%'>
							1/3, pragathi mawatha,heenatiyangala road, nagoda, kalutara south,
							sri lanka
						</td>
					</tr>
				</table>
			</div>
			<div className='emp-card-btn'>
				<button className='emp-card-update-btn'>update</button>
				<button className='emp-card-del-btn'>Delete</button>
			</div>
		</div>
	);
}

export default EmployeeView;
