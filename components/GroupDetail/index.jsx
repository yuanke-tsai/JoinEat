import { getCookie } from "cookies-next";
import { mutate } from "swr";
import Member from "./Member";
import Button from "../Button";
import Cancel from "../Icons/Cancel";
import styles from "@/styles/groupDetail.module.scss";
import useEventDetail from "@/hooks/useEventDetail";
import Group from "../Group";
import useJoinEvent from "@/hooks/useJoinEvent";
import useQuitEvent from "@/hooks/useQuitEvent";
import useDeleteEvent from "@/hooks/useDeleteEvent";

export default function GroupDetail({
  center,
  setActiveEventId,
  eventId,
  isHistory,
}) {
  const eventDetail = useEventDetail(eventId, center.lat, center.lng);
  const isJoined = eventDetail && eventDetail.is_joined;
  const board = navigator.clipboard;
  const joinEvent = useJoinEvent();
  const quitEvent = useQuitEvent();
  const deleteEvent = useDeleteEvent();

  const handleJoin = async () => {
    await joinEvent(eventId);
    mutate(`${process.env.NEXT_PUBLIC_API_DOMAIN}/events`);
    mutate(`${process.env.NEXT_PUBLIC_API_DOMAIN}/events/shop`);
    setActiveEventId(null);
  };

  const handleQuit = async () => {
    await quitEvent(eventId);
    mutate(`${process.env.NEXT_PUBLIC_API_DOMAIN}/events`);
    mutate(`${process.env.NEXT_PUBLIC_API_DOMAIN}/events/shop`);
    setActiveEventId(null);
  };

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(eventId.toString());
    // 執行copy
    console.log("eventID", eventId);
    console.log("board", board);
  };

  const handleDeletEvent = () => {
    deleteEvent(eventId);
    mutate(`${process.env.NEXT_PUBLIC_API_DOMAIN}/events`);
    mutate(`${process.env.NEXT_PUBLIC_API_DOMAIN}/events/shop`);
    setActiveEventId(null);
  };

  let content = null;
  const isLauncher =
    eventDetail && eventDetail.host_id === getCookie("user_id");
  if (isLauncher) {
    content = (
      <div className={styles.buttons}>
        <Button text="複製團號" callback={handleCopy} />
        <Button text="解散此團" callback={handleDeletEvent} />
      </div>
    );
  } else {
    content = isJoined ? (
      <Button text="退出" callback={handleQuit} />
    ) : (
      <Button text="加入" callback={handleJoin} />
    );
  }

  return (
    <div className={styles.groupToCenter}>
      <div className={styles.titleBar}>
        <button
          type="button"
          onClick={() => {
            setActiveEventId(null);
          }}
        >
          <Cancel />
        </button>
      </div>
      {eventDetail && (
        <Group
          hostId={eventDetail.host_id}
          eventTime={eventDetail.appointment_time}
          eventDistance={eventDetail.distance}
          setActiveEventId={setActiveEventId}
          eventId={eventDetail.id}
          shop_name={eventDetail.shop_name}
          eventName={eventDetail.name}
          people_limit={eventDetail.people_limit}
          people_joined={eventDetail.people_joined}
        />
      )}
      <div className={styles.titleBar}>
        <div className={styles.title}>參加者</div>
      </div>
      <div className={styles.members}>
        {eventDetail?.participants.map((member) => (
          <Member
            key={member.id}
            id={member.id}
            name={member.name}
            picture={member.picture}
          />
        ))}
      </div>
      {!isHistory && <div className={styles.content}>{content}</div>}
    </div>
  );
}
