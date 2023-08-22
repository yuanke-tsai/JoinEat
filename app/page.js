"use client";

import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import axios from "axios";
import MapWrapper from "@/components/MapWrapper";
import Groups from "@/components/Groups";
import SearchBarById from "@/components/SearchBarById";
import CandidateList from "@/components/Candidate/CandidateList";
import GroupsSearchResult from "@/components/GroupsSearchResult";

export default function Home() {
  const access_token = getCookie("access_token");
  const [options, setOptions] = useState();
  const [shop_name, setShopName] = useState();
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [goEvent, setGoEvent] = useState(false);
  const [content, setContent] = useState(null);
  const [keyword, setSearchGroup] = useState("");
  const [groupsSearchResult, setGroupsSearchResult] = useState("");

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
            shop_name={shop_name}
          />,
        );
      } else {
        setContent(<CandidateList />);
      }
    } else {
      console.log("loading");
    }
  }, [options, goEvent, center, options?.position?.lng]);
  console.log("goEvent", goEvent);

  useEffect(() => {
    if (keyword !== "") {
      console.log(keyword);
      axios
        .get(`${process.env.NEXT_PUBLIC_API_DOMAIN}/events/search`, {
          params: { keyword, latitude: center.lat, longitude: center.lng },
          headers: { Authorization: `Bearer ${access_token}` },
        })
        .then((response) => {
          console.log(response);
          setGroupsSearchResult(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [keyword]);
  return (
    <div style={{ position: "relative" }}>
      <MapWrapper
        center={center}
        setCenter={setCenter}
        options={options}
        setOptions={setOptions}
        setShopName={setShopName}
      />
      <SearchBarById searchGroup={keyword} setSearchGroup={setSearchGroup} />
      {keyword === "" ? (
        <div>{content} </div>
      ) : (
        <GroupsSearchResult
          groupsSearchResult={groupsSearchResult}
          setGoEvent={setGoEvent}
        />
      )}
    </div>
  );
}
