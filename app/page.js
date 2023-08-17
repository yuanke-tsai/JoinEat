"use client";

import { useEffect, useState } from "react";
import MapWrapper from "@/components/MapWrapper";
import Groups from "@/components/Groups";
import SearchBar from "@/components/SearchBar";
import SearchBarById from "@/components/SearchBarById";
import NewGroups from "@/components/NewGroups";
import LaunchGroup from "@/components/LaunchGroup/LaunchGroup";
import CandidateList from "@/components/Candidate/CandidateList";

export default function Home() {
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
      <MapWrapper />
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
