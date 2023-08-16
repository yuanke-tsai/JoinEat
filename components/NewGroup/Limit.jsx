import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styles from "../../styles/newGroupTime.module.scss";

export default function NewGroupLimit() {
  const hourOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [selectHour, setSelectHour] = useState(4);

  const handleClickHour = (e) => {
    setSelectHour(e.target.value);
  };

  return (
    <div className={styles.groupToCenter}>
      <div className={styles.newGroupTime}>
        <div className={styles.timeTitle}>
          <p>人數上限</p>
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
        </div>
      </div>
    </div>
  );
}
