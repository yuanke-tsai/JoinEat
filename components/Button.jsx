import styles from "../styles/newGroupButton.module.scss";

export default function Button({ text, callback, status }) {
  const dynamicButton = status ? styles.buttonAreaGray : styles.buttonArea;
  return (
    <div className={styles.newGroupButton}>
      <button className={dynamicButton} type="submit" onClick={callback}>
        {text}
      </button>
    </div>
  );
}
