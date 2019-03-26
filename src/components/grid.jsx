import React, {Component} from 'react';
import Cell from './cell';
import EmptyCell from './emptyCell';

class Grid extends Component {
state = {
  numbers : [
    4, 5, 8, 9, 3, 2, 1, 9, 5,
    0, 5, 0, 3, 0, 2, 2, 9, 0,
    3, 2, 1, 9, 5, 0, 3, 0, 2
  ]
}

createGrid = () => {
  let grid = []
  for (let i = 0; i < 9; i++) {
    let children = []
      for (let j = 0; j < 9; j++) {
          if(this.state.numbers[(i * 9) +j] === 0){
            children.push(<EmptyCell
              key={(i * 9) +j}
              value={0}
              />)
          } else {
            children.push(<Cell
              key={(i * 9) +j}
              value={this.state.numbers[(i * 9) +j]}
              />)
          }
      }
    grid.push(<div>{children}</div>)
  }
  return grid;
};

  render(){
    console.log(this.props);
    return (
      <div>
        <form>
            {this.createGrid()}
        </form>
      </div>
    )
  }
}

export default Grid;
