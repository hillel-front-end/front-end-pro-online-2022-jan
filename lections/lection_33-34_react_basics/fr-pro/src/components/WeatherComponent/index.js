import { useEffect, useState } from "react";

const WeatherComponent = (props) => {
    const { coords } = props;
    const [maxTemp, setMaxTemp] = useState(null);
    const [weather, setWeather] = useState(null);

    // TODO: Re-call weather if props.coords field was changed
    useEffect(() => {
        const weatherhandler = async () => {
         const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=fe147517cb42a8032190ecae01b8741c&units=imperial`);
         const weather = await data.json();
         setWeather(weather);
        }
 
        weatherhandler();
 
         // setTimeout(() => {
         //     setMyValue(788)
         // }, 5000)
         return () => {}
     }, [props.coords]);


    useEffect(() => {
        if (!weather) return;
        console.log('Weather handler', weather)

        setMaxTemp(weather.main.temp_max)
    }, [weather]);

    return (
        <>
            Max: {maxTemp}
            <br />
            {weather && (JSON.stringify(weather))}
        </>
    );
}

export default WeatherComponent;