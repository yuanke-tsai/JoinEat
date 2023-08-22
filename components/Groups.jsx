import { useEffect, useState } from "react";
// import Group from "./Group";
// import useEventList from "@/hooks/useEventList";
// import useQueryShop from "@/hooks/useQueryShop";
import styles from "../styles/groups.module.scss";
import SearchBarById from "./SearchBarById";
import GroupEventsList from "./GroupEventsList";
import GroupQueryShopList from "./GroupQueryShopList";
import Button from "./Button";
import LaunchGroup from "./LaunchGroup/LaunchGroup";

export default function Groups({
  access_token,
  isButtonDisable,
  latitude,
  longitude,
  position,
  shop_name,
  setActiveEventId,
  openGroup,
  setOpenGroup,
}) {
  const text = "開新團";
  const [content, setContent] = useState();

  const handleClick = (e) => {
    e.preventDefault();
    setOpenGroup(true);
  };

  useEffect(() => {
    if (position === undefined) {
      setContent(
        <GroupEventsList
          setActiveEventId={setActiveEventId}
          isButtonDisable={isButtonDisable}
          access_token={access_token}
          latitude={latitude}
          longitude={longitude}
        />,
      );
    } else {
      setContent(
        <>
          <GroupQueryShopList
            setActiveEventId={setActiveEventId}
            isButtonDisable={isButtonDisable}
            access_token={access_token}
            latitude={latitude}
            longitude={longitude}
            latitudeShop={position.lat}
            longitudeShop={position.lng}
            shop_name={shop_name}
          />
          <Button text={text} callback={handleClick} />
        </>,
      );
    }
  }, [
    position,
    position?.lat,
    access_token,
    isButtonDisable,
    latitude,
    longitude,
  ]);

  return (
    <>
      {!openGroup ? (
        content
      ) : (
        <LaunchGroup
          shop_name={shop_name}
          latitude={position?.lat}
          longitude={position?.lng}
          setOpenGroup={setOpenGroup}
        />
      )}
      {/* if render launch */}
    </>
  );
}
