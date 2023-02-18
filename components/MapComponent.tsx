import { GoogleMap, InfoWindow,Marker,useLoadScript } from '@react-google-maps/api'
import React, { useEffect,useState } from 'react';

  
  const mapContainerStyle = {
    width: '100%',
    height: '350px',
  };
  
  const options = {
    disableDefaultUI: false,
    zoomControl: true,
  };
  
  export default function Map({location}) {
    const { isLoaded, loadError } = useLoadScript({
      googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
    });

    const center = {
      lat: location.lat,
      lng: location.lng,
    };
  
    const [markers, setMarkers] = useState([
      {
        lat: location.lat,
        lng: location.lng,
      },
    ]);
  
    if (loadError) return (<span>Error loading maps</span>);
    if (!isLoaded) return (<span>Loading Maps</span>);
  
    return (
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={18}
        center={center}
        options={options}
      
      >
        {markers.map((marker) => (
          <Marker key={marker.lat} position={marker} />
        ))}
        <InfoWindow
      // onLoad={onLoad}
      position={location}
    >
      <div className="bg-white opacity-75 p-8 border shadow-xl" >
        <div className="text-xl font-gray-900" >
        <h1 className='text-center font-semi-bold'>{location.name}</h1>
        <div className='text-base text-gray-700'>
          {location.address}
        </div>
        </div>
      </div>
    </InfoWindow>

      </GoogleMap>
    );
  };
  

  