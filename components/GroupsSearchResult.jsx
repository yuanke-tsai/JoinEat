import Group from "./Group";
import styles from "../styles/groups.module.scss";

export default function GroupsSearchResult({
  setGoEvent,
  isButtonDisable,
  groupsSearchResult,
}) {
  return (
    <div className={styles.groups}>
      {groupsSearchResult !== null &&
        groupsSearchResult?.data?.events.map((event) => (
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
