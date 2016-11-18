import React, {Component} from 'react';
import './Screen.css';

class Screen extends Component {
    render() {
        var cellStyle = {
            backgroundColor: this.props.bgcolor,
            color: this.props.color,
            minWidth: "55px",
            minHeight: "45px",
            position: "relative"
        };
        return (
            <th colSpan="4" style={cellStyle}>
                <div className="Screen">
                    {this.props.value}
                </div>
            </th>
        );
    }
}

export default Screen;