'use client';

import GoogleMapReact from 'google-map-react';

export default function SimpleMap(){
  return (
    <div style={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_API_KEY}}
        defaultCenter={
          {
            lat: 25.04,
            lng: 121.55
          }
        }
        defaultZoom={18}
      >
      </GoogleMapReact>
    </div>
  );
}
