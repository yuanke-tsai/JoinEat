import Image from "next/image";
import styles from "../styles/group.module.scss";

export default function Group() {
  return (
    <div className={styles.group}>
      <div className={styles.basicInfo}>
        <Image
          className={styles.userImg}
          src="/profileIcon.jpg"
          alt="profile icon"
          width={40}
          height={40}
        />
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
          <div className={styles.nameGroup}>
            <p>一起吃飯惹啦</p>
          </div>
          <div className={styles.nameResturant}>
            <p>美而美</p>
          </div>
        </div>
      </div>
      <div className={styles.detailInfo}>
        <div className={styles.peopleLimit}>
          <p>3/4</p>
          <Image
            className={styles.usersIcon}
            src="/usersIcon 1.png"
            alt="user icon"
            width={15}
            height={15}
          />
        </div>
        <div className={styles.distance}>300m</div>
      </div>
    </div>
  );
}
