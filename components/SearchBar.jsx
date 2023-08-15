import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/searchBar.module.scss";

export default function SearchBar() {
  const [isSearch, setIsSearch] = useState(false);
  const handleClick = (e) => {
    e.stopPropagation();
    setIsSearch(true);
  };

  return (
    <div className={styles.searchBar}>
      {isSearch ? (
        <div className={styles.searchBarExtend}>
          <div className={styles.searchIconStartPoint}>
            <Image
              className={styles.searchicon}
              width={15}
              height={15}
              src="/searchIcon 2.png"
            />
            <input className={styles.input} placeholder="搜尋" />
          </div>
        </div>
      ) : (
        <div className={styles.searchBarUNExtend}>
          <input
            type="image"
            alt="Search Bar"
            src="/searchIcon 2.png"
            onClick={handleClick}
          />
        </div>
      )}
    </div>
  );
}
