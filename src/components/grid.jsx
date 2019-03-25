import React, {Component} from 'react' ;

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
        children.push(
          this.state.numbers[(i * 9) +j] !== 0 ?
          (<button
            class="btn btn-outline-success cell"
            type="button"
            key={(i * 9) +j}
            >{this.state.numbers[(i * 9) +j]}
          </button>) :
          (<button
            class="btn btn-outline-success cell empty"
            type="button"
            key={(i * 9) +j}
            ><span>&nbsp;</span>
          </button>)
        )
      }
    grid.push(<div>{children}</div>)
  }
  return grid;
};

  render(){
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
