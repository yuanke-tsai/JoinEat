// import Image from "next/image";
import styles from "../styles/group.module.scss";
import useQueryShop from "@/hooks/useQueryShop";

export default function GroupQueryShopList({
  setActiveEventId,
  isButtonDisable,
  access_token,
  latitude,
  longitude,
  latitudeShop,
  longitudeShop,
}) {
  const { data: eventList } = useQueryShop(
    access_token,
    latitude,
    longitude,
    latitudeShop,
    longitudeShop,
  );
  console.log(eventList);
  const handleClickEvent = (e, eventId) => {
    e.preventDefault();
    if (!isButtonDisable) {
      setActiveEventId(eventId);
    }
  };
  return (
    <div>
      {eventList !== null &&
        eventList?.data?.events.map((event) => (
          <div key={event.event_id}>
            <button
              type="submit"
              style={{
                border: "none",
                backgroundColor: "transparent",
                cursor: "pointer",
              }}
              onClick={(e) => handleClickEvent(e, event.event_id)}
            >
              <div type="submit" className={styles.group}>
                <div className={styles.basicInfo}>
                  <picture>
                    <img
                      className={styles.userImg}
                      src="/profileIcon.jpg"
                      alt="profileIcon"
                    />
                  </picture>
                  <div className={styles.time}>
                    <div className={styles.eventTime}>
                      {event.appointment_time !== undefined && (
                        <p>
                          {event.appointment_time.hour}:
                          {event.appointment_time.minute}
                        </p>
                      )}
                      {/* {eventTime.hour}:{eventTime.minute} */}
                    </div>
                    <div className={styles.eventDate}>
                      {event.appointment_time !== undefined && (
                        <p>
                          {event.appointment_time.month}/
                          {event.appointment_time.date}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className={styles.names}>
                    <div className={styles.nameGroup}>{event.name}</div>
                    <div className={styles.nameResturant}>
                      {event.shop_name}
                    </div>
                  </div>
                </div>
                <div className={styles.detailInfo}>
                  <div className={styles.peopleLimit}>
                    <p>
                      {event.people_joined}/{event.people_limit}
                    </p>
                    <picture>
                      <img
                        className={styles.usersIcon}
                        src="/usersIcon 1.png"
                        alt="usersIcon"
                      />
                    </picture>
                  </div>
                  <div className={styles.distance}>{event.distance}m</div>
                </div>
              </div>
            </button>
          </div>
        ))}
    </div>
  );
}
