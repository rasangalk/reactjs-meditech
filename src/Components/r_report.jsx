import React, { Component } from "react";
import axios from "axios";
import ReactToPrint from "react-to-print";

const theadStyle = {
	fontFamily: "poppins",
	fontWeight: "bold",
	fontStyle: "normal",
};

const thStyle = {
	paddingLeft: "50px",
	paddingTop: "30px",
	color: "#125465",
};

const thStyleReason = {
	paddingLeft: "5px",
	paddingTop: "30px",
	color: "#125465",
};

const heading = {
	left: "auto",
	paddingTop: "40px",
	paddingLeft: "72px",
	fontFamily: "Poppins",
	fontStyle: "normal",
	fontWeight: "500",
	fontSize: "37px",
	textAlign: "left",
	color: "#125465",
};

const trStyle = {
	fontFamily: "poppins",
	fontWeight: "normal",
	fontStyle: "normal",
};

const tdStyle = {
	paddingLeft: "50px",
	paddingTop: "10px",
};

const tdStylereason = {
	paddingLeft: "69px",
	paddingTop: "10px",
};

const button = {
	left: "100px",
	width: "160px",
	padding: "8px",
	fontFamily: "Poppins",
	fontStyle: "normal",
	fontWeight: "500",
	fontSize: "17px",
	textAlign: "center",
	color: "white",
	backgroundColor: "#054fc7",
	border: "none",
	borderRadius: "12px",
};

const body = {
	backgroundColor: "white",
	width: "100vw",
	height: "100vh",
	paddingLeft: "40px",
	paddingTop: "40px",
};

const Leave = props => {
	return (
		<tr key={props.lv.id} style={trStyle}>
			<td style={tdStyle}>{props.lv.employeeId}</td>
			<td style={tdStyle}> {props.lv.status}</td>
			<td style={tdStyle}> {props.lv.appliedDate}</td>
			<td style={tdStyle}> {props.lv.createdAt}</td>
			<td style={tdStylereason}> {props.lv.reason}</td>
		</tr>
	);
};

class MyReport extends React.Component {
	constructor(props) {
		super(props);
		this.state = { leave: [] };
	}

	componentDidMount() {
		axios
			.get("http://localhost:3004/leave/leaves")
			.then(response => {
				this.setState({ leave: response.data });
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	leaveList() {
		return this.state.leave.map(function (currentLeave, i) {
			return <Leave lv={currentLeave} key={i} />;
		});
	}
	render() {
		return (
			<div>
				<p style={heading}>Employee Leave Report - Meditech</p>
				<table>
					<thead style={theadStyle}>
						<th style={thStyle}>Leave ID</th>
						<th style={thStyle}>Employee ID</th>
						<th style={thStyle}>Applied Date</th>
						<th style={thStyle}>Requested Date</th>
						<th style={thStyleReason}>Reason</th>
					</thead>
					<tbody>{this.leaveList()}</tbody>
				</table>
			</div>
		);
	}
}

class r_report extends React.Component {
	render() {
		return (
			<div style={body}>
				<ReactToPrint
					trigger={() => <button style={button}>Print</button>}
					content={() => this.componentRef}
				/>
				<MyReport ref={el => (this.componentRef = el)} />
			</div>
		);
	}
}

export default r_report;
