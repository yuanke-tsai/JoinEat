"use client";

import { useEffect, useState } from "react";
import MapWrapper from "@/components/MapWrapper";
import Groups from "@/components/Groups";
import SearchBarById from "@/components/SearchBarById";
// import NewGroups from "@/components/NewGroups";
import LaunchGroup from "@/components/LaunchGroup/LaunchGroup";
import CandidateList from "@/components/Candidate/CandidateList";

export default function Home() {
  const [options, setOptions] = useState();
  const [shop_name, setShopName] = useState();
  console.log(shop_name);
  // 用options?.location來判斷要顯示哪些團:
  // if options?.location === undefine：顯示全部公開團
  // else：顯示餐廳座標為options.position的團
  // const [isNewGroup, setIsNewGroup] = useState(false);
  const [goEvent, setGoEvent] = useState(false);
  const [content, setContent] = useState(null);

  useEffect(() => {
    console.log(options?.position);
    // console.log(options?.position);
    if (options?.position === undefined) {
      if (!goEvent) {
        setContent(<Groups setGoEvent={setGoEvent} />);
      } else {
        setContent(<CandidateList />);
      }
    } else {
      // 檢查 options 存不存在

      // 存在 if goEvent <Group mapData />
      // 不存在 show create group button
      setContent(
        <LaunchGroup
          shop_name={shop_name}
          latitude={options?.position?.lat}
          longitude={options?.position?.lng}
        />,
      );
      console.log("test");
    }
  }, [options, goEvent]);

  // 根據點擊 map 的資訊判斷
  // content = !isNewGroup ? (
  //     <NewGroups setIsNewGroup={setIsNewGroup} setGoEvent={setGoEvent} />
  //   ) : (
  //     <LaunchGroup />
  //   );
  return (
    <div style={{ position: "relative" }}>
      <MapWrapper
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
