'use client';

import { useEffect, useRef, useState } from "react";
import styles from '@/styles/map.module.scss'
import { Status, Wrapper } from "@googlemaps/react-wrapper";

function Map({ center, zoom }) {
  const ref = useRef();

  useEffect(() => {
    const map = new google.maps.Map(ref.current, {
      center,
      zoom,
      disableDefaultUI: true,
    });

    const service = new google.maps.places.PlacesService(map);

    map.addListener('click', function(e) {
      const placeId = e.placeId;
      if (!placeId) {
        return;
      }

      // prevent the default popup window
      e.stop();

      service.getDetails({
        placeId: placeId
      }, (place, status) => {
          if (
            status === google.maps.places.PlacesServiceStatus.OK
            &&
            (place.types.includes('restaurant') || place.types.includes('cafe'))
          ) {
            const latitude = place.geometry.location.lat();
            const longitude = place.geometry.location.lng();
            alert(`${place.name}\n(${latitude}, ${longitude})`)
          } else {
            alert('請點擊餐廳');
          }
        });
    });

    new google.maps.Marker({
      position: center,
      map,
      title: '你的位置',
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 10,
        fillOpacity: 1,
        strokeWeight: 2,
        fillColor: '#5384ED',
        strokeColor: '#ffffff',
      },
    })
  });

  return <div ref={ref} className={styles.map} />;
}

export default function MapWrapper() {
  const [position, setPosition] = useState({ lat: 0, lng: 0 });

  function success(position) {
    setPosition({lat: position.coords.latitude, lng: position.coords.longitude});
  }

  function error() {
    alert("無法取得您的位置，請開啟位置存取權限");
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }, []);

  function render(status) {
    if (status === Status.LOADING) {
      return <div className={styles.map}>Loading Map...</div>;
    } else if (status === Status.FAILURE) {
      return 'Error';
    }
    return null;
  };

  return (
    <Wrapper
      language="zh-TW"
      region="TW"
      apiKey={process.env.NEXT_PUBLIC_API_KEY}
      render={render}
      libraries={['places']}
    >
      <Map center={position} zoom={18}/>
    </Wrapper>
  )
}
