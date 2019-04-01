import React, {Component} from 'react' ;
import Grid from './grid';
import Controls from './controls';

class Main extends Component {

  state = {
    numbers : [
      4, 5, 8, 9, 3, 2, 1, 9, 5,
      0, 5, 0, 3, 0, 2, 2, 9, 0,
      3, 2, 1, 9, 5, 0, 3, 0, 2,
      4, 5, 8, 9, 3, 2, 1, 9, 5,
      0, 5, 0, 3, 0, 2, 2, 9, 0,
      3, 2, 1, 9, 5, 0, 3, 0, 2,
      4, 5, 8, 9, 3, 2, 1, 9, 5,
      0, 5, 0, 3, 0, 2, 2, 9, 0,
      3, 2, 1, 9, 5, 0, 3, 0, 2
    ]
  }

    // componentDidMount(){
    //   this.forceUpdate(this.setState((state) => {
    //     return {grid: this.convertToArrayOfObjects()}
    //   }));
    // }

    convertToArrayOfObjects = array =>{
      let cellEntry = ['id', 'value', 'isEmpty'],
          output = [],
          cellObj = {},
          rowObj = {},
          rowCells = [];
      for (let i = 0; i < 9; i++){
        rowObj = {};
        rowCells = [];
        for (let j = 0; j < 9; j++) {
          cellObj = {};
          cellObj[cellEntry[0]] = ((i*9) + j);
          cellObj[cellEntry[1]] = array[(i*9) + j];
          cellObj[cellEntry[2]] = (array[(i*9) + j] === 0) ? true : false;
          rowCells.push(cellObj);
        }
        rowObj['id'] = i;
        rowObj['value'] = rowCells;
        output.push(rowObj);
      }
      return output;
    }


  render(){
    const convertedNumbers = this.convertToArrayOfObjects(this.state.numbers);
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
    );
  }
}

export default Main;
