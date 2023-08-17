import { useRef } from "react";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import styles from "@/styles/login.module.scss";
import useLogin from "@/hooks/useLogin";

export default function LoginForm() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const router = useRouter();
  const login = useLogin();

  return (
    <form
      className={styles.form}
      onSubmit={async (e) => {
        e.preventDefault();

        const { error, data } = await login(
          emailRef.current.value.trim(),
          passwordRef.current.value.trim(),
        );

        const success = !error && data;
        if (success) {
          setCookie("access_token", data.data.access_token, { maxAge: 3600 });
          setCookie("user_id", data.data.user.id, { maxAge: 3600 });
          router.push("/");
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
