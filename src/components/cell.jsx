import React, {Component} from 'react';

class Cell extends Component {

  render() {
    const {value, id, onIncrement, isEmpty} = this.props;
    let buttonClass = (isEmpty) ? 'btn btn-outline-success cell empty' : 'btn btn-outline-success cell';

    // add thicker vertical lines
    buttonClass += (id%3 === 0) ? ' border-left' : '';
    buttonClass += (id%9 === 8) ? ' border-right' : '';

    //add thicker horizontal lines
    buttonClass += (id < 9 ) ? ' border-top' : '';
    buttonClass += (id%27 >= 18 ) ? ' border-bottom' : '';
    return (
      <button
      className={ buttonClass }
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
