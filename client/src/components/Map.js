/* eslint-disable no-unused-vars */

export default function Map() {
  const coords = { lat: 0, lng: 0 };
  return (
    <div className="mapContainer">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
        }}
        // onChange={''}
        // onChildClick={''}
      />
    </div>
  );
}
