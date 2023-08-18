import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styles from "../../styles/LaunchGroupTime.module.scss";

export default function DateSelect({
  monthOptions,
  daysInMonth,
  month,
  date,
  setMonth,
  setDate,
}) {
  const handleClickMonth = (e) => {
    setMonth(e.target.value);
  };
  const handleClickDate = (e) => {
    setDate(e.target.value);
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
              value={month}
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
              value={date}
              onChange={handleClickDate}
            >
              {Array.from(
                { length: daysInMonth(month) },
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
