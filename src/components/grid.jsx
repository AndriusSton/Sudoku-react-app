import React, {Component} from 'react' ;

class Grid extends Component {
state = {
  dummyGrid : [
    4, 5, 8, 9, 3, 2, 1, 9, 5,
    0, 5, 0, 3, 0, 2, 2, 9, 0,
    3, 2, 1, 9, 5, 0, 3, 0, 2
  ]
}

createGrid = () => {
  let table = []
  for (let i = 0; i < 9; i++) {
    let children = []
      for (let j = 0; j < 9; j++) {
        children.push(
          this.state.dummyGrid[(i * 9) +j] !== 0 ?
          (<button
            class="btn btn-outline-success cell"
            type="button">{this.state.dummyGrid[(i * 9) +j]}
          </button>) :
          (<button
            class="btn btn-outline-success cell"
            type="button"
            onClick><span>&nbsp;</span>
          </button>)
        )
      }
    table.push(<div>{children}</div>)
  }
  return table;
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
