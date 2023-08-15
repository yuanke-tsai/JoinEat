import styles from "../styles/hour.module.scss";

export default function Hour({ setSelectHour, setIsVisibleHours }) {
  const hourOptions = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
  ];

  const handleClick = (hour) => {
    setSelectHour(hour);
    setIsVisibleHours(false);
  };

  return (
    <div className={styles.hourCenter}>
      {hourOptions.map((hour) => (
        <button
          type="button"
          className={styles.hour}
          key={hour}
          value={hour}
          onClick={() => handleClick(hour)}
        >
          {hour}
        </button>
      ))}
    </div>
  );
}
