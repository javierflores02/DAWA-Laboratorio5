import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const manejarSubmit = (e) => {
    e.preventDefault();
    let repetido = ([...persons].filter((person)=>person.name===newName)).length
    if (repetido > 0){
      alert(`El nombre ${newName} ya fué agregado`)
    }else{
      setPersons([...persons, {name: newName}])
    }
    setNewName("")
  }
  const manejarCambio = (e) => {
    setNewName(e.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={manejarSubmit}>
        <div>
          name: <input onChange={manejarCambio} value={newName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person)=><p key={person.name}>{person.name}</p>)}
      </div>
    </div>
  )
}

export default App