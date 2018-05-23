import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Autocomplete from '../src/index.js';

class App extends Component {

  constructor(props) {
    super(props);

    let tmpData = [{
      name: '北京',
      value: 'beijing'
    }, {
      name: '上海',
      value: 'shanghai'
    }, {
      name: '广州',
      value: 'guangzhou'
    }, {
      name: '克孜勒苏柯尔克孜自治州',
      value: 'kezile'
    }, {
      name: '那然色布斯台音布拉格',
      value: 'naran'
    }];

    this.state = {
      options: tmpData,
      text: '',
      value: '',
      placeholder: '请选择城市'
    };    
  }

  render() {
    return (
      <div>
        <Autocomplete
          options={this.state.options}
          text={this.state.text}
          value={this.state.value}
          placeholder={this.state.placeholder}
          onChange={this.onChange.bind(this)}
        />
      </div>
    );
  }

  onChange(nextText, nextValue) { 

    this.setState({
      text: nextText,
      value: nextValue
    });
  }
}

ReactDOM.render(<App />, document.getElementById('root')); 