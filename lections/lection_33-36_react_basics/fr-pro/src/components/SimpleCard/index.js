// Class or Functional?

import React from "react";
import './index.css'


const SimpleCard = (props) => {
    const { color, width, onClick } = props;
    console.log(props)
    //  <React.Fragment> === <>

    
    return (
        <>
            <div className="simple-card" onClick={onClick}>
                <img className={'style-' + color} src="https://github.githubassets.com/images/icons/growth/unlocked.svg" width={width} />
                <span>Lorem ipsum - {color}</span>
            </div>
        </>
    );
}


export default SimpleCard;

