import { useRef } from "react";
import Swal from "sweetalert2";
import styles from "@/styles/login.module.scss";
import useSignup from "@/hooks/useSignup";

const AccountState = {
  LoggingIn: 0,
  SigningUp: 1,
};

export default function SignupForm({ setAccountState }) {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const signup = useSignup();

  return (
    <form
      className={styles.form}
      onSubmit={async (e) => {
        e.preventDefault();
        const { error, data } = await signup(
          nameRef.current.value,
          emailRef.current.value,
          passwordRef.current.value,
        );

        const success = !error && data;
        if (success) {
          setAccountState(AccountState.LoggingIn);
        } else {
          Swal.fire({
            title: "Error",
            text: error?.message,
            icon: "error",
            confirmButtonText: "OK",
          });
        }
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
