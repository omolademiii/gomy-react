import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Nav from './Components/Nav';
import Cards from './Components/Card';
function App() {

    let cards = [] ;
    for (let i = 0; i < 3; i++){
        cards.push(<Cards />)
    }
   
  return (
    <div>
      <Nav />
      { cards }
    </div>
  )
}

export default App
