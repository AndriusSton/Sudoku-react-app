import React, {Component} from 'react';
import Row from './row';

class Grid extends Component {

constructor(props){
  super(props);
  this.state = {
    rows : props.grid
  }
}

  render(){
    return (
      <form>
        {this.state.rows.map((row) =>
          <Row
          row={row}
          id={row.id}
          key={row.id}
          cells={row.value} />
        )}
      </form>
    );
  }
}

export default Grid;
