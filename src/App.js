import React from 'react';
import { useState, useEffect } from 'react'

import './App.css';

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function fetchData() {
      await (await (await fetch('https://api.github.com/users'))).json()
      .then(data => setUsers(data))
    }
    fetchData()
  }, [])

  const all = users.map((elem) => {
    return(
      <div>
    <div key={elem.id}>{elem.login}</div>
    <img src={elem.avatar_url} alt="github images"/>
    </div>
    )
  })
  return (
    <div className="App">
      {console.log(users)}
      Hello world!
      {all}
    </div>
  );
}

export default App;
