import Part from './Part'

const Content = (props) => {
    return (
    <>
        {props.partes.map((parte)=><Part key={parte.id} parte={parte}/>)}
        <p><b>Total de ejercicios: </b>{props.partes.reduce((acum,{exercises: valor})=> acum + valor, 0)}</p>
    </>
    )
}

export default Content