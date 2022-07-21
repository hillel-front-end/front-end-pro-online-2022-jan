import { useCallback, useEffect, useState } from "react";


const formSchema = [
    {
        id: 't10',
        name: 'temperature',
        value: 10
    },
    {
        id: 't15',
        name: 'temperature',
        value: 15
    },
    {
        id: 't20',
        name: 'temperature',
        value: 20,
    },
];

const WeatherCurrent = (props) => {
    const { ActionComponent } = props;
    const [tempC, setTempC] = useState(0);
    const [tempF, setTempF] = useState(32);

    const onRadioChange = useCallback((event) => {
        setTempC(event.target.value);
    }, []);

    // -------------------------------------
    const updateTempF = useCallback(() => {
        console.log('updateTempF', tempC);
        setTempF(tempC * 9/5 + 32);
    }, [tempC]);

    useEffect(() => {
        updateTempF();
        props.handler(tempC);
    }, [tempC, props.handler])
    // -------------------------------------

    const formTemplate = formSchema.map(item => {
        return (
            <label key={item.id}>
                <input type="radio" {...item} />
                {item.value}
            </label>
        ); 
    });

    return <>
        Set current weather
        <div onChange={onRadioChange}>
         {formTemplate}
        </div>

        Current Temp °C: {tempC}
        <br />
        Current Temp °F: {tempF}
        <br />
        <ActionComponent title="akjsdnjkas" />
    </>;
}

export default WeatherCurrent;