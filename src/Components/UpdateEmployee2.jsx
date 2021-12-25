import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import user from "../images/user.png";
import Sidebar from "./Sidebar";
import logout from "../images/logout.png";
import ReturnBtn from "../images/returnicon.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UpdateEmployee2() {
	const params = useParams();

	const [fname, setFname] = useState();
	const [lname, setLname] = useState();
	const [email, setEmail] = useState();
	const [phone, setPhone] = useState();
	const [address, setAddress] = useState();
	const [role, setRole] = useState();

	useEffect(() => {
		axios
			.get("http://localhost:3004/employee/" + params.id)
			.then(response => {
				setFname(response.data.fname);
				setLname(response.data.lname);
				setEmail(response.data.email);
				setPhone(response.data.phone);
				setAddress(response.data.address);
				setRole(response.data.role);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	const onSubmit = e => {
		e.preventDefault();

		const newEmployee = {
			role: role,
			fname: fname,
			lname: lname,
			email: email,
			phone: phone,
			address: address,
		};

		axios
			.patch("http://localhost:3004/employee/" + params.id, newEmployee)
			.then(res => toast.success("Employee has been updated successfully!"))
			.catch(res => toast.error("Error registering"));
	};

	return (
		<div>
			<ToastContainer
				position='top-right'
				autoClose={4914}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<div className='MainContainer'>
				<div className='containermini'>
					<img src={logo} className='logo' />

					<img src={user} className='user' />

					<Sidebar />

					<img src={logout} className='logout' />
				</div>

				<div className='emp-reg-title'>
					<NavLink
						to='/employee-manager/home'
						activeClassName='active-nav'
						className='row'>
						<button className='rn-btn'>
							<img src={ReturnBtn} className='ReturnBtn' />
						</button>
					</NavLink>

					<h2 className='emp-reg-heading'>Update Employee</h2>
				</div>

				<div className='registeration-body'>
					<div className='registeration-card'>
						<form className='employee-reg-form' onSubmit={onSubmit}>
							<table className='signUptable'>
								<tr>
									<td>
										<label for='fname' />
										<div className='employee-reg-label'>First Name</div>
									</td>
									&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
									&nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
									<td>
										<label for='lname' />
										<div className='employee-reg-label'>Last Name</div>
									</td>
								</tr>
								<tr>
									<td>
										<input
											type='text'
											name='fname'
											value={fname}
											onChange={e => {
												setFname(e.target.value);
											}}
											className='employee-reg-text'
											required
										/>
									</td>
									&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
									<td>
										<input
											type='text'
											name='lname'
											value={lname}
											onChange={e => setLname(e.target.value)}
											className='employee-reg-text'
											required
										/>
									</td>
								</tr>

								<tr>
									<td>
										<label for='email' />
										<div className='employee-reg-label'>Email</div>
									</td>
									&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
									<td>
										<label for='phone' />
										<div className='employee-reg-label'>Phone</div>
									</td>
								</tr>
								<tr>
									<td>
										<input
											type='email'
											name='email'
											value={email}
											onChange={e => setEmail(e.target.value)}
											className='employee-reg-text'
											required
										/>
									</td>
									&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
									<td>
										<input
											type='text'
											name='phone'
											value={phone}
											onChange={e => setPhone(e.target.value)}
											className='employee-reg-text'
											required
										/>
									</td>
								</tr>

								{/*<tr>
									<td>
										<label for='password' />
										<div className='employee-reg-label'>Password</div>
									</td>
									&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
									<td>
										<label for='password2' />
										<div className='employee-reg-label'>Re-enter Password</div>
									</td>
								</tr>
								<tr>
									<td>
										<input
											type='password'
											name='password'
											value={password}
											onChange={e => {
												setPassword(e.target.value);
											}}
											className='employee-reg-text'
											required
										/>
									</td>
									&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
									<td>
										<input
											type='password'
											name='password2'
											value={password2}
											onChange={onChangePassword2}
											className='employee-reg-text'
											required
										/>
									</td>
								</tr>*/}

								<tr>
									<label for='role' />
									<div className='employee-reg-label'>Role</div>{" "}
								</tr>
								<tr>
									<select
										id='role'
										className='employee-reg-select'
										value={role}
										onChange={e => setRole(e.target.value)}>
										<option value='Pharmacist'>Pharmacist</option>
										<option value='Stock Manager'>Stock Manager</option>
										<option value='Delivery Manager'>Delivery Manager</option>
										<option value='Delivery Person'>Delivery Person</option>
										<option value='Account Manager'>Account Manager</option>
										<option value='Employee Manager'>Employee Manager</option>
									</select>
								</tr>
								<tr>
									<label for='Address' />
									<div className='employee-reg-label'>Address</div>
								</tr>
							</table>
							<textarea
								rows='4'
								cols='37'
								colsstyle={{
									width: "auto",
									height: "auto",
								}}
								value={address}
								onChange={e => setAddress(e.target.value)}
								maxLength='500'
								required
							/>
							<br />
							<button type='submit' className='btn-reg-emp'>
								Update Employee
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UpdateEmployee2;
