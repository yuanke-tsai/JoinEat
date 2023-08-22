"use client";

import { lazy, useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import MapWrapper from "@/components/MapWrapper";
import Groups from "@/components/Groups";
// import NewGroups from "@/components/NewGroups";
import LaunchGroup from "@/components/LaunchGroup/LaunchGroup";
import GroupDetail from "@/components/GroupDetail";
import useEventList from "@/hooks/useEventList";

export default function Home() {
  const access_token = getCookie("access_token");
  const [options, setOptions] = useState();
  const [shop_name, setShopName] = useState();
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [goEvent, setGoEvent] = useState(false);
  const [content, setContent] = useState(null);

  console.log(options?.position);
  useEffect(() => {
    if (center.lat === 0 && center.lng === 0) {
      console.log("loading");
      return;
    }

    if (!options?.position && !goEvent) {
      setContent(
        <Groups
          access_token={access_token}
          setGoEvent={setGoEvent}
          latitude={center.lat}
          longitude={center.lng}
          position={options?.position}
        />,
      );
    } else {
      // 檢查 options 存不存在

      // 存在 if goEvent <Group mapData />
      // 不存在 show create group button
      setContent(
        <Groups
          access_token={access_token}
          setGoEvent={setGoEvent}
          latitude={center.lat}
          longitude={center.lng}
          latitudeShop={options.position.lng}
          longitudeShop={options.position.lng}
          position={options?.position}
        />,
      );
    }
  }, [options, goEvent, center]);

  return (
    <div style={{ position: "relative", overflow: "hidden", height: "100%" }}>
      <MapWrapper
        center={center}
        setCenter={setCenter}
        options={options}
        setOptions={setOptions}
        setShopName={setShopName}
      />
      {content}
      {goEvent && <GroupDetail setGoEvent={setGoEvent} />}
      {/* <Groups setGoEvent={setGoEvent} />
      {!isNewGroup ? (
        <NewGroups setIsNewGroup={setIsNewGroup} setGoEvent={setGoEvent} />
      ) : (
        <LaunchGroup />
      )} */}
      {/* <CandidateList /> */}
      {/* <LaunchGroup shop_name={shop_name} /> */}
    </div>
  );
}
