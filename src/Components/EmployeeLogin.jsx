import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";

export default function EmployeeLogin() {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const history = useHistory();

	const handleLogin = () => {
		let employee = {
			email: email,
			password: password,
		};
		axios
			.post("http://localhost:3004/employee/login", employee)
			.then(res => {
				toast.success("loged successfully");
				if (res.data.role === "pharmacist") {
					history.push("/employee-manager/home");
				} else {
					console.log(res.data);
				}
			})
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
			<label>email</label>
			<input
				value={email}
				onChange={e => {
					setEmail(e.target.value);
				}}
				type='text'
			/>
			<label>password</label>
			<input
				value={password}
				onChange={e => {
					setPassword(e.target.value);
				}}
				type='password'
			/>
			<button type='submit' onClick={handleLogin}>
				submit
			</button>
		</div>
	);
}
