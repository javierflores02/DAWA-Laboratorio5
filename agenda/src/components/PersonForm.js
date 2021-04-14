const PersonForm = (props) => {
    const [manejarSubmit,manejarCambioNombre,newName,manejarCambioNumero,newNumber] = props.states
    return (
    <form onSubmit={manejarSubmit}>
        <div>
          name: <input onChange={manejarCambioNombre} value={newName}/><br/>
          number: <input onChange={manejarCambioNumero} value={newNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
    </form>
    )
}

export default PersonForm