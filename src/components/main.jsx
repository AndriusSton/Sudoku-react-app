import React, {Component} from 'react' ;
import Grid from './grid';
import Controls from './controls';

class Main extends Component {

  state = {
    rows : [
      { id : 0, value : [
        { id : 0, value : 4, isEmpty : false},
        { id : 1, value : 2, isEmpty : false},
        { id : 2, value : 7, isEmpty : false},
        { id : 3, value : 0, isEmpty : true},
        { id : 4, value : 9, isEmpty : false},
        { id : 5, value : 0, isEmpty : true},
        { id : 6, value : 1, isEmpty : false},
        { id : 7, value : 3, isEmpty : false},
        { id : 8, value : 0, isEmpty : true}
      ]},
      { id : 1, value : [
        { id : 9, value : 5, isEmpty : false},
        { id : 10, value : 0, isEmpty : true},
        { id : 11, value : 0, isEmpty : true},
        { id : 12, value : 8, isEmpty : false},
        { id : 13, value : 0, isEmpty : true},
        { id : 14, value : 0, isEmpty : true},
        { id : 15, value : 2, isEmpty : false},
        { id : 16, value : 4, isEmpty : false},
        { id : 17, value : 7, isEmpty : false}
      ]},
      { id : 2, value : [
        { id : 18, value : 0, isEmpty : true},
        { id : 19, value : 2, isEmpty : false},
        { id : 20, value : 0, isEmpty : true},
        { id : 21, value : 3, isEmpty : false},
        { id : 22, value : 7, isEmpty : false},
        { id : 23, value : 0, isEmpty : true},
        { id : 24, value : 5, isEmpty : false},
        { id : 25, value : 9, isEmpty : false},
        { id : 26, value : 6, isEmpty : false}
      ]}
    ],
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
    //     return {cells: this.convertToArrayOfObjects()}
    //   }));
    // }
    // convertToArrayOfObjects = () =>{
    //   let entry = ['id', 'value', 'empty'];
    //   let obj = {};
    //   const output = [];
    //
    //   for (let i = 0; i < this.state.numbers.length; i++) {
    //     obj = {};
    //     obj[entry[0]] = i;
    //     obj[entry[1]] = this.state.numbers[i];
    //     obj[entry[2]] = (this.state.numbers[i] === 0) ? true : false;
    //     output.push(obj);
    //   }
    //   return output;
    // }


  render(){
    return (
      <React.Fragment>
        <div className="col-sm-6">
          <Grid
            rows={this.state.rows}
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
