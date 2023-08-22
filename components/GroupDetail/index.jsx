import { getCookie } from "cookies-next";
import Member from "./Member";
import Button from "../Button";
import Cancel from "../Icons/Cancel";
import styles from "@/styles/groupDetail.module.scss";
import useEventDetail from "@/hooks/useEventDetail";

export default function GroupDetail({ center, setActiveEventId, eventId }) {
  const eventDetail = useEventDetail(eventId, center.lat, center.lng);
  const isJoined = eventDetail && eventDetail.is_joined;

  const handleJoined = (e) => {
    e.preventDefault();
  };

  const handleCopy = (e) => {
    e.preventDefault();
    // 執行copy
  };

  const handleDeletEvent = (e) => {
    e.preventDefault();
    // 執行 axios.delete
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
      <Button text="取消" callback={handleJoined} />
    ) : (
      <Button text="加入" callback={handleJoined} />
    );
  }

  return (
    <div className={styles.groupToCenter}>
      <div className={styles.titleBar}>
        <div className={styles.title}>參加者</div>
        <button
          type="button"
          onClick={() => {
            setActiveEventId(null);
          }}
        >
          <Cancel />
        </button>
      </div>
      <div className={styles.members}>
        {eventDetail?.participants.map((member) => (
          <Member key={member.id} name={member.name} picture={member.picture} />
        ))}
      </div>
      <div className={styles.content}>{content}</div>
    </div>
  );
}
