import axios from "axios";

async function login(email, password) {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}/users/signin`,
      {
        email,
        password,
      },
    );

    return { error: undefined, data: res.data };
  } catch (error) {
    const { status } = error.response;

    if (status === 400) {
      return { error: new Error("使用者不存在"), data: null };
    }

    if (status === 403) {
      return { error: new Error("電子郵件或密碼錯誤"), data: null };
    }

    if (status === 500) {
      return { error: new Error("伺服器錯誤，請稍後再試"), data: null };
    }

    return { error, data: null };
  }
}

export default function useLogin() {
  return login;
}
