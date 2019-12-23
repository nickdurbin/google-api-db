import React, { useState, useEffect } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
import axios from 'axios'

function Map() {
  return <GoogleMap defaultZoom={10} defaultCenter={{ lat: 41.081444, lng: -81.519005 }} />
}

const WrappedMap = withScriptjs(withGoogleMap(Map))


function App() {
  const [places, setPlaces] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4000/api/places')
      .then(res => {
        setPlaces(res.data)
      })
      .catch(err => {
        console.log(err, 'There was an issue catching the data.')
      })
  }, [])

  return (
    <div className="App">
      <WrappedMap 
      isMarkerShown
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_API_KEY}`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />} />

      {places.map(place => {
        return (
          <div className='placeContainer' key={place.id}>
            <h2>Name: {place.name}</h2>
            <h3>Address: {place.address} Zipcode:{place.zipcode}</h3>
            <h3>Website: {place.website}</h3>
          </div>
        )
      })}

    </div>
  );
}

export default App;