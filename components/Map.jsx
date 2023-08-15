import { useRef, useEffect } from "react";
import styles from "@/styles/map.module.scss";

export default function Map({ center, zoom }) {
  const marker = useRef(null);

  const ref = useRef();

  useEffect(() => {
    const map = new window.google.maps.Map(ref.current, {
      center,
      zoom,
      disableDefaultUI: true,
    });

    const service = new window.google.maps.places.PlacesService(map);

    map.addListener("click", (e) => {
      if (marker.current) {
        marker.current.setMap(null);
      }

      const { placeId } = e;
      if (!placeId) {
        return;
      }

      // prevent the default popup window
      e.stop();

      service.getDetails(
        {
          placeId,
        },
        (place, status) => {
          if (
            status === window.google.maps.places.PlacesServiceStatus.OK &&
            (place.types.includes("restaurant") || place.types.includes("cafe"))
          ) {
            const latitude = place.geometry.location.lat();
            const longitude = place.geometry.location.lng();
            marker.current = new window.google.maps.Marker({
              position: { lat: latitude, lng: longitude },
              map,
            });
            alert(`${place.name}\n(${latitude}, ${longitude})`);
          } else {
            alert("請點擊餐廳");
          }
        },
      );
    });

    const userMarker = new window.google.maps.Marker({
      position: center,
      map,
      title: "你的位置",
      icon: {
        path: window.google.maps.SymbolPath.CIRCLE,
        scale: 10,
        fillOpacity: 1,
        strokeWeight: 2,
        fillColor: "#5384ED",
        strokeColor: "#ffffff",
      },
    });
  });

  return <div ref={ref} className={styles.map} />;
}
