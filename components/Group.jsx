// import Image from "next/image";
import styles from "../styles/group.module.scss";

export default function Group({
  eventTime,
  eventDistance,
  setActiveEventId,
  eventId,
  shop_name,
  eventName,
  people_joined,
  people_limit,
}) {
  const handleClickEvent = (e) => {
    e.preventDefault();
    setActiveEventId(eventId);
  };

  return (
    <div>
      <button
        type="submit"
        style={{
          border: "none",
          backgroundColor: "transparent",
          cursor: "pointer",
        }}
        onClick={handleClickEvent}
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
                {eventTime !== undefined && (
                  <p>
                    {eventTime.hour}:{eventTime.minute}
                  </p>
                )}
                {/* {eventTime.hour}:{eventTime.minute} */}
              </div>
              <div className={styles.eventDate}>
                {eventTime !== undefined && (
                  <p>
                    {eventTime.month}/{eventTime.date}
                  </p>
                )}
              </div>
            </div>
            <div className={styles.names}>
              <div className={styles.nameGroup}>{eventName}</div>
              <div className={styles.nameResturant}>{shop_name}</div>
            </div>
          </div>
          <div className={styles.detailInfo}>
            <div className={styles.peopleLimit}>
              <p>
                {people_joined}/{people_limit}
              </p>
              <picture>
                <img
                  className={styles.usersIcon}
                  src="/usersIcon 1.png"
                  alt="usersIcon"
                />
              </picture>
            </div>
            {eventDistance && (
              <div className={styles.distance}>{eventDistance}m</div>
            )}
          </div>
        </div>
      </button>
    </div>
  );
}
