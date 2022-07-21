import './Label.css'

const Label = (props) => {
    props.type = 'blue'
    return (
        <span className={`Label ${props.type}`}>{props.content}</span>
    );
}


export default Label;