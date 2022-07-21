import { useCallback, useState } from "react";

const WeatherForecast = (props) => {
    const [temp, setTemp] = useState(0)

    const onInputChange = useCallback((event) => {
        // props.handler(800);
        // console.log('onInputChange', args);
        const tempValue = event.target.value;
        setTemp(tempValue);
        props.handler(tempValue); // UPDATE STATE IN APP COMPONENT
    }, [props.handler]);
    

    return <>
        Set forecast weather 
        <input type="range" onChange={onInputChange} min="-50" max="50"/>
        Selected temp: {temp}
    </>;
}

export default WeatherForecast;