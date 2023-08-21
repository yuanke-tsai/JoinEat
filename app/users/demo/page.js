"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import styles from "@/styles/user.module.scss";
import Edit from "@/components/Icons/Edit";
import LeftArrow from "@/components/Icons/LeftArrow";
import Group from "@/components/Group";

const profileData = {
  user: {
    user_id: "8ceb3d97-50e8-4a5c-8919-2b61bac02cb9",
    name: "抽抽",
    email: "test@test.com",
    picture: "some_url",
    introduction: "嗨我是抽抽，這是我的自我介紹。",
    tags: "寫程式,咖啡,火鍋,小熊維尼,聖鬥士",
  },
};

const historyData = {
  events: [
    {
      event_id: "111111111",
      host_id: "something",
      name: "沒人可以打敗麥噹噹",
      shop_name: "某家麥當勞",
      latitude: 25.0388368,
      longitude: 121.5325665,
      people_limit: 6,
      people_num: 6,
      distance: 0.0,
      appointment_time: {
        year: 2023,
        month: 8,
        date: 15,
        hour: 18,
        minute: 30,
      },
    },
    {
      event_id: "222222222",
      host_id: "something",
      name: "麥噹噹 YYDS",
      shop_name: "麥當勞-台北濟南餐廳",
      latitude: 25.0400737,
      longitude: 121.53261,
      people_limit: 4,
      people_num: 2,
      distance: 502.3,
      appointment_time: {
        year: 2023,
        month: 8,
        date: 15,
        hour: 18,
        minute: 30,
      },
    },
  ],
};

export default function LoginPage() {
  const [isEditing, setIsEditing] = useState(false);
  const introductionRef = useRef(null);
  const tagsRef = useRef(null);

  return (
    <div className={styles.page}>
      <div className={styles.titleBar}>
        <Link href="/" className={styles.button}>
          <LeftArrow />
        </Link>
        <div>個人資料</div>
        <button
          type="button"
          className={styles.button}
          onClick={() => {
            setIsEditing(!isEditing);
          }}
        >
          <Edit />
        </button>
      </div>
      <Image src="/profileIcon.png" width={80} height={80} />
      <div className={styles.name}>抽抽</div>
      {isEditing ? (
        <>
          <textarea
            ref={introductionRef}
            defaultValue={profileData.user.introduction}
            className={styles.editing}
          />
          <textarea
            ref={tagsRef}
            defaultValue={profileData.user.tags}
            className={styles.editing}
          />
          <div className={styles.buttonWrapper}>
            <button
              className={styles.white}
              type="button"
              onClick={() => {
                setIsEditing(false);
              }}
            >
              取消
            </button>
            <button
              className={styles.black}
              type="button"
              onClick={() => {
                // TODO: update profile API
                console.log(tagsRef.current.value);
                console.log(introductionRef.current.value);
                setIsEditing(false);
              }}
            >
              確認
            </button>
          </div>
        </>
      ) : (
        <>
          <div className={styles.introduction}>
            {profileData.user.introduction}
          </div>
          <div className={styles.tags}>
            {profileData.user.tags.split(",").map((tag) => (
              <div className={styles.tag}>{tag}</div>
            ))}
          </div>
        </>
      )}
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
        {historyData.events.map((event) => (
          <Group
            eventTime={event.appointment_time}
            eventDistance={event.distance}
            setGoEvent={null}
            isButtonDisable
            shop_name={event.shop_name}
            eventName={event.name}
            people_joined={event.people_num}
            people_limit={event.people_limit}
          />
        ))}
      </div>
    </div>
  );
}
