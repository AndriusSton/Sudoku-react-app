import React, {Component} from 'react';
import NavBar from './components/navbar';
import Main from './components/main';


class App extends Component {

  state = {
    levels : [
      {id : 'level1', value : 'Easy'},
      {id : 'level2', value : 'Medium'},
      {id : 'level3', value : 'Hard'}
    ],
    values : null
  }

  componentDidMount() {
      this.fetchFirst("services/get_puzzle/medium");
  }

  fetchFirst = url => {
    if (url) {
      fetch('http://sudoku.game.com/' + url).then(function (response) {
        return response.json();
      }).then(function (result) {
        this.setState({ values: result.grid });
        console.log('STATE: ', this.state.values);
      }.bind(this));
    }
  }

  render(){
    return (
      <div className="row align-items-center">
        <NavBar
          levels={this.state.levels}
          getGrid={this.props.getGrid}
        />
        {this.state.values?
          <Main
            nums={this.state.values}
          /> :
          <p> Loading, please wait... </p>
        }
      </div>
    );
  };
}

export default App;
