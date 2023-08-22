import styles from "../styles/button.module.scss";

export default function Button({ text, callback }) {
  return (
    <div className={styles.newGroupButton}>
      <button type="submit" onClick={callback} className={styles.button}>
        {text}
      </button>
    </div>
  );
}
