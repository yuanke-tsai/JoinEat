import { useEffect, useState } from "react";
// import Group from "./Group";
// import useEventList from "@/hooks/useEventList";
// import useQueryShop from "@/hooks/useQueryShop";
import styles from "../styles/groups.module.scss";
import GroupEventsList from "./GroupEventsList";
import GroupQueryShopList from "./GroupQueryShopList";
import Button from "./Button";
import LaunchGroup from "./LaunchGroup/LaunchGroup";

export default function Groups({
  access_token,
  setGoEvent,
  isButtonDisable,
  latitude,
  longitude,
  position,
  shop_name,
}) {
  const text = "開新團";
  const [content, setContent] = useState();
  const [openGroup, setOpenGroup] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setOpenGroup(true);
  };

  useEffect(() => {
    if (position === undefined) {
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
      setContent(
        <GroupQueryShopList
          setGoEvent={setGoEvent}
          isButtonDisable={isButtonDisable}
          access_token={access_token}
          latitude={latitude}
          longitude={longitude}
          latitudeShop={position.lat}
          longitudeShop={position.lng}
          shop_name={shop_name}
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
  console.log(openGroup);
  return (
    <div className={styles.groups}>
      {/* {content} */}
      {openGroup === false ? (
        <div>
          {content}
          <Button text={text} callback={handleClick} />
        </div>
      ) : (
        <LaunchGroup
          shop_name={shop_name}
          latitude={position?.lat}
          longitude={position?.lng}
        />
      )}
      {/* if render launch */}
    </div>
  );
}
