import React, { useCallback, useEffect, useState } from 'react';
import useSupercluster from 'use-supercluster';
import { Marker, useMap, Popup } from 'react-leaflet';
import L from 'leaflet';

import { MAX_ZOOM } from '@sportfriends-fe/shared/constants';

import MarkerPopup from './MarkerPopup';

const icons = {};
const fetchIcon = (count, size) => {
  if (!icons[count]) {
    if (count === 1) {
      const smallerConstant = 0.8;
      icons[count] = L.divIcon({
        html: `<div class="cluster-marker cluster-marker-custom" 
        style="width: ${(size + 3) * smallerConstant}px; height: ${
          (size + 3) * smallerConstant
        }px; border-width: ${(smallerConstant * size) / 4}px;
        border-color:#292D32; background-color:white;"/>`,
      });
    } else {
      const smallerConstant = 0.8;
      icons[count] = L.divIcon({
        html: `<div class="cluster-marker cluster-marker-table" style="width: ${
          size * smallerConstant
        }px; height: ${size * smallerConstant}px; background-color:#54D2E0;">
          <div class="cluster-marker" style="width:${
            0.8 * size * smallerConstant
          }px; height: ${
          0.8 * size * smallerConstant
        }px; background-color:#FFFFFF;">
            <p class="cluster-marker-text" style="font-size: ${
              size * 0.03 * 15 * smallerConstant
            }px;">
              ${count}
            </p>
          </div>
        </div>`,
      });
    }
  }
  return icons[count];
};

const EventsMarkers = ({ data }) => {
  const [bounds, setBounds] = useState(null);
  const [zoom, setZoom] = useState(12);
  const map = useMap();

  // get map bounds
  function updateMap() {
    const b = map.getBounds();
    setBounds(b);
    setZoom(map.getZoom());
  }

  const onMove = useCallback(() => {
    updateMap();
  }, [map]);

  useEffect(() => {
    updateMap();
  }, [map]);

  useEffect(() => {
    map.on('move', onMove);
    return () => {
      map.off('move', onMove);
    };
  }, [map, onMove]);

  const points = data.map((event) => ({
    type: 'Feature',
    properties: {
      cluster: false,
      eventId: event.id,
      title: event.title,
      sport: event.sport,
    },
    event,
    geometry: {
      type: 'Point',
      coordinates: [
        parseFloat(event.location.coordinates[0]),
        parseFloat(event.location.coordinates[1]),
      ],
    },
  }));

  const { clusters, supercluster } = useSupercluster({
    points: points,
    bounds: [20, 1, 80, 40],
    zoom: zoom,
    options: {
      radius: 75,
      maxZoom: MAX_ZOOM,
    },
  });

  return (
    <>
      {clusters.map((cluster) => {
        const [latitude, longitude] = cluster.geometry.coordinates;
        const { cluster: isCluster, point_count: pointCount } =
          cluster.properties;

        if (isCluster) {
          return (
            <Marker
              key={`cluster-${cluster.id}`}
              position={[latitude, longitude]}
              icon={fetchIcon(
                pointCount,
                10 + (pointCount / points.length) * 40,
              )}
              eventHandlers={{
                click: () => {
                  const expansionZoom = Math.min(
                    supercluster.getClusterExpansionZoom(cluster.id),
                    MAX_ZOOM,
                  );
                  map.setView([latitude, longitude], expansionZoom, {
                    animate: true,
                  });
                },
              }}
            >
              {zoom >= MAX_ZOOM && (
                <Popup>
                  {<MarkerPopup data={supercluster.getLeaves(cluster.id)} />}
                </Popup>
              )}
            </Marker>
          );
        } else {
          return (
            <Marker
              key={`event-${cluster.properties.eventId}`}
              position={[latitude, longitude]}
              icon={fetchIcon(1, 10 + (1 / points.length) * 40)}
            >
              {
                <Popup>
                  {<MarkerPopup data={[{ event: cluster.event }]} />}
                </Popup>
              }
            </Marker>
          );
        }
      })}
    </>
  );
};

export default EventsMarkers;
