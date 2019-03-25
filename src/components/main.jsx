import React, {Component} from 'react' ;
import Grid from './grid';
import Controls from './controls';

class Main extends Component {
  render(){
    const {cells} = this.props;
    return (
      <React.Fragment>
        <div className="col-sm-6">
          <Grid/>
        </div>
        <div className="col-sm-2">
          <Controls />
        </div>
      </React.Fragment>
    )
  }
}

export default Main;
