'use client'
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useLoadScript,
} from '@react-google-maps/api'
import React, { useEffect, useState } from 'react'

const mapContainerStyle = {
  width: '100%',
  height: '350px',
}

const options = {
  disableDefaultUI: false,
  zoomControl: true,
}

export default function Map({ location }) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  })

  const center = {
    lat: location.lat,
    lng: location.lng,
  }

  const [markers, setMarkers] = useState([
    {
      lat: location.lat,
      lng: location.lng,
    },
  ])

  if (loadError) return <span>Error loading maps</span>
  if (!isLoaded) return <span>Loading Maps</span>

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
        <div className="border bg-white p-8 opacity-75 shadow-xl">
          <div className="font-gray-900 text-xl">
            <h1 className="font-semi-bold text-center">{location.name}</h1>
            <div className="text-base text-gray-700">{location.address}</div>
          </div>
        </div>
      </InfoWindow>
    </GoogleMap>
  )
}
