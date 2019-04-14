import React, {Component} from 'react';
import NavBar from './components/navbar';
import Main from './components/main';

class App extends Component {

  state = {
    levels: [
      {id: 'level1', value: 'easy'},
      {id: 'level2', value: 'medium'},
      {id: 'level3', value: 'hard'}
    ],
    values: null
  }

  // https://www.techiediaries.com/react-ajax/
  fetchFirst = url => {
    if (url) {
      fetch('http://sudoku.game.com/' + url).then(function (response) {
        return response.json();
      }).then(function (result) {
        this.setState({values: result.grid});
        //console.log('STATE: ', this.state.values);
      }.bind(this));
    }
  }

  componentDidMount() {
    this.fetchFirst('services/get_puzzle/medium');
  }

  handleGridGetter = level => {
    this.fetchFirst('services/get_puzzle/'+ level.value);
  }

  render() {
    return (
      <div className="row align-items-center">
      <NavBar
      levels={this.state.levels}
      getGrid={this.handleGridGetter}
      />
      {this.state.values ?
        <Main
        nums={this.state.values}
        /> :
        <p> Loading, please wait... </p>
      }
      </div>
    );
  }
  ;
}

export default App;
