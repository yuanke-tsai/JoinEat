import styles from "../../styles/newGroupButton.module.scss";

export default function NewGroupButton() {
  return (
    <div className={styles.newGroupButton}>
      <button className={styles.buttonArea} type="submit">
        發起
      </button>
    </div>
  );
}
