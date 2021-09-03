import React from 'react';
import { DatePicker } from 'antd';
import './App.scss';
import Img from './img.png';

// type Props = {
//   toWhat: string;
// };
// type State = {};

class App extends React.Component {
  render() {
    return (
      <>
        <div className="app">
          <div className="text">Hello</div>
          <div>{this.props.toWhat}</div>
          <div>
            <DatePicker></DatePicker>
          </div>
        </div>
        <img src={Img} />
      </>
    );
  }
}

export default App;
