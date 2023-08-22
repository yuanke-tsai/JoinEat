import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styles from "../../styles/LaunchGroupTime.module.scss";

export default function Limit({ people_limit, setPeopleLimit }) {
  const peopleOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleClick = (e) => {
    setPeopleLimit(e.target.value);
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
              value={people_limit}
              onChange={handleClick}
            >
              {peopleOptions.map((people) => (
                <MenuItem key={people} value={people}>
                  {people}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
}
