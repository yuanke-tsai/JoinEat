"use client";

import MapWrapper from "@/components/MapWrapper";
import Groups from "@/components/Groups";
import SearchBar from "@/components/SearchBar";
import SearchBarById from "@/components/SearchBarById";
import NewGroup from "@/components/NewGroup/NewGroup";
import Candidate from "@/components/Candidate";

export default function Home() {
  // isNewGroup? -> render other components
  return (
    <div style={{ position: "relative" }}>
      <MapWrapper />
      <SearchBarById />
      <Groups />
      {/* <NewGroup /> */}
      <Candidate />
    </div>
  );
}
