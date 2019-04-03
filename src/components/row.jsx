import React, {Component} from 'react' ;
import Cell from './cell';

class Row extends Component {

state = {
  cells : this.props.row.value
}

handleIncrement = cell => {
  const cells = [...this.state.cells];
  const index = cells.indexOf(cell);
  cells[index]={...cell};
  if(cells[index].value === 9){
    cells[index].value = 1;
  } else {
    cells[index].value++;
  }
  this.setState({cells});
}

render(){
  console.log('CELLS: ', this.state.cells)
 return(
   <div>
    {this.state.cells.map((cell) =>
       <Cell
       cell={cell}
       id={cell.id}
       key={cell.id}
       value={cell.value}
       onIncrement={this.handleIncrement}
       isEmpty={cell.isEmpty}/>
    )}
   </div>
  )
}
}

export default Row;
