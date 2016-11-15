import React, {Component} from 'react';
import './App.css';

function Button(props) {
	var cellStyle = {
		backgroundColor: props.bgcolor, // These props let me reuse Button
		color: props.color,
		minWidth: "55px",
		minHeight: "45px"
	};

	return (
		<th colSpan={props.colSpan} style={cellStyle}>
		    <div className="Button">
		        {props.digit}
		    </div>
	    </th>
	);
}

function Screen(props) {
	var cellStyle = {
		backgroundColor: props.bgcolor,
		color: props.color,
		minWidth: "55px",
		minHeight: "45px",
		position: "relative"
	};

	return (
		<th colSpan="4" style={cellStyle}>
		    <div className="Screen">
		    	{props.value}
		    </div>
		</th>
	);
}

class App extends Component {
	render() {
		return (
			<div className="App" >
				<div className="Calculator">
					<table>
						<tbody>
							<tr height="75px">
								<Screen value="0" bgcolor="#969696" color="#ffffff"/>
							</tr>

							<tr>
								<Button digit="AC" bgcolor="#e3e3e3" color="#000000" colSpan="1"/>
								<Button digit="+/-" bgcolor="#e3e3e3" color="#000000" colSpan="1"/>
								<Button digit="%" bgcolor="#e3e3e3" color="#000000" colSpan="1"/>
								<Button digit="÷" bgcolor="#ff9509" color="#ffffff" colSpan="1"/>
							</tr>

							<tr>
								<Button digit="7" bgcolor="#efefef" color="#000000" colSpan="1"/>
								<Button digit="8" bgcolor="#efefef" color="#000000" colSpan="1"/>
								<Button digit="9" bgcolor="#efefef" color="#000000" colSpan="1"/>
								<Button digit="×" bgcolor="#ff9509" color="#ffffff" colSpan="1"/>
							</tr>
							
							<tr>
								<Button digit="4" bgcolor="#efefef" color="#000000" colSpan="1"/>
								<Button digit="5" bgcolor="#efefef" color="#000000" colSpan="1"/>
								<Button digit="6" bgcolor="#efefef" color="#000000" colSpan="1"/>
								<Button digit="–" bgcolor="#ff9509" color="#ffffff" colSpan="1"/>
							</tr>

							<tr>
								<Button digit="1" bgcolor="#efefef" color="#000000" colSpan="1"/>
								<Button digit="2" bgcolor="#efefef" color="#000000" colSpan="1"/>
								<Button digit="3" bgcolor="#efefef" color="#000000" colSpan="1"/>
								<Button digit="+" bgcolor="#ff9509" color="#ffffff" colSpan="1"/>
							</tr>

							<tr>
								<Button digit="0" bgcolor="#efefef" color="#000000" colSpan="2"/>
								<Button digit="." bgcolor="#efefef" color="#000000" colSpan="1"/>
								<Button digit="=" bgcolor="#ff9509" color="#ffffff" colSpan="1"/>
							</tr>

						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default App;