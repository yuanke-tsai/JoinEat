"use client";

import { useEffect, useState } from "react";
import MapWrapper from "@/components/MapWrapper";
import Groups from "@/components/Groups";
import SearchBarById from "@/components/SearchBarById";

import NewGroups from "@/components/NewGroups";
import LaunchGroup from "@/components/LaunchGroup/LaunchGroup";
// import CandidateList from "@/components/Candidate/CandidateList";

export default function Home() {
  const [options, setOptions] = useState();
  // 用options?.location來判斷要顯示哪些團:
  // if options?.location === undefine：顯示全部公開團
  // else：顯示餐廳座標為options.position的團

  useEffect(() => {
    console.log(options?.position);
  }, [options]);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [goEvent, setGoEvent] = useState(false);
  let content = null;

  if (!goEvent) {
    content = <Groups setGoEvent={setGoEvent} />;
  } else {
    content = !isNewGroup ? (
      <NewGroups setIsNewGroup={setIsNewGroup} setGoEvent={setGoEvent} />
    ) : (
      <LaunchGroup />
    );
  }

  return (
    <div style={{ position: "relative" }}>
      <MapWrapper options={options} setOptions={setOptions} />
      <SearchBarById />
      {content}
      {/* <Groups setGoEvent={setGoEvent} />
      {!isNewGroup ? (
        <NewGroups setIsNewGroup={setIsNewGroup} setGoEvent={setGoEvent} />
      ) : (
        <LaunchGroup />
      )} */}
      {/* <CandidateList /> */}
    </div>
  );
}
