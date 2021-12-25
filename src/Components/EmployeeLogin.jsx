import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function EmployeeLogin() {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const history = useHistory();

	const handleRoute = () => {
		history.push("/about");
	};

	const handleLogin = () => {
		let employee = {
			email: email,
			password: password,
		};
		axios
			.post("http://localhost:3004/employee/login", employee)
			.then(res => {
				console.log(res.data);
				if (res.data.role === "Pharmacist") {
					toast.success("loged successfully");
					/*history.push("/employee-manager/home");*/
					// window.location.href = "https://wikipedia.com";
					window.location.href = "http://localhost:3001/pharmacist/home";
				} else if (res.data.role === "Delivery Manager") {
					window.location.href = "http://localhost:3002/";
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
				name='email'
			/>
			<label>password</label>
			<input
				value={password}
				onChange={e => {
					setPassword(e.target.value);
				}}
				type='password'
				name='password'
			/>
			<button type='submit' onClick={handleLogin}>
				submit
			</button>
		</div>
	);
}
