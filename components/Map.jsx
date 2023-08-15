import { useRef, useEffect } from "react";
import styles from '@/styles/map.module.scss'

export default function Map({ center, zoom }) {
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
