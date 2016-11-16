import React, {Component} from 'react';
import './Button.css';

class Button extends Component {

    render() {
        var cellStyle = {
            backgroundColor: this.props.bgcolor, // These props let me reuse Button
            color: this.props.color,
            minWidth: "55px",
            minHeight: "45px"
        };
        return (
            <th colSpan={this.props.colSpan} style={cellStyle}>
                <div className="Button">
                    {this.props.digit}
                </div>
            </th>
        )
    }
}

export default Button;