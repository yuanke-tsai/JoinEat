import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/member.module.scss";

export default function Member({ id, name, picture }) {
  return (
    <div className={styles.member}>
      <Link href={`/users/${id}`}>
        <div className={styles.imageWrapper}>
          <Image
            fill
            src={picture ?? "/profileIcon.png"}
            alt="user"
            className={styles.image}
          />
        </div>
      </Link>
      <div className={styles.name}>{name}</div>
    </div>
  );
}
