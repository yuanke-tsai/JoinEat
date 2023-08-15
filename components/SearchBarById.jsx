import { useEffect, useState } from "react";
import styles from "../styles/searchBarById.module.scss";

export default function SearchBarById() {
  const [searchGroup, setSearchGroup] = useState("");
  useEffect(() => {
    // 這裡要 get 可用 swr
    if (searchGroup !== "") {
      console.log(searchGroup);
    }
  }, [searchGroup]);
  return (
    <div className={styles.searchBarPosition}>
      <div className={styles.searchBar}>
        <div className={styles.searchIconStartPoint}>
          <img className={styles.searchIcon} src="/searchIcon 2.png"></img>
          <input
            className={styles.input}
            type="text"
            placeholder="以團號搜尋"
            value={searchGroup}
            onChange={(e) => setSearchGroup(e.target.value)}
          ></input>
        </div>
      </div>
    </div>
  );
}
