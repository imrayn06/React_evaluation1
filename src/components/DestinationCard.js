import React from 'react' 

const DestinationCard = ({ destination, onClick }) => {
  return (
    <div className="destination-card" onClick={onClick}>
      <img src={destination.profileImg} alt={destination.name} />
      <h3>{destination.name}</h3>
      <p>{destination.country}</p>
      <p>Average Budget: ${destination.averageBudget}</p>
    </div>
  ) 
} 

export default DestinationCard 
