import Group from "./Group";
import styles from "../styles/groups.module.scss";

export default function Groups({ setGoEvent, isButtonDisable }) {
  return (
    <div className={styles.groups}>
      <Group setGoEvent={setGoEvent} isButtonDisable={isButtonDisable} />
    </div>
  );
}
