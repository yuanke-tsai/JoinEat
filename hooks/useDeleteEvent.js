import axios from "axios";
import { getCookie } from "cookies-next";

const access_token = getCookie("access_token");

async function deleteEvent(eventId) {
  const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;
  await axios.delete(`${apiDomain}/events/${eventId}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    },
  });
}

export default function useDeleteEvent() {
  return deleteEvent;
}
