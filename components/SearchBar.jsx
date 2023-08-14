import React, { useState } from 'react'
import styles from '../styles/searchBar.module.scss'

export default function SearchBar() {
    const [isSearch, setIsSearch] = useState(false);
    const handleClick=(e)=>{
        e.stopPropagation();
        setIsSearch(true)
    }
  return (
    <div className={styles.searchBar}>
        {isSearch===false?(
        <div className={styles.searchBarUNExtend}>
            <input className={styles.searchicon} type='image' src='/searchIcon 2.png' onClick={handleClick}></input>
        </div>
        ):(
        <div className={styles.searchBarExtend}>
            <div className={styles.searchIconStartPoint}>
                <img className={styles.searchicon} src='/searchIcon 2.png'></img>
                <input className={styles.input} placeholder='搜尋'></input>
            </div>
        </div>
        )}
    </div>
  )
}
