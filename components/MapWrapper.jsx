'use client';

import { useEffect, useRef, useState } from "react";
import styles from '@/styles/map.module.scss'
import { Status, Wrapper } from "@googlemaps/react-wrapper";

function Map({ center, zoom }) {
  const ref = useRef();

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
      disableDefaultUI: true,
    });
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
    <Wrapper apiKey={process.env.NEXT_PUBLIC_API_KEY} render={render}>
      <Map center={position} zoom={18}/>
    </Wrapper>
  )
}
