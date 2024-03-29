import './App.css'
import Card from './components/card/Card.jsx'
import Cards from './components/cards/Cards.jsx'
import SearchBar from './components/searchbar/SearchBar.jsx'
import characters, { Rick } from './data.js'
import React from 'react'
export default function App () {
  return (
    <div className='App' style={{ padding: '25px' }} >
      <div className='div'>
        <Card 
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      </div>
      <hr />
      <div>
        <Cards
          characters={characters}
          
        />
      </div>
      <hr />
      <div>
        <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        />
      </div>
    </div>
  )
}

//export default App
