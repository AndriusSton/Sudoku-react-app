import React from 'react' ;
import Cell from './cell' ;

class EmptyCell extends Cell {

constructor(props){
  super(props);
}

handleIncrement = ()  =>{
  if(this.state.value === 9){
    this.state.value = 0;
  }
  this.setState({ value : this.state.value+1 })
}

  render(){
    return (
      <button
        className="btn btn-outline-success cell"
        type="button"
        onClick={this.handleIncrement}
        value={this.state.value}>
        {(this.state.value === 0)? '' : (this.state.value)}
      </button>
    )
  }
}

export default EmptyCell;
