import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import logo from "../images/logo.png";
import user from "../images/user.png";
import Sidebar from "./Sidebar";
import logout from "../images/logout.png";
import ReturnBtn from "../images/returnicon.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class AddEmployee extends Component {
	constructor(props) {
		super(props);

		this.onChangePassword = this.onChangePassword.bind(this);
		this.onChangeRole = this.onChangeRole.bind(this);
		this.onChangeFname = this.onChangeFname.bind(this);
		this.onChangeLname = this.onChangeLname.bind(this);
		this.onChangeEmail = this.onChangeEmail.bind(this);
		this.onChangePhone = this.onChangePhone.bind(this);
		this.onChangeAddress = this.onChangeAddress.bind(this);
		this.onChangePassword2 = this.onChangePassword2.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			password: "",
			role: "",
			fname: "",
			lname: "",
			email: "",
			phone: "",
			address: "",
			password2: "",
			submit: false,
		};
	}

	onChangePassword(e) {
		this.setState({ password: e.target.value });
	}

	onChangeRole(e) {
		this.setState({ role: e.target.value });
	}

	onChangeFname(e) {
		this.setState({ fname: e.target.value });
	}

	onChangeLname(e) {
		this.setState({ lname: e.target.value });
	}

	onChangeEmail(e) {
		this.setState({ email: e.target.value });
	}

	onChangePhone(e) {
		this.setState({ phone: e.target.value });
	}

	onChangeAddress(e) {
		this.setState({ address: e.target.value });
	}

	onChangePassword2(e) {
		this.setState({ password2: e.target.value });
	}

	onSubmit(e) {
		e.preventDefault();

		console.log(`form submitted`);
		console.log(`password: ${this.state.password}`);
		console.log(`password2: ${this.state.password2}`);
		console.log(`role: ${this.state.role}`);
		console.log(`fname: ${this.state.fname}`);
		console.log(`lname: ${this.state.lname}`);
		console.log(`email: ${this.state.email}`);
		console.log(`phone: ${this.state.phone}`);
		console.log(`address: ${this.state.address}`);

		if (this.state.password !== this.state.password2) {
			toast.error("Password mismatch");
		} else if (this.state.role === "") {
			toast.error("Please select a role");
		} else {
			const newEmployee = {
				password: this.state.password,
				role: this.state.role,
				fname: this.state.fname,
				lname: this.state.lname,
				email: this.state.email,
				phone: this.state.phone,
				address: this.state.address,
			};

			axios
				.post("http://localhost:3004/employee/sign-up", newEmployee)
				.then(res =>
					toast.success("New employee has been registered successfully!"),
				)
				.catch(res => toast.error("Error registering"));

			this.setState({
				password: "",
				role: "",
				fname: "",
				lname: "",
				email: "",
				phone: "",
				address: "",
				password2: "",
				submit: false,
			});
		}
	}

	render() {
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
							to='/employee-manager/employee'
							activeClassName='active-nav'
							className='row'>
							<button className='rn-btn'>
								<img src={ReturnBtn} className='ReturnBtn' />
							</button>
						</NavLink>

						<h2 className='emp-reg-heading'>New Employee</h2>
					</div>

					<div className='registeration-body'>
						<div className='registeration-card'>
							<form className='employee-reg-form' onSubmit={this.onSubmit}>
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
												value={this.state.fname}
												onChange={this.onChangeFname}
												className='employee-reg-text'
												required
											/>
										</td>
										&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
										<td>
											<input
												type='text'
												name='lname'
												value={this.state.lname}
												onChange={this.onChangeLname}
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
												value={this.state.email}
												onChange={this.onChangeEmail}
												className='employee-reg-text'
												required
											/>
										</td>
										&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
										<td>
											<input
												type='tel'
												name='phone'
												value={this.state.phone}
												onChange={this.onChangePhone}
												className='employee-reg-text'
												required
											/>
										</td>
									</tr>

									<tr>
										<td>
											<label for='password' />
											<div className='employee-reg-label'>Password</div>
										</td>
										&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
										<td>
											<label for='password2' />
											<div className='employee-reg-label'>
												Re-enter Password
											</div>
										</td>
									</tr>
									<tr>
										<td>
											<input
												type='password'
												name='password'
												value={this.state.password}
												onChange={this.onChangePassword}
												className='employee-reg-text'
												required
											/>
										</td>
										&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
										<td>
											<input
												type='password'
												name='password2'
												value={this.state.password2}
												onChange={this.onChangePassword2}
												className='employee-reg-text'
												required
											/>
										</td>
									</tr>

									<tr>
										<label for='role' />
										<div className='employee-reg-label'>Role</div>{" "}
									</tr>
									<tr>
										<select
											id='role'
											className='employee-reg-select'
											value={this.state.role}
											onChange={this.onChangeRole}>
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
									value={this.state.address}
									onChange={this.onChangeAddress}
									maxLength='500'
									required
								/>
								<br />
								<button type='submit' className='btn-reg-emp'>
									Add Employee
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AddEmployee;
