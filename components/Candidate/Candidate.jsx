// import Image from "next/image";
import styles from "../../styles/candidate.module.scss";

export default function Candidate() {
  return (
    <div className={styles.candidate}>
      <picture>
        <img src="/profileIcon.jpg" alt="user" />
      </picture>
      <div>XXX</div>
    </div>
  );
}
