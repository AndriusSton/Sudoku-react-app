import React, {Component} from 'react';

class NavBar extends Component {

  render(){
    const {levels, getGrid} = this.props;
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light col-sm-8">
        <form className="form-inline">
        {levels.map(level=>
          <button
          key={level.id}
          onClick={getGrid}
          className="btn btn-outline-success"
          type="button">
          {level.value}
          </button>)}
          </form>
      </nav>
    );
  }
};

export default NavBar;
