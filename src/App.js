import React, { useState } from 'react';
import Item from './components/Item';

function App() {
  const[item, setItem] = useState('');

  function editItemTitle(title) {
    if (title.trim()) {
      setItem(title);
    } else {
      setItem(item);
    };
  };


  return (
    <div className="App">
      <h1> C.V. Builder</h1>
      <h2>Build beautiful, eye-catching resumes in a few clicks!</h2>
      <Item title='First Name' editItemTitle={editItemTitle} tag='h2' />
      <Item title='Last Name' editItemTitle={editItemTitle} tag='h2' />
      <Item title='Occupation' editItemTitle={editItemTitle} tag='p' />
      <Item title='Address Line 1' editItemTitle={editItemTitle} tag='p' />
      <Item title='Address Line 2' editItemTitle={editItemTitle} tag='p' />
      <Item title='City' editItemTitle={editItemTitle} tag='p' />
      <Item title='Post Code' editItemTitle={editItemTitle} tag='p' />
      <Item title='Phone' editItemTitle={editItemTitle} tag='p' />
      <Item title='Email' editItemTitle={editItemTitle} tag='p' />
    </div>
  );
}

export default App;
