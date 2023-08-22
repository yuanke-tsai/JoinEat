import { useState } from "react";
import Member from "./Member";
import Button from "../Button";
import styles from "@/styles/groupDetail.module.scss";
import Cancel from "../Icons/Cancel";

export default function GroupDetail({ setGoEvent }) {
  const event_user = "tsai";
  const user = "robot";
  const [isJoined, setIsJoined] = useState(false);
  const handleJoined = (e) => {
    e.preventDefault();
    setIsJoined(!isJoined);
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
  const isLauncher = event_user === user;
  if (isLauncher) {
    content = (
      <div className={styles.groupDecision}>
        <Button text="複製團號" callback={handleCopy} status={isJoined} />
        <div style={{ width: "2%", margin: "0 2%" }} />
        <Button text="解散此團" callback={handleDeletEvent} status={isJoined} />
      </div>
    );
  } else {
    content = isJoined ? (
      <Button text="取消" callback={handleJoined} status={isJoined} />
    ) : (
      <Button text="加入" callback={handleJoined} status={isJoined} />
    );
  }

  return (
    <div className={styles.groupToCenter}>
      <div className={styles.titleBar}>
        <div className={styles.title}>參加者</div>
        <button
          type="button"
          onClick={() => {
            setGoEvent(false);
          }}
        >
          <Cancel />
        </button>
      </div>
      <div className={styles.members}>
        <Member />
        <Member />
        <Member />
        <Member />
        <Member />
        <Member />
      </div>
      <div className={styles.content}>{content}</div>
    </div>
  );
}
