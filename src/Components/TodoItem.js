import React, { Component } from 'react';
import classNames from 'classnames' ;
import checkUrl from '../img/check.svg' ;
import checkDoneUrl from '../img/check-done.svg';
import PropTypes from 'prop-types'; // ES6


class TodoItem extends Component {

    render() {
        const {item, onClickkk } = this.props ;
        let url = checkUrl ;
        if(item.isComplete) {
            url = checkDoneUrl ;
        }


        return (    
            <div 
              className={ classNames( 'todoItem', {'todoComplete': item.isComplete} )  }>
            <img onClick={onClickkk} src={url} width={30} height={30} /> 
            <p> {item.title} </p>
            </div>
        );  
    }
} 

TodoItem.propTypes = {
    item: PropTypes.shape(
        {
            isComplete: PropTypes.bool,
            title: PropTypes.string

        }
    ),
    onClickkk: PropTypes.func

}


export default TodoItem ;