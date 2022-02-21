/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useContext, useState } from 'react';

const mapContext = React.createContext();
const mapUpdateContext = React.createContext();

export function currentMap() {
  return useContext(mapContext);
}

export function mapUpdate() {
  return useContext(mapUpdateContext);
}

export function MapContext({ children }) {
  const [map, setMap] = useState();

  return (
    <mapContext.Provider value={map}>
      <mapUpdateContext.Provider value={setMap}>
        {children}
      </mapUpdateContext.Provider>
    </mapContext.Provider>
  );
}
