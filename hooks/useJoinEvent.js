import axios from "axios";
import { getCookie } from "cookies-next";

const access_token = getCookie("access_token");

async function joinEvent(eventId) {
  const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;
  await axios.post(
    `${apiDomain}/events/${eventId}/join`,
    {},
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    },
  );
}

export default function useJoinEvent() {
  return joinEvent;
}
