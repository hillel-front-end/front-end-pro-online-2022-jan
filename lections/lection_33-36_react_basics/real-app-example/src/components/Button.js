const Button = (props) => {
   
    return <button className="MyButton" onClick={props.onClick}>
        {props.title}
        {props.children}
    </button>
};


export default Button;