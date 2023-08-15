'use client';

import { useEffect, useState } from "react";
import styles from '@/styles/map.module.scss'
import { Status, Wrapper } from "@googlemaps/react-wrapper";
import Map from "./Map";

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
