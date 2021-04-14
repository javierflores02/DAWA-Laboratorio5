const Filter = (props) => {
    const [newFilter,manejarCambioFiltro] = props.filtro
    return (<p>filter shown with: <input onChange={manejarCambioFiltro} value={newFilter}/></p>)
}

export default Filter