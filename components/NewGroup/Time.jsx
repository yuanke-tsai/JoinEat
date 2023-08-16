import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styles from "../../styles/newGroupTime.module.scss";

export default function Time() {
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
  const [selectHour, setSelectHour] = useState(hourOptions[13]);
  const [selectMinute, setSelectMinute] = useState(minuteOptions[6]);
  console.log(selectMinute);

  const handleClickHour = (e) => {
    setSelectHour(e.target.value);
  };
  const handleClickMinute = (e) => {
    setSelectMinute(e.target.value);
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
              value={selectHour}
              onChange={handleClickHour}
            >
              {hourOptions.map((hour) => (
                <MenuItem key={hour} value={hour}>
                  {hour}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          :
          <FormControl size="small">
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={selectMinute}
              onChange={handleClickMinute}
            >
              {minuteOptions.map((minute) => (
                <MenuItem key={minute} value={minute}>
                  {minute}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
}
