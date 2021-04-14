const Persons = (props) => {
    const {persons} = props
    return (
    <div>
        {(persons.length > 0) ? persons.map((person)=><p key={person.name}>{person.name}: {person.number}</p>) : <p>No hay contactos con este nombre</p>}
    </div>
    )
}

export default Persons