import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ({destination, origin, onReady}) => (
  <MapViewDirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey="AIzaSyDSBIi0ABU5V2mBdo6hHThO7TgmS9VwA7Q"
    strokeWidth={3}
    strokeColor="#222"
  />
);

export default Directions;
