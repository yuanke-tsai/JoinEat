import styles from "../../styles/LaunchEventName.module.scss";

export default function EventName({ eventName, callback }) {
  return (
    <div className={styles.groupToCenter}>
      <div className={styles.newGroupTime}>
        <div className={styles.timeTitle}>
          <p>活動名稱</p>
          <input
            type="text"
            placeholder="請輸入活動名稱"
            className={styles.eventName}
            value={eventName}
            onChange={callback}
          />
        </div>
      </div>
    </div>
  );
}
