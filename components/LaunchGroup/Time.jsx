import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styles from "../../styles/LaunchGroupTime.module.scss";

export default function Time({
  hourOptions,
  minuteOptions,
  hour,
  minute,
  setHour,
  setMinute,
}) {
  const handleClickHour = (e) => {
    setHour(e.target.value);
  };
  const handleClickMinute = (e) => {
    setMinute(e.target.value);
  };
  return (
    <div className={styles.groupToCenter}>
      <div className={styles.newGroupTime}>
        <div className={styles.timeTitle}>
          <p>集合時間</p>
        </div>
        <div className={styles.timeSelector}>
          <FormControl size="small">
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={hour}
              onChange={handleClickHour}
            >
              {hourOptions.map((hr) => (
                <MenuItem key={hr} value={hr}>
                  {hr}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          :
          <FormControl size="small">
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={minute}
              onChange={handleClickMinute}
            >
              {minuteOptions.map((min) => (
                <MenuItem key={min} value={min}>
                  {min}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
}
