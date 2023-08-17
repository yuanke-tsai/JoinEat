import styles from "@/styles/login.module.scss";

export default function LoginForm() {
  return (
    <form className={styles.form}>
      <div>
        <div>電子郵件</div>
        <input id="email" type="email" />
      </div>
      <div>
        <div>密碼</div>
        <input id="password" type="password" />
      </div>
      <button type="submit" className={styles.button}>
        登入
      </button>
    </form>
  );
}
