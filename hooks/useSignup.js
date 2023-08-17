import axios from "axios";

async function signup(name, email, password) {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}/users/signup`,
      {
        name,
        email,
        password,
      },
    );

    return { error: undefined, data: res.data };
  } catch (error) {
    const { status } = error.response;

    if (status === 403) {
      return { error: new Error("Email已經使用過"), data: null };
    }

    if (status === 500) {
      return { error: new Error("伺服器錯誤，請稍後再試"), data: null };
    }

    return { error, data: null };
  }
}

export default function useSignup() {
  return signup;
}
