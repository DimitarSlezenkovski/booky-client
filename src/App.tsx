import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {get } from './repository/GET'

function App() {
  const [data, setData] = useState(null);
  const show = () => {
    get().then((res: any) => setData(res.data))
  }
  return (
    <div className="App">
     <button onClick={show}>
       GET
     </button>
     <div>{data}</div>
    </div>
  );
}

export default App;
