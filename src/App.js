import React, {Component} from 'react';
import './App.css';
import Button from './Button';
import Screen from './Screen';
import * as Calc from './Calc';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value : 0,
			fontSize : 50
		}
	}

	opHandler(calc, e) {
		calc.bi
		var value = calc();

		var fontSize = 50;
		var length = value.toString().length;
		if (length > 7) {
			fontSize = 50 * Math.pow(0.92, length - 7);
		}

		this.setState({
			value : value,
			fontSize : fontSize
		})
	}

	digitHandler(calc, num, e) {
		calc.bind(this);
		var value = calc(num);

		var fontSize = this.state.fontSize;
		var length = value.toString().length;
		if (length > 7) {
			fontSize = 50 * Math.pow(0.9, length - 7);
		}

		this.setState({
			value : value,
			fontSize : fontSize
		})
	}

	render() {
		return (
			<div className="App">
				<table>
					<tbody>
						<tr height="75px">
							<Screen value={this.state.value} fontSize={this.state.fontSize} bgcolor="#969696" color="#ffffff"/>
						</tr>

						<tr>
							<Button text="AC" keybind="esc" id="clear" bgcolor="#e3e3e3" color="#000000" colSpan="1" handler={this.opHandler.bind(this, Calc.ac)}/>
							<Button text="+/-" keybind="" id="negate" bgcolor="#e3e3e3" color="#000000" colSpan="1" handler={this.opHandler.bind(this, Calc.plusMinus)}/>
							<Button text="%" keybind="%" id="percent" bgcolor="#e3e3e3" color="#000000" colSpan="1" handler={this.opHandler.bind(this, Calc.percent)}/>
							<Button text="÷" keybind="/" id="divide" bgcolor="#ff9509" color="#ffffff" colSpan="1" handler={this.opHandler.bind(this, Calc.divide)}/>
						</tr>

						<tr>
							<Button text="7" keybind="7" id="seven" bgcolor="#efefef" color="#000000" colSpan="1" handler={this.digitHandler.bind(this, Calc.digit, 7)}/>
							<Button text="8" keybind="8" id="eight" bgcolor="#efefef" color="#000000" colSpan="1" handler={this.digitHandler.bind(this, Calc.digit, 8)}/>
							<Button text="9" keybind="9" id="nine" bgcolor="#efefef" color="#000000" colSpan="1" handler={this.digitHandler.bind(this, Calc.digit, 9)}/>
							<Button text="×" keybind="*" id="multiply" bgcolor="#ff9509" color="#ffffff" colSpan="1" handler={this.opHandler.bind(this, Calc.multiply)}/>
						</tr>
						
						<tr>
							<Button text="4" keybind="4" id="four" bgcolor="#efefef" color="#000000" colSpan="1" handler={this.digitHandler.bind(this, Calc.digit, 4)}/>
							<Button text="5" keybind="5" id="five" bgcolor="#efefef" color="#000000" colSpan="1" handler={this.digitHandler.bind(this, Calc.digit, 5)}/>
							<Button text="6" keybind="6" id="six" bgcolor="#efefef" color="#000000" colSpan="1" handler={this.digitHandler.bind(this, Calc.digit, 6)}/>
							<Button text="–" keybind="-" id="subtract" bgcolor="#ff9509" color="#ffffff" colSpan="1" handler={this.opHandler.bind(this, Calc.subtract)}/>
						</tr>

						<tr>
							<Button text="1" keybind="1" id="one" bgcolor="#efefef" color="#000000" colSpan="1" handler={this.digitHandler.bind(this, Calc.digit, 1)}/>
							<Button text="2" keybind="2" id="two" bgcolor="#efefef" color="#000000" colSpan="1" handler={this.digitHandler.bind(this, Calc.digit, 2)}/>
							<Button text="3" keybind="3" id="three" bgcolor="#efefef" color="#000000" colSpan="1" handler={this.digitHandler.bind(this, Calc.digit, 3)}/>
							<Button text="+" keybind="+" id="add" bgcolor="#ff9509" color="#ffffff" colSpan="1" handler={this.opHandler.bind(this, Calc.add)}/>
						</tr>

						<tr>
							<Button text="0" keybind="0" id="zero" bgcolor="#efefef" color="#000000" colSpan="2" handler={this.digitHandler.bind(this, Calc.digit, 0)}/>
							<Button text="." keybind="." id="decimal" bgcolor="#efefef" color="#000000" colSpan="1" handler={this.opHandler.bind(this, Calc.decimal)}/>
							<Button text="=" keybind="return" id="equals" bgcolor="#ff9509" color="#ffffff" colSpan="1" handler={this.opHandler.bind(this, Calc.equals)}/>
						</tr>

					</tbody>
				</table>
			</div>
		);
	}

}

export default App;