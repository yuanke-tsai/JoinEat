'use client'

import Map from '@/components/Map';
import Groups from '@/components/Groups';
import SearchBar from '@/components/SearchBar';
import SearchBarById from '@/components/SearchBarById';

export default function Home() {
  return (
    <div style={{ position: 'relative' }}>
      <SearchBar />
      <Map />
      <SearchBarById />
      {/* <SearchBar /> */}
      <Groups />
    </div>
  );
}
