import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import logo from "../images/logo.png";
import user from "../images/user.png";
import logout from "../images/logout.png";
import "./Employee2.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import EmployeeView from "./EmployeeView";

function Employee2() {
	const [employees, setEmployees] = useState([]);
	const [filteredEmployee, setFilteredEmployee] = useState();
	const [popupOn, setPopupOn] = useState(false);
	const [viewEmploy, setViewEmploy] = useState();

	useEffect(() => {
		axios
			.get("http://localhost:3004/employee/")
			.then(response => {
				setEmployees(response.data);
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
		setViewEmploy(value);
		setPopupOn(true);
	};

	const closePopup = () => {
		setPopupOn(false);
		setViewEmploy();
	};

	const handleSearch = async e => {
		var match = await employees.filter(data => {
			return data.fname === e.target.value;
		});
		console.log(match);
		if (match.length !== 0) {
			setFilteredEmployee(match);
		} else {
			setFilteredEmployee();
		}
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
								<h2 className='emp-list-heading'>Employees</h2>
							</div>
							<div className='emp-list-search-btn'>
								<input
									type='search'
									className='emp-list-search'
									placeholder='search'
									onChange={handleSearch}
								/>
								<NavLink
									to='/employee-manager/new-employee'
									activeClassName='active-nav'
									className='row'>
									<button className='emp-list-btn'>add new</button>
								</NavLink>
							</div>
							<br />
							<div className='emp-list-table2'>
								<div>
									<h5>Id</h5>
									<h5>First Name</h5>
									<h5>Email</h5>
									<h5>Role</h5>
								</div>
								{filteredEmployee ? (
									<div>
										{filteredEmployee.map((employee, index) => {
											return (
												<button
													key={index}
													value={employee.id}
													onClick={openPopup}>
													<div clickable={false}>{employee.id}</div>
													<div>{employee.fname}</div>
													<div>{employee.email}</div>
													<div>{employee.role}</div>
												</button>
											);
										})}
									</div>
								) : (
									<div>
										{employees.map((employee, index) => {
											return (
												<button
													key={index}
													value={employee.id}
													onClick={openPopup}>
													<div clickable={false}>{employee.id}</div>
													<div>{employee.fname}</div>
													<div>{employee.email}</div>
													<div>{employee.role}</div>
												</button>
											);
										})}
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
			{popupOn && <EmployeeView closePopup={closePopup} id={viewEmploy} />}
		</>
	);
}

export default Employee2;
