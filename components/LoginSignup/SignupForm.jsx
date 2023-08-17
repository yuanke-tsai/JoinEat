import styles from "@/styles/login.module.scss";

export default function SignupForm() {
  return (
    <form className={styles.form}>
      <div>
        <div>使用者名稱</div>
        <input id="name" type="text" />
      </div>
      <div>
        <div>電子郵件</div>
        <input id="email" type="email" />
      </div>
      <div>
        <div>密碼</div>
        <input id="password" type="password" />
      </div>
      <div>
        <div>再次輸入密碼</div>
        <input id="password-check" type="password" />
      </div>
      <button type="submit" className={styles.button}>
        註冊
      </button>
    </form>
  );
}
