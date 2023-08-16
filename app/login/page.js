"use client";

import { Bungee } from "next/font/google";
import { useState } from "react";
import styles from "@/styles/login.module.scss";
import LoginForm from "@/components/LoginSignup/LoginForm";
import SignupForm from "@/components/LoginSignup/SignupForm";

const AccountState = {
  LoggingIn: 0,
  SigningUp: 1,
};

const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
});

export default function Login() {
  const [accountState, setAccountState] = useState(AccountState.LoggingIn);

  return (
    <div className={styles.loginPage}>
      <h1 className={`${bungee.className} ${styles.title}`}>JoinEat</h1>
      <div className={styles.subTitle}>
        {accountState === AccountState.LoggingIn ? "會員登入" : "會員註冊"}
      </div>
      {accountState === AccountState.LoggingIn ? <LoginForm /> : <SignupForm />}
      <div className={styles.prompt}>
        {accountState === AccountState.LoggingIn
          ? "尚未成為會員？"
          : "已經是會員了? "}
        <button
          type="button"
          className={styles.link}
          onClick={() => {
            if (accountState === AccountState.SigningUp) {
              setAccountState(AccountState.LoggingIn);
            } else {
              setAccountState(AccountState.SigningUp);
            }
          }}
        >
          {accountState === AccountState.LoggingIn ? "會員註冊 " : "會員登入"}
        </button>
      </div>
    </div>
  );
}
