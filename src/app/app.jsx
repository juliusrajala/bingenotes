import React from 'react';
import EditorPage from './ui/pages/Editor/EditorPage';

export default React.createClass({
  componentWillMount(){
    console.log('Mounting App-component');
  },
  render(){
    return(
      <div>
        <EditorPage />
      </div>
    );
  }
});
