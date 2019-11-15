import React from 'react';
import List from './components/List';

import './App.css';

function App() {
 
   state = {
    list: [
      {
        id: 1,
        place: 'El paellero',
        reserved: false
      },
      {
        id: 2,
        place: 'El pueblo',
        reserved: false
      },
      {
        id: 3,
        place: 'Casa enrique',
        reserved: false
      },
    ]
  } 
  return (
    <div className="App">
     <List  list={this.state.list} />
    </div>
  );
}

export default App;
