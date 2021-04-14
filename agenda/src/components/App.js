import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '345-34444-23'}
  ]) 
  const [ personsCopia, setPersonsCopia ] = useState([...persons]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter] = useState('')
  const manejarSubmit = (e) => {
    e.preventDefault();
    let repetido = ([...persons].filter((person)=>person.name===newName)).length
    if (repetido > 0){
      alert(`El nombre ${newName} ya fué agregado`)
    }else{
      setPersons([...persons, {name: newName, number: newNumber}])
      setPersonsCopia([...personsCopia, {name: newName, number: newNumber}])
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
  const manejarCambioFiltro = async(e) => {
    await setNewFilter(e.target.value)
    setPersons([...personsCopia].filter((person)=>person.name.toLowerCase().includes(e.target.value.toLowerCase())))
  }
  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with: <input onChange={manejarCambioFiltro} value={newFilter}/>
      <form onSubmit={manejarSubmit}>
        <h2>add a new</h2>
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
        {(persons.length > 0) ? persons.map((person)=><p key={person.name}>{person.name}: {person.number}</p>) : <p>No hay contactos con este nombre</p>}
      </div>
    </div>
  )
}

export default App