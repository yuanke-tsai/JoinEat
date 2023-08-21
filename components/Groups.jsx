import { useEffect, useState } from "react";
import Group from "./Group";
import useEventList from "@/hooks/useEventList";
import useQueryShop from "@/hooks/useQueryShop";
import styles from "../styles/groups.module.scss";

export default function Groups({
  access_token,
  setGoEvent,
  isButtonDisable,
  latitude,
  longitude,
  position,
}) {
  const [data, isValidating, fetcher] = useEventList(
    access_token,
    latitude,
    longitude,
  );
  const [eventList, setEventList] = useState(data);
  // console.log(eventList);
  // console.log(position);
  // let eventList;
  useEffect(() => {
    if (position === undefined) {
      fetcher();
      setEventList(data);
    }
  }, [position, data, eventList]);
  console.log(data)
  console.log(eventList);
  //  eventList = useQueryShop(
  //     access_token,
  //     latitude,
  //     longitude,
  //     position.lat,
  //     position.lat,
  //   );
  return (
    <div className={styles.groups}>
      {eventList !== null &&
        eventList?.data?.data?.events.map((event) => (
          <Group
            key={event.event_id}
            eventName={event.name}
            shop_name={event.shop_name}
            eventTime={event.appointment_time}
            people_joined={event.people_joined}
            people_limit={event.people_limit}
            eventDistance={event.distance}
            setGoEvent={setGoEvent}
            isButtonDisable={isButtonDisable}
          />
        ))}
    </div>
  );
}
