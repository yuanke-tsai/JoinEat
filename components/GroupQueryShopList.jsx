import { useEffect } from "react";
import Image from "next/image";
import styles from "../styles/group.module.scss";
import useQueryShop from "@/hooks/useQueryShop";
import LaunchGroup from "./LaunchGroup/LaunchGroup";
import Group from "./Group";

export default function GroupQueryShopList({
  setActiveEventId,
  isButtonDisable,
  access_token,
  latitude,
  longitude,
  latitudeShop,
  longitudeShop,
  shop_name,
}) {
  const { data: eventList, mutate } = useQueryShop(
    access_token,
    latitude,
    longitude,
    latitudeShop,
    longitudeShop,
  );

  // const handleClickEvent = (e, eventId) => {
  //   e.preventDefault();
  //   if (!isButtonDisable) {
  //     setActiveEventId(eventId);
  //   }
  // };

  useEffect(() => {
    mutate((cachedData) => {
      if (cachedData) {
        const updatedData = { ...cachedData };
        return updatedData;
      }
      return cachedData;
    });
  }, [longitudeShop, mutate]);

  return (
    <div>
      {eventList !== null && eventList?.data?.events.length !== 0 ? (
        eventList?.data?.events.map((event) => (
          <Group
            key={event.event_id}
            hostId={event.host_id}
            eventTime={event.appointment_time}
            eventDistance={event.distance}
            setActiveEventId={setActiveEventId}
            eventId={event.event_id}
            shop_name={event.shop_name}
            eventName={event.name}
            people_joined={event.people_joined}
            people_limit={event.people_limit}
          />
        ))
      ) : (
        <LaunchGroup
          shop_name={shop_name}
          latitude={latitudeShop}
          longitude={longitudeShop}
        />
      )}
    </div>
  );
}
