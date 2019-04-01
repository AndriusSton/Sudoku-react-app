import React from 'react' ;
import Cell from './cell' ;

class EmptyCell extends Cell {

  render(){
    const {value, id, onIncrement} = this.props;
    return (

      <button
        className="btn btn-outline-success cell empty"
        type="button"
        onClick={() => onIncrement(this.props.id)}
        value={value}>
        {(value === 0)? '' : (value)}
      </button>
    )
  }
}

export default EmptyCell;
