import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import styles from "../../styles/LaunchGroupPublic.module.scss";

export default function Public({ handleClickPublic }) {
  return (
    <div className={styles.groupToCenter}>
      <div className={styles.newGroupTime}>
        <div className={styles.timeTitle}>
          <p>設為公開</p>
          <div className={styles.checkbox}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox size="small" />}
                onChange={handleClickPublic}
              />
            </FormGroup>
          </div>
        </div>
      </div>
    </div>
  );
}
