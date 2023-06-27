import React, { useState } from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';
import './styles/App.css';
import PostItem from './components/PostItem';
// props - входные данные компонента

function App() {
  const [value, setValue] = useState('gigigi')
  
  
  return (
    <div className="App">
      <PostItem post={{id: 1, title: 'JavaScript', body: 'Description'}} />
      <PostItem post={{id: 7, title: 'JavaScript', body: 'Description'}} />
      <PostItem post={{id: 12, title: 'JavaScript', body: 'Description'}} />
      
    </div>
  );
}

export default App;
