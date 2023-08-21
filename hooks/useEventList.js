import useSWR from "swr";
import axios from "axios";

export default function useEventList(access_token, latitude, longitude) {
  const url = `${process.env.NEXT_PUBLIC_API_DOMAIN}/events`;

  const fetcher = async () => {
    const response = await axios.get(url, {
      params: { latitude, longitude },
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    return response.data;
  };

  const { data, error, isValidating } = useSWR(url, fetcher);

  return [data, isValidating, fetcher];
}
