import { useRef } from "react";
import axios from "axios";
import styles from "@/styles/login.module.scss";

export default function LoginForm() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  return (
    <form
      className={styles.form}
      onSubmit={async (e) => {
        e.preventDefault();

        const data = await axios.post(
          "https://13.54.3.89/api/1.0/users/signin",
          {
            email: emailRef.current.value,
            password: passwordRef.current.value,
          },
        );
        console.log(data);
        // TODO: save access_token as cookie
      }}
    >
      <div>
        <div>電子郵件</div>
        <input ref={emailRef} id="email" type="email" />
      </div>
      <div>
        <div>密碼</div>
        <input ref={passwordRef} id="password" type="password" />
      </div>
      <button type="submit" className={styles.button}>
        登入
      </button>
    </form>
  );
}
