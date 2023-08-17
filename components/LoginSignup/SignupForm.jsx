import axios from "axios";
import { useRef } from "react";
import styles from "@/styles/login.module.scss";

export default function SignupForm() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();

        axios.post("https://13.54.3.89/api/1.0/users/signup", {
          name: nameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
        });
      }}
    >
      <div>
        <div>使用者名稱</div>
        <input ref={nameRef} id="name" type="text" />
      </div>
      <div>
        <div>電子郵件</div>
        <input ref={emailRef} id="email" type="email" />
      </div>
      <div>
        <div>密碼</div>
        <input ref={passwordRef} id="password" type="password" />
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
