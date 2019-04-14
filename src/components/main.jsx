import React, {Component} from 'react';
import Grid from './grid';
import Controls from './controls';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nums: props.nums
    }
  }

  // https://stackoverflow.com/questions/41233458/react-child-component-not-updating-after-parent-state-change
  componentWillReceiveProps(nextProps) {
    this.setState({ nums: nextProps.nums });
  }

  convertToArrayOfObjects = array => {
    let cellEntry = ['id', 'value', 'isEmpty'],
    output = [],
    cellObj = {},
    rowObj = {},
    rowCells = [];
    for (let i = 0; i < 9; i++) {
      rowObj = {};
      rowCells = [];
      for (let j = 0; j < 9; j++) {
        cellObj = {};
        cellObj[cellEntry[0]] = ((i * 9) + j);
        cellObj[cellEntry[1]] = array[(i * 9) + j];
        cellObj[cellEntry[2]] = (array[(i * 9) + j] === 0) ? true : false;
        rowCells.push(cellObj);
      }
      rowObj['id'] = i;
      rowObj['value'] = rowCells;
      output.push(rowObj);
    }
    return output;
  }

  render() {
    const convertedNumbers = this.convertToArrayOfObjects(this.state.nums);
    return (
      <React.Fragment>
      <div className="col-sm-6">
      <Grid
      grid={convertedNumbers}
      />
      </div>
      <div className="col-sm-2">
      <Controls />
      </div>
      </React.Fragment>
    )
  }
}

export default Main;
