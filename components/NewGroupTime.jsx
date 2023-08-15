import { useState } from "react";
import Hour from "./Hour";
import Minute from "./Minute";
import styles from "../styles/newGroupTime.module.scss";

export default function NewGroupTime() {
  const [selectHour, setSelectHour] = useState("00");
  const [selectMinute, setSelectMinute] = useState("00");

  console.log(selectMinute);

  const [isVisibleHours, setIsVisibleHours] = useState(false);
  const [isVisibleMinutes, setIsVisibleMinutes] = useState(false);
  const handleClickHour = () => {
    setIsVisibleHours(true);
  };
  const handleClickMinute = () => {
    setIsVisibleMinutes(true);
  };
  return (
    <div className={styles.groupToCenter}>
      <div className={styles.newGroupTime}>
        <div className={styles.timeTitle}>
          <p>集合時間</p>
        </div>
        <div className={styles.timeSelector}>
          <button
            className={styles.hourSelect}
            type="button"
            onClick={handleClickHour}
          >
            {selectHour}
          </button>
          {/* {isVisibleHours === true && (
            <Hour
              setSelectHour={setSelectHour}
              setIsVisibleHours={setIsVisibleHours}
            />
          )} */}
          :
          <button
            className={styles.minuteSelect}
            type="button"
            onClick={handleClickMinute}
          >
            {selectMinute}
          </button>
          {isVisibleMinutes === true && (
            <Minute
              setSelectMinute={setSelectMinute}
              setIsVisibleMinutes={setIsVisibleMinutes}
            />
          )}
        </div>
        <div className={styles.selector}>
          {isVisibleHours === true && (
            <Hour
              setSelectHour={setSelectHour}
              setIsVisibleHours={setIsVisibleHours}
            />
          )}
        </div>
      </div>
    </div>
  );
}

// <select
//               // className={styles.hourSelect}
//               onChange={(e) => {
//                 setSelectHour(e.target.value);
//               }}
//               value={selectHour}
//             >
//               {hourOptions.map((hour) => (
//                 <option style={{ fontSize: "40px" }} key={hour} value={hour}>
//                   {hour}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <select
//             className={styles.minuteSelect}
//             onChange={(e) => {
//               setSelectMinute(e.target.value);
//             }}
//             value={selectMinute}
//           >
//             {minuteOptions.map((minute) => (
//               <option key={minute} value={minute}>
//                 {minute}
//               </option>
//             ))}
//           </select>
