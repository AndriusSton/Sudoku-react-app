import React, {Component} from 'react' ;

class Cell extends Component {
state = {
  value : this.props.value
}

handleIncrement = ()  =>{
  this.setState({ value : this.state.value+1 })
}


  render(){
    console.log(this.state.value);
    return (
      <button
        className="btn btn-outline-success cell"
        type="button"
      >
        {this.state.value}
      </button>
    )
  }
}

export default Cell;
