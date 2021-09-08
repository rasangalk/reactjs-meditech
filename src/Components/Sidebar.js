import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

function Sidebar() {
	return (
		<div className='Sidebar'>
			<ul className='SidebarList'>
				<NavLink
					style={{ textDecoration: "none" }}
					to='/home'
					activeClassName='active-nav'
					className='row'>
					Home
				</NavLink>
				<NavLink
					style={{ textDecoration: "none" }}
					to='/employee'
					activeClassName='active-nav'
					className='row'>
					Employee
				</NavLink>
				<NavLink
					style={{ textDecoration: "none" }}
					to='/leaves'
					activeClassName='active-nav'
					className='row'>
					Leaves
				</NavLink>
				<NavLink
					style={{ textDecoration: "none" }}
					to='/salary'
					activeClassName='active-nav'
					className='row'>
					Salary
				</NavLink>
			</ul>
		</div>
	);
}

export default Sidebar;
