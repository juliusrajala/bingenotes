import React from 'react';

export default React.createClass({
  componentWillMount(){
    console.log('Mounting App-component');
  },
  render(){
    return(
      <div>
        Hello World!
      </div>
    );
  }
});
