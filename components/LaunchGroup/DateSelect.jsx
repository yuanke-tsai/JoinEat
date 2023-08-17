import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styles from "../../styles/LaunchGroupTime.module.scss";

export default function DateSelect() {
  const monthOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const [selectMonth, setSelectMonth] = useState(monthOptions[6]);
  const [selectDate, setSelectDate] = useState(1);

  const daysInMonth = (month) => {
    const currentYear = new Date().getFullYear();
    if (month === 2) {
      return (currentYear % 4 === 0 && currentYear % 100 !== 0) ||
        currentYear % 400 === 0
        ? 29
        : 28;
    }
    return new Date(currentYear, month, 0).getDate();
  };

  const handleClickMonth = (e) => {
    setSelectMonth(e.target.value);
  };
  const handleClickDate = (e) => {
    setSelectDate(e.target.value);
  };
  return (
    <div className={styles.groupToCenter}>
      <div className={styles.newGroupTime}>
        <div className={styles.timeTitle}>
          <p>選擇日期</p>
        </div>
        <div className={styles.timeSelector}>
          <FormControl size="small">
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={selectMonth}
              onChange={handleClickMonth}
            >
              {monthOptions.map((hour) => (
                <MenuItem key={hour} value={hour}>
                  {hour}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          /
          <FormControl size="small">
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={selectDate}
              onChange={handleClickDate}
            >
              {Array.from(
                { length: daysInMonth(selectMonth) },
                (_, index) => index + 1,
              ).map((day) => (
                <MenuItem key={day} value={day}>
                  {day}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
}
