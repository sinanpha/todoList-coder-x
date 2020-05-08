import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './Components/TodoItem.js';
import './Components/TodoItem.css';
import TrafficLight from './Components/TrafficLight.js';
import tick from './img/tick.svg' ;
import { Button } from 'reactstrap';


// //  bai 1

class App extends Component {
  constructor() {
    super();
    this.state ={
      newItem : '' ,
      todoItem: [
        { title: 'đi chợ', isComplete: true },
        { title: 'mua sắm', isComplete: false },
        { title: 'đá bóng', isComplete: false }
      ]
    } 
    this.onkeyUp = this.onkeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
  }
   
  clickItem(item) {
    return () => {
    
      const { todoItem } = this.state;
      const index = todoItem.indexOf(item);
      const isCom = item.isComplete;
      this.setState(
        {
          todoItem: [
          ...todoItem.slice(0, index),
          { ...item, isComplete: !isCom },
          ...todoItem.slice(index + 1)
          ]
        }

      )
 
    }
            
  }

  onkeyUp(event) {
    if (event.keyCode ===13 ) {
      let text = event.target.value;
      if (!text) {
        return
      };
      text = text.trim();
      if (!text) { return };
      this.setState(
        {
          todoItem: [
            { title: text, isComplete: false },
            ...this.state.todoItem
          ] ,
          newItem : ''
    
        }
      );

    }
    
  }

  onChange(event) {
    
    this.setState(
      {
        newItem : event.target.value
      }
    )
  }

  render() {
    
    return (
     
      <div className="App">
        <div>
          <img src={tick} width={30} height={30}  />
          <input placeholder="add new item" type="text" 
                onKeyUp={this.onkeyUp} 
                value={this.state.newItem}
                onChange={this.onChange}
          /> 
        </div>

        { this.state.todoItem.length >0 &&
          this.state.todoItem.map(
            (item, index) => <TodoItem item={item} key={index} onClickkk={this.clickItem(item)} />
          ) 
        }

        { this.state.todoItem.length === 0 &&
          'Nothing'
        }
        <Button color="primary">primary</Button>
        <Button color="secondary">secondary</Button>
        <Button color="success">success</Button>
        <Button color="info">info</Button>
        <Button color="warning">warning</Button>
        <Button color="danger">danger</Button>
        <Button color="link">link</Button>
      </div>       
      
    )

  };

}

// class App extends Component {
//   render() {
//     return (
//       <TrafficLight />
//     );
//   }
// }

export default App;
