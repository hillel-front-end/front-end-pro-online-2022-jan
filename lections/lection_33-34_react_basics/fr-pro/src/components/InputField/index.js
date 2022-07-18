import { useEffect, useState } from "react";
import WeatherComponent from "../WeatherComponent";
import { InputFieldHelper } from "./helper";

const InputField = () => {
    const [myValue, setMyValue] = useState(670);
    const [time, setTime] = useState(Date.now());
    const [coords, setCoords] = useState({ lat: '50.451400', lon: '30.472484' })

    // Default for useEffect
    useEffect(() => {
        // componentDidMount
        const intervalId = setInterval(() => {
            setTime(Date.now());
        }, 1000);

        setTimeout(() => {
            setCoords({
                lat: '45.451400', lon: '32.472484'
            })
        }, 3000)

        // componentWillUnMount
        return () => clearInterval(intervalId);
    }, []);

    // UseEffect with deps
    useEffect(() => {
        // Called when myValue was changed
        console.log('myValue post effect');
    }, [myValue]);


    return (
        <>
            <input placeholder={'Insert smth - ' + myValue} />
            {time}
            <WeatherComponent coords={coords} />
        </>
    )
}

export default InputField;