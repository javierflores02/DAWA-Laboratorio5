import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '345-34444-23'}
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const manejarSubmit = (e) => {
    e.preventDefault();
    let repetido = ([...persons].filter((person)=>person.name===newName)).length
    if (repetido > 0){
      alert(`El nombre ${newName} ya fué agregado`)
    }else{
      setPersons([...persons, {name: newName, number: newNumber}])
    }
    setNewName("")
    setNewNumber("")
  }
  const manejarCambioNombre = (e) => {
    setNewName(e.target.value)
  }
  const manejarCambioNumero = (e) => {
    setNewNumber(e.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={manejarSubmit}>
        <div>
          name: <input onChange={manejarCambioNombre} value={newName}/><br/>
          number: <input onChange={manejarCambioNumero} value={newNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person)=><p key={person.name}>{person.name}: {person.number}</p>)}
      </div>
    </div>
  )
}

export default App