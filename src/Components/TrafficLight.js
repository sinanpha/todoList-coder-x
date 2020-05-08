import React, { Component } from 'react';
import './TrafficLight.css';
import classNames from 'classnames';

var RED = 0;
var ORANGE = 1;
var GREEN = 2 ;

class TrafficLight extends Component {
    constructor() {
        super();
        this.state = {
            color : RED };
        setInterval(() => {
            this.setState( 
                {
                color : this.getColor(this.state.color) 
                }
            );

        }, 1000);

     
    }

    getColor(color) {
        switch (color) {
            case RED:
                return ORANGE;

            case ORANGE:
                return GREEN;

            default:
                return RED;

        }
    } 

    render() {
        const { color } = this.state ;
        return (
            <div className="traffic" >
                <div className={classNames('poin', 'red', { active: color ===RED} )} />
                <div className={classNames('poin', 'orange', { active: color === ORANGE })} />
                <div className={classNames('poin', 'green', { active: color === GREEN })} />

            </div>
        );
    }
}

export default TrafficLight ;