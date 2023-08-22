import styles from "../../styles/buttonLaunch.module.scss";

export default function ButtonLaunch({ textOne, textTwo, callback }) {
  return (
    <div className={styles.newGroupButton}>
      <button type="submit" onClick={callback} className={styles.button}>
        {textOne}
      </button>
      <button type="submit" onClick={callback} className={styles.button}>
        {textTwo}
      </button>
    </div>
  );
}
