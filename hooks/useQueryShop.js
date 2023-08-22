import useSWR from "swr";
import axios from "axios";

export default function useQueryShop(
  access_token,
  latitude,
  longitude,
  latitudeShop,
  longitudeShop,
) {
  const url = `${process.env.NEXT_PUBLIC_API_DOMAIN}/events/shop`;

  // const responseData = { latitude: 25.0379173, longitude: 121.5324211 };
  const responseData = { latitude: latitudeShop, longitude: longitudeShop };

  const fetcher = async () => {
    const response = await axios.post(url, responseData, {
      params: { latitude, longitude },
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    return response.data;
  };

  const { data, mutate, isValidating } = useSWR(url, fetcher);

  return { data, mutate, isLoading: isValidating };
}
