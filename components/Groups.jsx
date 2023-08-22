import Group from "./Group";
import useEventList from "@/hooks/useEventList";
import styles from "../styles/groups.module.scss";
import SearchBarById from "./SearchBarById";

export default function Groups({
  access_token,
  setGoEvent,
  isButtonDisable,
  latitude,
  longitude,
}) {
  const eventList = useEventList(access_token, latitude, longitude);
  console.log(eventList);
  return (
    <div className={styles.groups}>
      <SearchBarById />
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
