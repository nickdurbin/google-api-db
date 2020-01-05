import React, { useState, useEffect } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
import axios from 'axios';
import AutoCompleteForm from './components/AutoCompleteForm';

function Map({ selectedPlace, setSelectedPlace }) {
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

  return <GoogleMap 
          defaultZoom={10} 
          defaultCenter={{lat: null, lng: null} ? { lat: 41.081444, lng: -81.519005 } : {lat: selectedPlace.lat, lng: selectedPlace.long }}>

          {places.map(place => {
            return (
              <Marker 
                key={place.id} 
                position={{ lat: place.lat, lng: place.long }} 
                onClick={() => {
                  setSelectedPlace(place)
                }}
              />
            )
          })}

          {selectedPlace && (
            <InfoWindow position={{ lat: selectedPlace.lat, lng: selectedPlace.long }} onCloseClick={() => setSelectedPlace(null)} >
              <div>
                <h2>{selectedPlace.name}</h2>
                <h3>{selectedPlace.address}</h3>
              </div>
            </InfoWindow>
          )}
          </ GoogleMap>
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

function App() {
  const [selectedPlace, setSelectedPlace] = useState(null)

  return (
    <div className="App">
      <WrappedMap 
      isMarkerShown
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_API_KEY}`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />} 
      setSelectedPlace={setSelectedPlace} 
      selectedPlace={selectedPlace} />

    <AutoCompleteForm setSelectedPlace={setSelectedPlace} selectedPlace={selectedPlace}/>

    </div>
  );
}

export default App;