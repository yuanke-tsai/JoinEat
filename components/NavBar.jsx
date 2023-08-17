import Image from "next/image";
import styles from "@/styles/navBar.module.scss";

export default function NavBar() {
  return (
    <div className={styles.imageWrapper}>
      <Image
        width={25}
        height={25}
        src="/profileIcon 1.jpg"
        alt="profile icon"
        className={styles.profileIcon}
      />
    </div>
  );
}
