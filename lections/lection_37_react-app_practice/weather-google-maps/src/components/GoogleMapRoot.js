import React, { useCallback, useContext, useEffect, useState } from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { ModalContext } from '../App';
import { Button } from '@mui/material';

const containerStyle = {
  width: '300px',
  height: '200px'
};

const center = {
  lat: 48.63459871219369,
  lng: 30.29020854281413
};

const GoogleMapRoot = (props) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })

  const [map, setMap] = React.useState(null)
  const [marker, setMarker] = useState(null);

  const modalContext = useContext(ModalContext);

  const onClick = useCallback((event) => {
    const newPosition = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
  };
    setMarker({
        position: newPosition
    });
    props.onMarkerPositionUpdate(newPosition);
  }, []);

  const onLoad = React.useCallback(function callback(map) {
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const onMarkerClick = useCallback(() => {
    modalContext.showModal({
      title: 'Current marker',
      description: 'some text example',
      children: <Button>WHAAAT</Button>
      // closeButtonEnabled: false,
    });
  }, []);

//   useEffect(() => {
//     setTimeout(() => {
//         setMarkers([...markers, { position: { lat: -3.745, lng: -38.523} }, { position: { lat: -4.745, lng: -28.523} }, { position: { lat: -7.745, lng: -38.523} }])
//     }, 3000)
//   }, [markers]);

    // const markerContainer = (<>
    //     {markers.map((marker, index) => <Marker key={`index-${index}`} position={marker.position} />)}
    // </>);


  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={onClick}
      >
         {/* {markerContainer} */}
         {marker && marker.position && <Marker onClick={onMarkerClick} position={marker.position} />}
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(GoogleMapRoot)