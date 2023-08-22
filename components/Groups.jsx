import { use, useEffect, useState } from "react";
import Group from "./Group";
import useEventList from "@/hooks/useEventList";
import useQueryShop from "@/hooks/useQueryShop";
import styles from "../styles/groups.module.scss";
import GroupEventsList from "./GroupEventsList";
import GroupQueryShopList from "./GroupQueryShopList";

export default function Groups({
  access_token,
  setGoEvent,
  isButtonDisable,
  latitude,
  longitude,
  position,
}) {
  // let eventList;
  const [content, setContent] = useState();

  useEffect(() => {
    if (position === undefined) {
      // const { data: eventList } = useEventList(access_token, latitude, longitude);
      setContent(
        <GroupEventsList
          setGoEvent={setGoEvent}
          isButtonDisable={isButtonDisable}
          access_token={access_token}
          latitude={latitude}
          longitude={longitude}
        />,
      );
    } else {
      console.log('has position')
      setContent(
        <GroupQueryShopList
          setGoEvent={setGoEvent}
          isButtonDisable={isButtonDisable}
          access_token={access_token}
          latitude={latitude}
          longitude={longitude}
          latitudeShop={position.lat}
          longitudeShop={position.lng}
        />,
      );
    }
  }, [
    position,
    position?.lat,
    access_token,
    setGoEvent,
    isButtonDisable,
    latitude,
    longitude,
  ]);

  return (
    <div className={styles.groups}>
      {content}
      {/* {position === undefined ? (
        <GroupEventsList
          setGoEvent={setGoEvent}
          isButtonDisable={isButtonDisable}
          access_token={access_token}
          latitude={latitude}
          longitude={longitude}
        />
      ) : (
        <GroupQueryShopList
          setGoEvent={setGoEvent}
          isButtonDisable={isButtonDisable}
          access_token={access_token}
          latitude={latitude}
          longitude={longitude}
          latitudeShop={position.lat}
          longitudeShop={position.lng}
        />
      )} */}
    </div>
  );
}
