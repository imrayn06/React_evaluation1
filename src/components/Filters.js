import React from 'react' 

const Filters = ({ filters, onFiltersChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target 
    onFiltersChange({ ...filters, [name]: value }) 
  } 

  return (
    <div className="filters">
      <input
        type="text"
        name="name"
        placeholder="Search by name"
        value={filters.name}
        onChange={handleChange}
      />
      <select name="country" value={filters.country} onChange={handleChange}>
        <option value="">All Countries</option>
        <option value="France">France</option>
        <option value="USA">USA</option>
        <option value="Japan">Japan</option>
        <option value="Australia">Australia</option>
        <option value="Brazil">Brazil</option>
        <option value="Italy">Italy</option>
        <option value="Turkey">Turkey</option>
      </select>
      <input
        type="range"
        name="budget"
        min="1000"
        max="5000"
        value={filters.budget}
        onChange={handleChange}
      />
      <span>Budget: ${filters.budget}</span>
    </div>
  ) 
} 

export default Filters 
