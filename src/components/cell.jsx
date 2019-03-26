import React, {Component} from 'react' ;

class Cell extends Component {
state = {
  value : this.props.value
}

  render(){
    console.log(this.props);
    return (
      <button
        className="btn btn-outline-success cell"
        type="button">
        {this.state.value}
      </button>
    )
  }
}

export default Cell;
