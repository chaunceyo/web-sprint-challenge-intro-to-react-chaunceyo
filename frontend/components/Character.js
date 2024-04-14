import React, {useState} from 'react'

function Character(props) { // ❗ Add the props
  console.log(props)
  // ❗ Create a state to hold whether the homeworld is rendering or not
const [homeworldOn, setHomeWorldOn] = useState(false)
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const toggle = () => {
    setHomeWorldOn(!homeworldOn)
  }
  
console.log(homeworldOn)

  return (
    <div  className='character-card' onClick={toggle}>
    <h3 className='character-name'>{props.name} </h3>
{homeworldOn &&
    <p>
      Planet:
      <span className = 'character-planet'> {props.homeworld}</span>
    </p>}
    </div>
  )
}

export default Character
