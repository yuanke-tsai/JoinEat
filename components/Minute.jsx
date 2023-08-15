import styles from "../styles/hour.module.scss";

export default function Minute({ setSelectMinute, setIsVisibleMinutes }) {
  const minuteOptions = [
    "00",
    "05",
    "10",
    "15",
    "20",
    "25",
    "30",
    "35",
    "40",
    "45",
    "50",
    "55",
  ];
  const handleClick = (minute) => {
    setSelectMinute(minute);
    setIsVisibleMinutes(false);
  };

  return (
    <div className={styles.hourCenter}>
      {minuteOptions.map((minute) => (
        <button
          type="button"
          className={styles.hour}
          key={minute}
          value={minute}
          onClick={() => handleClick(minute)}
        >
          {minute}
        </button>
      ))}
    </div>
  );
}
