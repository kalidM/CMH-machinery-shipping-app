// import { LoadScript, GoogleMap, Marker, Polyline } from '@react-google-maps/api';
// import './Map.css';

// export const TrackingMap = ({ pickup, delivery }) => {
//   const center = {
//     lat: (pickup.lat + delivery.lat) / 2,
//     lng: (pickup.lng + delivery.lng) / 2
//   };

//   const path = [
//     { lat: pickup.lat, lng: pickup.lng },
//     { lat: delivery.lat, lng: delivery.lng }
//   ];

//   return (
//     <div className="map-container">
//       <LoadScript googleMapsApiKey={process.env.REACT_APP_GMAPS_KEY}>
//         <GoogleMap
//           mapContainerStyle={{ width: '100%', height: '400px' }}
//           center={center}
//           zoom={7}
//         >
//           <Marker position={pickup} label="P" />
//           <Marker position={delivery} label="D" />
//           <Polyline path={path} options={{ strokeColor: "#FF0000" }} />
//         </GoogleMap>
//       </LoadScript>
//     </div>
//   );
// };