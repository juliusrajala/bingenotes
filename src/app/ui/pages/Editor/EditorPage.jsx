import React from 'react';

const EditorPage = ({}) => {
  const placeHolder = ['Apple', 'Orange', 'Banana'];
  return (
    <div className="page-container">
      <ul>
      { placeHolder.map((item, i) =>
          <li key={ i }>{ item }</li>
        )
      }
      </ul>
    </div>
  );
};

EditorPage.propTypes = {

};

export default EditorPage;