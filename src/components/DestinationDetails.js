import React from 'react' 

const DestinationDetails = ({ destination, onBack }) => {
  return (
    <div className="destination-details">
      <button onClick={onBack}>Back</button>
      <img src={destination.profileImg} alt={destination.name} />
      <div className="additional-images">
        {destination.additionalImages.map((img, index) => (
          <img key={index} src={img} alt={`Additional ${index}`} />
        ))}
      </div>
      <h2>{destination.name}</h2>
      <p>{destination.country}</p>
      <p>{destination.description}</p>
      <p>Average Budget: ${destination.averageBudget}</p>
    </div>
  ) 
} 

export default DestinationDetails 
