import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import CircularProgress from '@mui/material/CircularProgress';

import {
  useGetUserQuery,
  useGetEventsQuery,
} from '@sportfriends-fe/shared/data/services';
import { MAX_ZOOM } from '@sportfriends-fe/shared/constants';

// import Filter from '../components/filter/Filter';
import EventsMarkers from '../components/events/EventsMarkers';

interface MapOptions {
  center: [number, number];
}

export default function EventsMap() {
  const {
    data: userData,
    isLoading: userLoading,
    isSuccess: userSuccess,
    error: userError,
  } = useGetUserQuery('');
  const {
    data: eventsData,
    isLoading: eventsLoading,
    isSuccess: eventsSuccess,
    error: eventsError,
  } = useGetEventsQuery('');

  const position = userData?.location.coordinates || [49.8175, 15.473];

  if (userLoading && eventsLoading) {
    return <CircularProgress />;
  }

  return (
    <div className="max-w-7xl w-screen md:mx-auto md:px-4 md:mt-12 mt-1 self-start">
      <div className="max-w-7xl w-screen h-full md:p-8">
        <div className="mb-8">
          {/* <Filter enableFilters={['sport', 'distance', 'date', 'startTime']} /> */}
        </div>

        <MapContainer
          center={position}
          zoom={12}
          scrollWheelZoom={false}
          maxZoom={MAX_ZOOM}
          className="md:h-[calc(70vh_-_5rem)] h-[calc(80vh)] md:w-[calc(70vw_-_5rem)] z-10"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {eventsData?.length && <EventsMarkers data={eventsData} />}
        </MapContainer>
      </div>
    </div>
  );
}
