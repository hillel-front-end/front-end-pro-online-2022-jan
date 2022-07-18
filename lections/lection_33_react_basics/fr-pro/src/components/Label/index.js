import './Label.css'

const Label = (props) => {
    return (
        <span className={`Label ${props.type}`}>{props.content}</span>
    );
}


export default Label;