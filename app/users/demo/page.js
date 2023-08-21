"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/user.module.scss";
import Edit from "@/components/Icons/Edit";
import LeftArrow from "@/components/Icons/LeftArrow";
import Group from "@/components/Group";

const tags = ["寫程式", "咖啡", "火鍋", "小熊維尼", "聖鬥士"];

export default function LoginPage() {
  return (
    <div className={styles.page}>
      <div className={styles.titleBar}>
        <Link href="/" className={styles.button}>
          <LeftArrow />
        </Link>
        <div>個人資料</div>
        <button type="button" className={styles.button}>
          <Edit />
        </button>
      </div>
      <Image src="/profileIcon.png" width={80} height={80} />
      <div className={styles.name}>抽抽</div>
      <div className={styles.intro}>嗨我是抽抽，這是我的自我介紹。</div>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <div className={styles.tag}>{tag}</div>
        ))}
      </div>
      <div className={styles.infoBar}>
        <div className={styles.info}>
          <div className={styles.number}>13</div>
          <div className={styles.text}>參加聚餐</div>
        </div>
        <div className={styles.info}>
          <div className={styles.number}>2</div>
          <div className={styles.text}>發起聚餐</div>
        </div>
      </div>
      <div className={styles.subTitle}>聚餐歷史紀錄</div>
      <div className={styles.groups}>
        <Group
          setGoEvent={null}
          isButtonDisable
          shop_name="test"
          eventName="test"
        />
        <Group
          setGoEvent={null}
          isButtonDisable
          shop_name="test"
          eventName="test"
        />
        <Group
          setGoEvent={null}
          isButtonDisable
          shop_name="test"
          eventName="test"
        />
      </div>
    </div>
  );
}
