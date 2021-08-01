import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div className="App">
      <h1>Hello</h1>
      <ul>
        <li>list</li>
      </ul>
    </div>
  );
}

export default App;
