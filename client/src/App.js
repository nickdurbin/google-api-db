import React, { useState, useEffect } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';

function Map() {
  return <GoogleMap defaultZoom={10} defaultCenter={{ lat: 41.081444, lng: -81.519005 }} />
}

const WrappedMap = withScriptjs(withGoogleMap(Map))


function App() {
  return (
    <div className="App">
      <WrappedMap 
      isMarkerShown
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_API_KEY}`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />} />
    </div>
  );
}

export default App;