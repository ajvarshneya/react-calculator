import React, {Component} from 'react';
import $ from 'jquery';
import Mousetrap from 'mousetrap';
import './Button.css';

class Button extends Component {

    // Triggered by keybinds
    triggerClick() {
        $('#' + this.props.id).click();
    }

    componentWillMount() {
        // Call this component's click handler on button press
        Mousetrap.bind([this.props.keybind], this.triggerClick.bind(this));
    }

    componentWillUnmount() {
        Mousetrap.unbind([this.props.keybind], this.triggerClick.bind(this));
    }

    render() {
        var cellStyle = {
            backgroundColor: this.props.bgcolor, // These props let me reuse Button
            color: this.props.color,
            minWidth: '55px',
            minHeight: '45px',
        };
        
        return (
            <th className='clickable' colSpan={this.props.colSpan} style={cellStyle}>
                <div id={this.props.id} className='Button' onClick={this.props.handler}>
                    {this.props.text}
                </div>
            </th>
        )
    }
}

export default Button;