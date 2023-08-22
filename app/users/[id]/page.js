"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { getCookie } from "cookies-next";
import { useSWRConfig } from "swr";

import styles from "@/styles/user.module.scss";
import Edit from "@/components/Icons/Edit";
import LeftArrow from "@/components/Icons/LeftArrow";
import Group from "@/components/Group";
import useProfile from "@/hooks/useProfile";
import useHistory from "@/hooks/useHistory";
import useUpdateProfile from "@/hooks/useUpdateProfile";
import GroupDetail from "@/components/GroupDetail";

export default function ProfilePage({ params }) {
  const [isEditing, setIsEditing] = useState(false);
  const introductionRef = useRef(null);
  const tagsRef = useRef(null);
  const profile = useProfile(params.id);
  const events = useHistory(params.id, 0, 0);
  const updateProfile = useUpdateProfile();
  const { mutate } = useSWRConfig();
  const [activeEventId, setActiveEventId] = useState(null);

  const [editable, setEditable] = useState(false);
  useEffect(() => {
    setEditable(params.id === getCookie("user_id"));
  }, [params.id]);

  console.log(profile?.image);

  return (
    <div className={styles.page}>
      <div className={styles.titleBar}>
        <Link href="/" className={styles.button}>
          <LeftArrow />
        </Link>
        <div>個人資料</div>
        {editable ? (
          <button
            type="button"
            className={styles.button}
            onClick={() => {
              setIsEditing(!isEditing);
            }}
          >
            <Edit />
          </button>
        ) : (
          <div className={styles.buffer} />
        )}
      </div>
      <Image src="/profileIcon.png" width={80} height={80} />
      <div className={styles.name}>{profile?.name}</div>
      {isEditing ? (
        <>
          <textarea
            ref={introductionRef}
            defaultValue={profile.introduction}
            className={styles.editing}
          />
          <textarea
            ref={tagsRef}
            defaultValue={profile.tags}
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
              onClick={async () => {
                await updateProfile(
                  introductionRef.current.value,
                  tagsRef.current.value,
                );
                const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;
                mutate(`${apiDomain}/users/${profile.id}`);
                setIsEditing(false);
              }}
            >
              確認
            </button>
          </div>
        </>
      ) : (
        <>
          <div className={styles.introduction}>{profile?.introduction}</div>
          <div className={styles.tags}>
            {profile?.tags &&
              profile.tags
                .split(",")
                .map((tag) => <div className={styles.tag}>{tag}</div>)}
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
        {events &&
          events.map((event) => (
            <Group
              eventTime={event.appointment_time}
              eventDistance={null}
              setActiveEventId={setActiveEventId}
              eventId={event.id}
              shop_name={event.shop_name}
              eventName={event.name}
              people_joined={event.people_joined}
              people_limit={event.people_limit}
            />
          ))}
      </div>
      {activeEventId && (
        <GroupDetail
          center={{ lat: 0, lng: 0 }}
          setActiveEventId={setActiveEventId}
          isHistory
          eventId={activeEventId}
        />
      )}
    </div>
  );
}
