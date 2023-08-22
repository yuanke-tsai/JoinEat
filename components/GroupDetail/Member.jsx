import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/member.module.scss";

export default function Member({ id, name, picture }) {
  return (
    <div className={styles.member}>
      <Link href={`/users/${id}`}>
        <Image
          width={50}
          height={50}
          src={picture ?? "/profileIcon.png"}
          alt="user"
        />
      </Link>
      <div className={styles.name}>{name}</div>
    </div>
  );
}
