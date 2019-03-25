import React, {Component} from 'react';
import NavBar from './components/navbar';
import Main from './components/main';


class App extends Component {

  state = {
    levels : [
      {id : 1, value : 'Easy'},
      {id : 2, value : 'Medium'},
      {id : 3, value : 'Hard'}
    ]
  }

  render(){
    return (

      <div className="row align-items-center">
        <NavBar
          levels={this.state.levels}
          getGrid={this.props.getGrid}
        />
        <Main/>
      </div>
    );
  };
}

export default App;
