import axios from "axios";
import { getCookie } from "cookies-next";

async function updateProfile(introduction, tags) {
  const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;
  await axios.put(
    `${apiDomain}/users/profile`,
    {
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
