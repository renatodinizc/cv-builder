import React, { useState } from 'react';
import Item from './components/Item';

function App() {
  const[item, setItem] = useState('First Name');

  function editItemTitle(newTitle) {
    setItem(newTitle);
  };


  return (
    <div className="App">
      <h1> C.V. Builder</h1>
      <h2>Build beautiful, eye-catching resumes in a few clicks!</h2>
      <Item title={item} editItemTitle={editItemTitle}/>
    </div>
  );
}

export default App;
