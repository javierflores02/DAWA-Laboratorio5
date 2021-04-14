import Part from './Part'

const Content = (props) => {
    return (
    <>
        {props.partes.map((parte)=><Part key={parte.id} parte={parte}/>)}
    </>
    )
}

export default Content