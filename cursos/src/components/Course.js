import Content from './Content'
import Header from './Header'

const Course = (props) => {
    return (
    <>
        <Header titulo={props.course.name}/>
        <Content partes={props.course.parts}/>
    </>
    )
}

export default Course