import React, { Component } from "react";
import logo from "../images/logo.png";
import user from "../images/user.png";
import Sidebar from "./Sidebar";
import logout from "../images/logout.png";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Employee = props => (
	<div className='emp-list-row-click' onClick={this}>
		<tr>
			<td className='emp-list-data'>{props.employee.id}</td>
			&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
			&nbsp;
			<td className='emp-list-data'>{props.employee.fname}</td>
			&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
			&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
			<td className='emp-list-data'>{props.employee.email}</td>
			&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
			&nbsp;&nbsp; &nbsp;&nbsp;
			<td className='emp-list-data'>{props.employee.role}</td>
		</tr>
	</div>
);

class employee extends Component {
	constructor(props) {
		super(props);
		this.state = { employees: [] };
	}

	componentDidMount() {
		axios
			.get("http://localhost:3004/employee/")
			.then(response => {
				this.setState({ employees: response.data });
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	employeeList() {
		return this.state.employees.map(function (currentEmployee, i) {
			return <Employee employee={currentEmployee} key={i} />;
		});
	}

	render() {
		return (
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
								<h2 className='emp-list-heading'>Employees</h2>
							</div>
							<div className='emp-list-search-btn'>
								<input
									type='search'
									className='emp-list-search'
									placeholder='search'
								/>
								<NavLink
									to='/new-employee'
									activeClassName='active-nav'
									className='row'>
									<button className='emp-list-btn'>add new</button>
								</NavLink>
							</div>
							<br />

							<table className='emp-list-table'>
								<thead style={{ marginTop: "19px" }}>
									<tr>
										<th
											className='emp-list-table-head'
											style={{ paddingRight: "108px" }}>
											ID
										</th>
										<th
											className='emp-list-table-head'
											style={{ paddingRight: "75px" }}>
											first name
										</th>
										<th
											className='emp-list-table-head'
											style={{ paddingRight: "87px" }}>
											email
										</th>
										<th className='emp-list-table-head'>role</th>
									</tr>
								</thead>
								<tbody
									style={{
										marginLeft: "-1x",
										textAlign: "left",
										marginTop: "8px",
									}}>
									{this.employeeList()}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default employee;
