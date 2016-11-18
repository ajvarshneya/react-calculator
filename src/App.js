import React, {Component} from 'react';
import './App.css';
import Button from './Button';
import Screen from './Screen';
import * as Calc from './Calc';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value : 0
		}
	}

	opHandler(calc, e) {
		var value = calc();
		this.setState({
			value : value
		});
	}

	digitHandler(calc, num, e) {
		var value = calc(num);
		this.setState({
			value : value
		})
	}

	render() {
		return (
			<div className="App">
				<table>
					<tbody>
						<tr height="75px">
							<Screen value={this.state.value} bgcolor="#969696" color="#ffffff"/>
						</tr>

						<tr>
							<Button text="AC" bgcolor="#e3e3e3" color="#000000" colSpan="1" handler={this.opHandler.bind(this, Calc.ac)}/>
							<Button text="+/-" bgcolor="#e3e3e3" color="#000000" colSpan="1" handler={this.opHandler.bind(this, Calc.plusMinus)}/>
							<Button text="%" bgcolor="#e3e3e3" color="#000000" colSpan="1" handler={this.opHandler.bind(this, Calc.percent)}/>
							<Button text="÷" bgcolor="#ff9509" color="#ffffff" colSpan="1" handler={this.opHandler.bind(this, Calc.divide)}/>
						</tr>

						<tr>
							<Button text="7" bgcolor="#efefef" color="#000000" colSpan="1" handler={this.digitHandler.bind(this, Calc.digit, 7)}/>
							<Button text="8" bgcolor="#efefef" color="#000000" colSpan="1" handler={this.digitHandler.bind(this, Calc.digit, 8)}/>
							<Button text="9" bgcolor="#efefef" color="#000000" colSpan="1" handler={this.digitHandler.bind(this, Calc.digit, 9)}/>
							<Button text="×" bgcolor="#ff9509" color="#ffffff" colSpan="1" handler={this.opHandler.bind(this, Calc.multiply)}/>
						</tr>
						
						<tr>
							<Button text="4" bgcolor="#efefef" color="#000000" colSpan="1" handler={this.digitHandler.bind(this, Calc.digit, 4)}/>
							<Button text="5" bgcolor="#efefef" color="#000000" colSpan="1" handler={this.digitHandler.bind(this, Calc.digit, 5)}/>
							<Button text="6" bgcolor="#efefef" color="#000000" colSpan="1" handler={this.digitHandler.bind(this, Calc.digit, 6)}/>
							<Button text="–" bgcolor="#ff9509" color="#ffffff" colSpan="1" handler={this.opHandler.bind(this, Calc.subtract)}/>
						</tr>

						<tr>
							<Button text="1" bgcolor="#efefef" color="#000000" colSpan="1" handler={this.digitHandler.bind(this, Calc.digit, 1)}/>
							<Button text="2" bgcolor="#efefef" color="#000000" colSpan="1" handler={this.digitHandler.bind(this, Calc.digit, 2)}/>
							<Button text="3" bgcolor="#efefef" color="#000000" colSpan="1" handler={this.digitHandler.bind(this, Calc.digit, 3)}/>
							<Button text="+" bgcolor="#ff9509" color="#ffffff" colSpan="1" handler={this.opHandler.bind(this, Calc.add)}/>
						</tr>

						<tr>
							<Button text="0" bgcolor="#efefef" color="#000000" colSpan="2" handler={this.digitHandler.bind(this, Calc.digit, 0)}/>
							<Button text="." bgcolor="#efefef" color="#000000" colSpan="1" handler={this.opHandler.bind(this, Calc.decimal)}/>
							<Button text="=" bgcolor="#ff9509" color="#ffffff" colSpan="1" handler={this.opHandler.bind(this, Calc.result)}/>
						</tr>

					</tbody>
				</table>
			</div>
		);
	}

}

export default App;