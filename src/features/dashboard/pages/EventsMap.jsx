import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
import CircularProgress from '@mui/material/CircularProgress';

import { useGetUserQuery } from 'services/userApi';
import { useGetEventsQuery } from 'services/eventApi';
import { MAX_ZOOM } from 'shared/constants';

import Filter from '../components/filter/Filter';
import EventsMarkers from '../components/events/EventsMarkers';

export default function EventsMap() {
  const { data: userData, isLoading: userLoading, isSuccess: userSuccess, error: userError } = useGetUserQuery();
  const {
    data: eventsData,
    isLoading: eventsLoading,
    isSuccess: eventsSuccess,
    error: eventsError,
  } = useGetEventsQuery();

  const position = userData?.location.coordinates;

  if (userLoading && eventsLoading) {
    return <CircularProgress />;
  }

  return (
    <div className="h-full w-full">
      <div className="max-w-7xl mx-auto p-8">
        <div className="mb-8">
          <Filter enableFilters={['sport', 'distance', 'date', 'startTime']} />
        </div>
        {userSuccess && eventsSuccess && (
          <MapContainer
            center={position}
            zoom={11}
            scrollWheelZoom={false}
            maxZoom={MAX_ZOOM}
            className="h-screen w-full z-10"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <EventsMarkers data={eventsData} />
          </MapContainer>
        )}
      </div>
    </div>
  );
}
