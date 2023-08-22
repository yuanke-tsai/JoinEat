import axios from "axios";
import { getCookie } from "cookies-next";
import useSWR from "swr";

async function fetcher(url) {
  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${getCookie("access_token")}`,
    },
  });
  return response.data;
}

export default function useProfile(userId) {
  const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;
  const url = userId ? `${apiDomain}/users/${userId}` : null;
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (isLoading || error) {
    return null;
  }

  return data?.data?.user;
}
