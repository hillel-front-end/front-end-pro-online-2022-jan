import { useCallback, useState } from "react";
import GoogleMapRoot from "./GoogleMapRoot";
import WeatherContainer from "./WeatherContainer";

const WeatherTransportWrapper = () => {
    const [currentMarkerPosition, updateMarkerPosition] = useState(null);

    const onMarkerPositionUpdate = useCallback((newPosition) => {
        updateMarkerPosition(newPosition);
    }, []);

    return (
        <>
            <GoogleMapRoot onMarkerPositionUpdate={onMarkerPositionUpdate} />
            <WeatherContainer position={currentMarkerPosition}/>
        </>
    );
}

export default WeatherTransportWrapper;