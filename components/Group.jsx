import Image from "next/image";
import styles from "../styles/group.module.scss";

export default function Group({ setGoEvent }) {
  const handleClickEvent = (e) => {
    e.preventDefault();
    setGoEvent(true);
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
            <img className={styles.userImg} src="/profileIcon.jpg" />
            <div className={styles.time}>
              <div className={styles.eventTime}>
                <p>08:00</p>
              </div>
              <div className={styles.eventDate}>
                <p>07/27</p>
              </div>
            </div>
            {/* <div className={styles.names}><p>多加精緻早午餐QQQQQ</p></div> */}
            <div className={styles.names}>
              <div className={styles.nameGroup}>一起吃飯惹啦啦</div>
              <div className={styles.nameResturant}>
                美而美美而美美而美美而美
              </div>
            </div>
          </div>
          <div className={styles.detailInfo}>
            <div className={styles.peopleLimit}>
              <p>3/4</p>
              <img className={styles.usersIcon} src="/usersIcon 1.png" />
            </div>
            <div className={styles.distance}>300m</div>
          </div>
        </div>
      </button>
    </div>
  );
}
