import React, { useState } from 'react'
import './App.css';

import Navbar from './Navbar'
import Input from './Input';

function App() {
  const [posts, setPosts] = useState([])
  function addPost(title) {

  }
  return (
    <div className="App">
      <Navbar />
      <Input />
    </div>
  );
}

export default App;
