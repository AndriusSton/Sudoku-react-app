import React, {Component} from 'react';

class Cell extends Component {

  render() {
    const {value, id, onIncrement, isEmpty} = this.props;
    return (
      <button
      className={(isEmpty) ? 'btn btn-outline-success cell empty' : 'btn btn-outline-success cell' }
      type="button"
      key={id}
      onClick={() => ((isEmpty) ? onIncrement(this.props.cell) : false)}
      value={value}>
      {(value === 0) ? '' : (value)}
      </button>
    )
  }
}

export default Cell;
