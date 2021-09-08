import "./App.css";
import Sidebar from "./Components/Sidebar";
import MainContainer from "./Components/MainContainer";
import home from "./Components/home";
import employee from "./Components/employee";
import leaves from "./Components/leaves";
import salary from "./Components/salary";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className='App'>
				<Switch>
					<Route path='/home' component={MainContainer} />
				</Switch>
				<Switch>
					<Route path='/employee' component={employee} />
				</Switch>
				<Switch>
					<Route path='/leaves' component={leaves} />
				</Switch>
				<Switch>
					<Route path='/salary' component={salary} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
