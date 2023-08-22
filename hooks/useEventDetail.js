import axios from "axios";
import { getCookie } from "cookies-next";
import useSWR from "swr";

export default function useEventDetail(eventId, latitude, longitude) {
  async function fetcher(url) {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${getCookie("access_token")}`,
      },
      params: {
        latitude,
        longitude,
      },
    });
    return response.data;
  }

  const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;
  const url = eventId ? `${apiDomain}/events/${eventId}` : null;
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (isLoading || error) {
    return null;
  }

  return data?.data;
}
