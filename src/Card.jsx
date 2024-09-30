import React from 'react';

function Card(props) {
  return (
    <div className={`card my-card ${props.darkMode ? 'dark' : ''}`}>
      <img className="card-image" src={props.url} alt="placeholder" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <button className="card-button">Assista agora</button>
      </div>
    </div>
  );
}

export default Card;
