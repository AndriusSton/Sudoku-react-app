import React, {Component} from 'react' ;

class Grid extends Component {
state = {
  dummyGrid : [4, 5, 8, 9, 3, 2, 1, 9, 5]
}

createTable = () => {
  let table = []
  for (let i = 0; i < 9; i++) {
    let children = []
      for (let j = 0; j < 9; j++) {
        children.push(<td>{this.state.dummyGrid[(i * 9) +j]}</td>)
      }
    table.push(<tr>{children}</tr>)
  }
  return table;
};

  render(){
    return (
      <div>
        <table>
          <tbody>
            {this.createTable()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Grid;
