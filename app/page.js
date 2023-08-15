"use client";

import MapWrapper from "@/components/MapWrapper";
import Groups from "@/components/Groups";
import SearchBar from "@/components/SearchBar";
import SearchBarById from "@/components/SearchBarById";
import NewGroupButton from "@/components/NewGroupButton";
import NewGroupTime from "@/components/NewGroupTime";
import NewGroupDate from "@/components/NewGroupDate";
import NewGroupLimit from "@/components/NewGroupLimit";

export default function Home() {
  // isNewGroup? -> render other components
  return (
    <div style={{ position: "relative" }}>
      <MapWrapper />
      <SearchBarById />
      <Groups />
      <NewGroupButton />
      <NewGroupTime />
      <NewGroupDate />
      <NewGroupLimit />
    </div>
  );
}
