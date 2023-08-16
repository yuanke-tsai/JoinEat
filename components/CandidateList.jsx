import Candidate from "./Candidate";
import styles from "../styles/candidateList.module.scss";

export default function CandidateList() {
  return (
    <div className={styles.groupToCenter}>
      <div className={styles.candidateList}>
        <div className={styles.title}>
          <p>人數上限</p>
        </div>
        <div className={styles.candidate}>
          <Candidate />
        </div>
      </div>
    </div>
  );
}
