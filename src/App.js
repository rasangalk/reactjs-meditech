import "./App.css";
import Sidebar from "./Components/Sidebar";
import MainContainer from "./Components/MainContainer";
import home from "./Components/home";
import employee from "./Components/Employee2";
import leaves from "./Components/leaves";
import salary from "./Components/salary";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddEmployee from "./Components/AddEmployee";
import EmployeeView from "./Components/EmployeeView";
import UpdateEmployee from "./Components/UpdateEmployee2";
import EmployeeLogin from "./Components/EmployeeLogin";

function App() {
	return (
		<Router>
			<div className='App'>
				<Switch>
					<Route path='/employee-manager/home' component={MainContainer} />
				</Switch>
				<Switch>
					<Route path='/employee-manager/employee' component={employee} />
				</Switch>
				<Switch>
					<Route path='/employee-manager/leaves' component={leaves} />
				</Switch>
				<Switch>
					<Route path='/employee-manager/salary' component={salary} />
				</Switch>
				<Switch>
					<Route
						path='/employee-manager/new-employee'
						component={AddEmployee}
					/>
				</Switch>
				<Switch>
					<Route path='/employee-view' component={EmployeeView} />
				</Switch>
				<Switch>
					<Route path='/employee-update:id' component={UpdateEmployee} />
				</Switch>
				<Switch>
					<Route path='/employee-login' component={EmployeeLogin} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
