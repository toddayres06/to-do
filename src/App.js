import './index.css';
import React from 'react'
import ListItems from './ListItems'

function App() {
  return (
    <main>
      <div className="container">
        <h1>To-Do List</h1>     
          <ListItems />
      </div>
    </main>
    )
  }


export default App

// title
// to-do INPUT with submit BUTTON
// unordered list with option to REMOVE item
// CLEAR LIST button
