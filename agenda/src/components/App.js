import React, { useState } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'

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

    <Filter filtro={[newFilter, manejarCambioFiltro]}/>

    <h3>Add a new</h3>

    <PersonForm states={[manejarSubmit,manejarCambioNombre,newName,manejarCambioNumero,newNumber]}/>

    <h3>Numbers</h3>

    <Persons persons={persons}/>
  </div>
  )
}

export default App