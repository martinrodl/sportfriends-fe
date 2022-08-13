import 'leaflet/dist/leaflet.css';
import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import Modal from 'react-modal';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMapEvent } from 'react-leaflet';
import CloseIcon from '@mui/icons-material/Close';
import icon from 'leaflet/dist/images/marker-icon.png';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    marginBottom: '10px',
    transform: 'translate(-100%, -50%)',
    zIndex: 1000,
  },
};

let DefaultIcon = L.icon({
  iconUrl: icon,
});

L.Marker.prototype.options.icon = DefaultIcon;

function LocationMarker({ setAddress }) {
  const [position, setPosition] = useState({ lat: 51.505, lng: -0.09 });
  const map = useMapEvents({
    click(e) {
      setPosition(e.latlng);
      map.setView(e.latlng);
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
      map.get;
    },
  });

  useEffect(() => {
    fetch(
      `https://app.geocodeapi.io/api/v1/reverse?apikey=e8a016e0-ba69-11ec-bd3c-952b89012024&point.lat=${position.lat}&point.lon=${position.lng}`,
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAddress({
          address: String(data.features[0].properties.label),
          coordinates: { lat: position.lat, lng: position.lng },
        });
      });
  }, [position]);

  useEffect(() => {
    map.locate();
  }, []);

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

export default function ModalMap({ isOpen, setIsOpen, setAddress }) {
  const [position, setPosition] = useState({
    address: '',
    coordinates: [0, 0],
  });
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => {
        setIsOpen(false);
      }}
      style={customStyles}
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      <div className="w-[400px] h-[400px] z-10 " id="map">
        <button
          onClick={() => {
            setAddress(position);
            setIsOpen(false);
          }}
        >
          <CloseIcon className="absolute h-6 w-6 right-2 top-2 z-50" />
        </button>
        <div className="relative border-[#DADADA] border w-full rounded-[5px] mb-5">
          <input
            className="text-xs md:text-sm px-4 md:px-6 py-4 bg-transparent w-full focus:outline-none"
            name="address"
            placeholder="Click icon on the map"
            value={position.address}
            disabled
          />
        </div>
        <MapContainer
          center={position?.latlng || [51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: '100vh' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker setAddress={setPosition} />
        </MapContainer>
      </div>
    </Modal>
  );
}
