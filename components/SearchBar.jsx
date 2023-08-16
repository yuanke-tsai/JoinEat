import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "../styles/searchBar.module.scss";

export default function SearchBar({ center, setOptions, mapInstance }) {
  const [isSearch, setIsSearch] = useState(false);
  const inputRef = useRef(null);
  const autocompleteService = useRef(null);
  const autocompleteInstance = useRef(null);

  const onPlaceChanged = () => {
    const selectedPlace = autocompleteInstance.current.getPlace();
    if (selectedPlace) {
      const lat = selectedPlace.geometry.location.lat();
      const lng = selectedPlace.geometry.location.lng();

      setOptions({ position: { lat, lng }, map: mapInstance.current });
      alert(`${selectedPlace.name}\n(${lat}, ${lng})`);
    }
  };

  useEffect(() => {
    if (isSearch) {
      inputRef.current.focus();
      autocompleteService.current =
        new window.google.maps.places.AutocompleteService();

      const defaultBounds = {
        north: center.lat + 0.01,
        south: center.lat - 0.01,
        east: center.lng + 0.01,
        west: center.lng - 0.01,
      };

      const options = {
        bounds: defaultBounds,
        componentRestrictions: { country: "TW" },
        fields: ["address_components", "geometry", "icon", "name"],
        types: ["restaurant", "cafe"],
        strictBounds: false,
      };

      autocompleteInstance.current = new window.google.maps.places.Autocomplete(
        inputRef.current,
        options,
      );

      autocompleteInstance.current.addListener("place_changed", onPlaceChanged);
    }
  }, [isSearch, center]);

  return (
    <div className={`${styles.searchBar} ${isSearch && styles.extendVert}`}>
      <Image
        className={styles.searchIcon}
        width={15}
        height={15}
        src="/searchIcon 2.png"
        alt="search icon"
        onClick={() => {
          setIsSearch(true);
        }}
      />
      {isSearch && (
        <input
          ref={inputRef}
          type="text"
          className={styles.input}
          placeholder="搜尋餐廳"
        />
      )}
    </div>
  );
}
