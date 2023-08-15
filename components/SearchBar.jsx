import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/searchBar.module.scss";

export default function SearchBar() {
  const [isSearch, setIsSearch] = useState(false);

  return (
    <div className={`${styles.searchBar} ${isSearch && styles.extend}`}>
      <Image
        className={styles.searchIcon}
        width={15}
        height={15}
        src="/searchIcon 2.png"
        onClick={() => {
          setIsSearch(true);
        }}
      />
      {isSearch && <input className={styles.input} placeholder="搜尋餐廳" />}
    </div>
  );
}
