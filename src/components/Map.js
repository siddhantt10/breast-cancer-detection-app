// /src/components/Map.js
'use client';

import { useState, useEffect, useCallback } from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

const Map = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [showMap, setShowMap] = useState(false);
  const [radius, setRadius] = useState(5); // default radius in km
  const [hospitals, setHospitals] = useState([]);
  const [mapInstance, setMapInstance] = useState(null);
  const [loading, setLoading] = useState(false);

  // Use useLoadScript hook to load the Maps API once
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, // replace with your API key
    libraries: ['places'],
  });

  // Request user location and show map
  const handleFindHospitals = () => {

    setLoading(true); // Start loading

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
          setShowMap(true);
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  const fetchNearbyHospitals = useCallback(
    (map) => {
      if (!userLocation) return;
      const service = new window.google.maps.places.PlacesService(map);
      const request = {
        location: userLocation,
        radius: radius * 1000, // convert km to meters
        type: 'hospital',
      };
  
      service.nearbySearch(request, (results, status) => {
        console.log('PlacesService status:', status);
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setHospitals(results);
        } else if (status === window.google.maps.places.PlacesServiceStatus.ZERO_RESULTS) {
          // No results found: clear hospitals and optionally show a message
          setHospitals([]);
          console.warn('No hospitals found in this area.');
        } else {
          console.error('PlacesService error:', status);
          setHospitals([]);
        }
      });
    },
    [userLocation, radius]
  );

  // Fetch nearby hospitals using the Places API
//   const fetchNearbyHospitals = useCallback(
//     (map) => {
//       if (!userLocation) return;
//       const service = new window.google.maps.places.PlacesService(map);
//       const request = {
//         location: userLocation,
//         radius: radius * 1000, // convert km to meters
//         type: 'hospital',
//       };
//       service.nearbySearch(request, (results, status) => {
//         if (status === window.google.maps.places.PlacesServiceStatus.OK) {
//           setHospitals(results);
//         } else {
//           console.error('PlacesService status:', status);
//         }
//       });
//     },
//     [userLocation, radius]
//   );

  // When the map is loaded and userLocation is set, fetch hospitals
  useEffect(() => {
    if (mapInstance && userLocation) {
      fetchNearbyHospitals(mapInstance);
    }
  }, [mapInstance, userLocation, radius, fetchNearbyHospitals]);

  // Save the map instance when loaded
  const onMapLoad = useCallback((map) => {
    setMapInstance(map);
  }, []);

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  const containerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = userLocation || { lat: 0, lng: 0 };

  return (
    <div className="p-2 md:p-4 bg-gray-800 rounded-md animate-fadeInSlide">
      {!showMap ? (

        <div className="flex justify-center items-center h-64">
          <button
            onClick={handleFindHospitals}
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition"
          >
            {!loading? "Find Hospitals/Experts" : "Loading..."}
          </button>
        </div>
      ) : (
        <>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
            onLoad={onMapLoad}
          >
            {/* Display the user's location with the default marker */}
            {userLocation && <Marker position={userLocation} />}
            {/* Display hospital markers */}
            {hospitals.map((hospital) => (
              <Marker
                key={hospital.place_id}
                position={{
                  lat: hospital.geometry.location.lat(),
                  lng: hospital.geometry.location.lng(),
                }}
              />
            ))}
          </GoogleMap>

          {/* Radius Input */}
          <div className="mt-4 flex items-center flex-wrap">
            <label htmlFor="radius" className="text-white">
              Radius (km):
            </label>
            <input
              id="radius"
              type="number"
              value={radius}
              onChange={(e) => setRadius(Number(e.target.value))}
              className="p-2 rounded text-black"
            />
          </div>

          {/* Hospital List */}
          <div className="mt-6">
            <h3 className="text-xl font-bold text-white mb-2">
              Nearby Hospitals/Experts
            </h3>
            {hospitals.length === 0 ? (
              <p className="text-gray-300">No hospitals found in this area.</p>
            ) : (
              <ul className="space-y-2 text-white">
                {hospitals.map((hospital) => (
                  <li
                    key={hospital.place_id}
                    className="bg-gray-700 p-2 rounded flex justify-between items-center flex-wrap gap-2 animate-fadeInSlide"
                  >
                    <div className='md:max-w-[60%] text-left'>
                      <strong>{hospital.name}</strong>
                      <p className="text-sm">{hospital.vicinity}</p>
                    </div>
                    <button
                      className="px-3 py-1 bg-blue-500 hover:bg-blue-400 rounded"
                      onClick={() => {
                        const url = `https://www.google.com/maps/search/?api=1&query=${hospital.name}+${hospital.vicinity}`;
                        window.open(url, '_blank');
                      }}
                    >
                      Open in Google Maps
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Map;
