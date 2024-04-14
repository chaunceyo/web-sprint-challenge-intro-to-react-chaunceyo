import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API

  const [people, setPeople] = useState()
  const [planets, setPlanets] = useState()

  // ❗ Create effects to fetch the data and put it in state

  useEffect(() => {
      Promise.all([axios.get(urlPeople),axios.get(urlPlanets)])
      .then(res => {
        console.log(res)
        setPeople(res[0].data)
        setPlanets(res[1].data)
      })
      .catch(error => console.log(error))
  }, [])

if(!planets) return 'Loading..';

  people.map(person => {
    planets.map(planet => {
     return person.homeworld === planet.id? person.homeworld = planet.name : null
    })
  })

 console.log(people)
  

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
      {people.map(person => {
        return <Character key ={person.id} name={person.name} homeworld={person.homeworld} />
      })}
      {}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
