import React, {Component} from 'react';
import Row from './row';

class Grid extends Component {

state = {
  rows : this.props.rows
};

  render(){
    return (
      <form>
        {this.state.rows.map((row) =>
          <Row
          id={row.id}
          key={row.id}
          cells={row.value} />
        )}
      </form>
    );
  }
}

export default Grid;
