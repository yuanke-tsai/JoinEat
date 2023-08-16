"use client";

import { useState } from "react";

const AccountState = {
  LoggingIn: 0,
  SigningUp: 1,
};

export default function Login() {
  const [accountState, setAccountState] = useState(AccountState.LoggingIn);

  return (
    <>
      <form>
        <div>
          Email
          <input id="email" type="email" />
        </div>
        <div>
          Password
          <input id="password" type="password" />
        </div>
        <button type="submit">
          {accountState === AccountState.LoggingIn ? "登入" : "註冊"}
        </button>
      </form>
      {accountState === AccountState.LoggingIn
        ? "尚未成為會員？"
        : "已經是會員了? "}
      <button
        type="button"
        className="text-[#5458F7]"
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
    </>
  );
}
