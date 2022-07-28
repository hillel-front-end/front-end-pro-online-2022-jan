import { useCallback, useState } from "react";
import GoogleMapRoot from "./GoogleMapRoot";
import WeatherContainer from "./WeatherContainer";

const WeatherTransportWrapper = () => {
    const [currentMarkerPosition, updateMarkerPosition] = useState(null);

    const onMarkerPositionUpdate = useCallback((newPosition) => {
        updateMarkerPosition(newPosition);
    }, []);

    return (
        <div style={{ display: 'flex' }}>
            <GoogleMapRoot onMarkerPositionUpdate={onMarkerPositionUpdate} />
            <WeatherContainer position={currentMarkerPosition}/>
        </div>
    );
}

export default WeatherTransportWrapper;