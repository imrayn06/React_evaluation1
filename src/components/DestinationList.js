import React from 'react' 
import DestinationCard from './DestinationCard' 

const DestinationList = ({ destinations, filters, onSelect }) => {
  const filteredDestinations = destinations.filter(destination => {
    return (
      destination.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      destination.country.includes(filters.country) &&
      destination.averageBudget <= filters.budget
    ) 
  }) 

  return (
    <div className="destination-list">
      {filteredDestinations.map(destination => (
        <DestinationCard
          key={destination.id}
          destination={destination}
          onClick={() => onSelect(destination)}
        />
      ))}
    </div>
  ) 
} 

export default DestinationList 
