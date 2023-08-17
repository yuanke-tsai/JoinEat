import Image from "next/image";
import styles from "../../styles/candidate.module.scss";

export default function Candidate() {
  return (
    <div className={styles.candidate}>
      <Image src="/profileIcon.jpg" alt="user" />
      <div>XXX</div>
    </div>
  );
}
