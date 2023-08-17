"use client";

import { useEffect, useState } from "react";
import MapWrapper from "@/components/MapWrapper";
// import Groups from "@/components/Groups";
import SearchBarById from "@/components/SearchBarById";
import NewGroup from "@/components/NewGroup/NewGroup";
// import CandidateList from "@/components/Candidate/CandidateList";

export default function Home() {
  const [options, setOptions] = useState();
  // 用options?.location來判斷要顯示哪些團:
  // if options?.location === undefine：顯示全部公開團
  // else：顯示餐廳座標為options.position的團

  useEffect(() => {
    console.log(options?.position);
  }, [options]);

  // isNewGroup? -> render other components
  return (
    <div style={{ position: "relative" }}>
      <MapWrapper options={options} setOptions={setOptions} />
      <SearchBarById />
      {/* <Groups /> */}
      <NewGroup />
      {/* <CandidateList /> */}
    </div>
  );
}
