import React from "react";
import logo from "../images/logo.png";
import user from "../images/user.png";
import Sidebar from "./Sidebar";
import logout from "../images/logout.png";
import ReturnBtn from "../images/returnicon.png";

function salary() {
	return (
		<div>
			<div className='MainContainer'>
				<div className='containermini'>
					<img src={logo} className='logo' />

					<img src={user} className='user' />

					<Sidebar />

					<img src={logout} className='logout' />
				</div>

				<div className='emp-reg-title'>
					<button className='rn-btn'>
						<img src={ReturnBtn} className='ReturnBtn' />
					</button>
					<h2 className='emp-reg-heading'>New Employee</h2>
				</div>

				<div className='registeration-body'>
					<div className='registeration-card'>
						<form className='employee-reg-form'>
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
											className='employee-reg-text'
											required
										/>
									</td>
									&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
									<td>
										<input
											type='text'
											name='lname'
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
											className='employee-reg-text'
											required
										/>
									</td>
									&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
									<td>
										<input
											type='text'
											name='phone'
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
										<div className='employee-reg-label'>Re-enter Password</div>
									</td>
								</tr>
								<tr>
									<td>
										<input
											type='password'
											name='password'
											className='employee-reg-text'
											required
										/>
									</td>
									&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
									<td>
										<input
											type='password'
											name='password2'
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
									<select id='role' className='employee-reg-select'>
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

export default salary;
