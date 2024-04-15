import React from 'react';
import {MapContainer, TileLayer} from 'react-leaflet';
import GeoCoderMarker from './GeoCoderMarker';

export default function Map({address, city}) {
  return (
    <MapContainer 
   center={[53.35, 18.8]}
      zoom={1}
      scrollWheelZoom={false}
      style={{
        height: "400px", // Set initial height for the map
        width: "100%",   // Make the map container full-width
        marginTop: "20px", // Add margin top for spacing
        zIndex: 0,
        background: 'transparent'
      }}
      className="md:h-96 lg:h-96 xl:h-96" //
  >
    <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
    <GeoCoderMarker address={`${address} ${city}`} />
  </MapContainer>
  )
}
