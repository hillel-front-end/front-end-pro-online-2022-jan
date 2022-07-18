import './Button.css'

// CSS Class as param
// Event handling

const Button = (props) => {
    let content = props.title || 'Ok';
    if (props.type === 'cancel') {
        content = 'X'
    }

    return (
        <button onClick={props.handler} className={`Button ${props.className}`}>{content}</button>
    );
}


export default Button;