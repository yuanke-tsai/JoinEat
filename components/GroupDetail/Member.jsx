// import Image from "next/image";
import Image from "next/image";
import styles from "@/styles/member.module.scss";

export default function Member() {
  return (
    <div className={styles.member}>
      <Image width={50} height={50} src="/profileIcon.png" alt="user" />
      <div className={styles.name}>抽抽</div>
    </div>
  );
}
