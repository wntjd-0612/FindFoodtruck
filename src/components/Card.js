import React from 'react';

const Card = ({ name, address, distance, kind }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-header">
          <span className="name">{name}</span>
          <span className="distance">{distance}</span>
        </div>
        <div className="address">{address}</div>
        <div className="badge">{kind}</div>
      </div>
    </div>
  );
};

export default Card;
