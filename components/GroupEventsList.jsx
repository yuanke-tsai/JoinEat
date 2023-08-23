// import Image from "next/image";
import Image from "next/image";
import styles from "../styles/group.module.scss";
import useEventList from "@/hooks/useEventList";
import useProfile from "@/hooks/useProfile";
import Group from "./Group";

export default function GroupEventsList({
  setActiveEventId,
  isButtonDisable,
  access_token,
  latitude,
  longitude,
}) {
  const { data: eventList } = useEventList(access_token, latitude, longitude);
  console.log(eventList);
  // const handleClickEvent = (e, eventId) => {
  //   e.preventDefault();
  //
  //   if (!isButtonDisable) {
  //     setActiveEventId(eventId);
  //   }
  // };

  return (
    <div>
      {eventList !== null &&
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
        ))}
    </div>
  );
}
