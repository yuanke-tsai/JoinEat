import axios from "axios";
import { getCookie } from "cookies-next";

async function updateProfile(name, introduction, tags) {
  const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;
  const userId = getCookie("user_id");
  await axios.post(
    `${apiDomain}/users/${userId}`,
    {
      name,
      introduction,
      tags,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("access_token")}`,
      },
    },
  );
}

export default function useUpdateProfile() {
  return updateProfile;
}
