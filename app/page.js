'use client'

import MapWrapper from '@/components/MapWrapper';
import Groups from '@/components/Groups';
import SearchBar from '@/components/SearchBar';
import SearchBarById from '@/components/SearchBarById';

export default function Home() {
  return (
    <div style={{ position: 'relative' }}>
      <SearchBar />
      <MapWrapper />
      <SearchBarById />
      <Groups />
    </div>
  );
}
