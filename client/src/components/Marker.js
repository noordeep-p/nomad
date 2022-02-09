import React from 'react';
import '../style.scss';

export default function Marker() {
  return (
    <div
      style={{
        height: '60px', width: '60px', backgroundColor: 'red', cursor: 'pointer',
      }}
      title="test"
    />
  );
}
