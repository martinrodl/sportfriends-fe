import 'leaflet/dist/leaflet.css';
import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMapEvent } from 'react-leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';

import Modal from 'shared/components/Modal';

let DefaultIcon = L.icon({
  iconUrl: icon,
});

L.Marker.prototype.options.icon = DefaultIcon;

function LocationMarker({ coordinates, setAddress }) {
  const [position, setPosition] = useState(coordinates);
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

export default function ModalMap({ isOpen, setIsOpen, setAddress, address }) {
  const [position, setPosition] = useState(address);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => {
        setAddress(position);
        setIsOpen(false);
      }}
    >
      <div className="w-screen max-w-[408px] p-2">
        <div className="border-[#DADADA] border w-full rounded-[5px] mb-5">
          <input
            className="text-xs md:text-sm px-4 md:px-6 py-4 bg-transparent w-full focus:outline-none"
            name="address"
            placeholder="Click icon on the map"
            value={position?.address}
            disabled
          />
        </div>
        <MapContainer center={position.coordinates} zoom={12} scrollWheelZoom={false} className="h-[500px] w-full">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker coordinates={address.coordinates || { lat: 49.8175, lng: 15.473 }} setAddress={setPosition} />
        </MapContainer>
      </div>
    </Modal>
  );
}
