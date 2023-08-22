import Image from "next/image";
import styles from "@/styles/member.module.scss";

export default function Member({ name, picture }) {
  return (
    <div className={styles.member}>
      <Image
        width={50}
        height={50}
        src={picture ?? "/profileIcon.png"}
        alt="user"
      />
      <div className={styles.name}>{name}</div>
    </div>
  );
}
