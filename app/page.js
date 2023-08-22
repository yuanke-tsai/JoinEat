"use client";

import { lazy, useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import MapWrapper from "@/components/MapWrapper";
import Groups from "@/components/Groups";
import SearchBarById from "@/components/SearchBarById";
// import NewGroups from "@/components/NewGroups";
import LaunchGroup from "@/components/LaunchGroup/LaunchGroup";
import CandidateList from "@/components/Candidate/CandidateList";
import useEventList from "@/hooks/useEventList";

export default function Home() {
  const access_token = getCookie("access_token");
  const [options, setOptions] = useState();
  const [shop_name, setShopName] = useState();
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [goEvent, setGoEvent] = useState(false);
  const [content, setContent] = useState(null);

  useEffect(() => {
    if (options?.position === undefined && center.lat !== 0) {
      if (!goEvent) {
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
        setContent(<CandidateList />);
      }
    }
    if (options?.position !== undefined && center.lat !== 0) {
      // console.log(center.lat)
      // 拿position 去做 Groups，如果沒有東西則...
      if (!goEvent) {
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
      } else {
        setContent(<CandidateList />);
      }
    } else {
      console.log("loading");
    }
  }, [options, goEvent, center, options?.position?.lng]);

  return (
    <div style={{ position: "relative" }}>
      <MapWrapper
        center={center}
        setCenter={setCenter}
        options={options}
        setOptions={setOptions}
        setShopName={setShopName}
      />
      <SearchBarById />
      {content}
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
