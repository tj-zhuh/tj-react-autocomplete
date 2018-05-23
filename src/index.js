import React from 'react'; 

import { Select, Radio } from 'antd';
const Option = Select.Option;

import filter from './lib/filter.js';

class AutoComplete extends React.Component {

  render() {

    const { options = [], text, onChange, placeholder } = this.props;

    let myOptions = [];

    for (let option of options) {

      let filterResult = filter(text, option.name);

      if (filterResult) {
        myOptions.push({
          name: option.name,
          value: option.value,
          matching: filterResult
        });
      }
    }

    myOptions.sort((a, b) => { return b.matching - a.matching; });

    const children = [];

    for (let option of myOptions) {
      children.push(
        <Option
          key={option.value}
        >
          {option.name}
        </Option>
      );
    } 



    return (
      <div className="tj-react-autocomplete">
        <Select
          mode="combobox"         
          placeholder={placeholder}
          style={{ width: '100%' }}
          value={text}
          onSearch={(nextValue) => { onChange(nextValue, '') }}         
          onSelect={(nextValue) => {            
            let option = options.find(x => x.value === nextValue);
            let nextText = option ? option.name : nextValue;
            onChange(nextText, nextValue)
          }}
          notFoundContent=""
          defaultActiveFirstOption={true}
          showArrow={false}
          filterOption={false}
        >
          {children}
        </Select>
      </div>
    )
  }
}

export default AutoComplete;