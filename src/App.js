import React, { useState, useEffect } from 'react' 
import DestinationList from './components/DestinationList' 
import DestinationDetails from './components/DestinationDetails' 
import AddOrUpdateDestination from './components/AddOrUpdateDestination' 
import Filters from './components/Filters' 

import db from './firebase' 

const App = () => {
  const [destinations, setDestinations] = useState([]) 
  const [selectedDestination, setSelectedDestination] = useState(null) 
  // const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light') 
  const [filters, setFilters] = useState({ name: '', country: '', budget: 5000 }) 

  useEffect(() => {
    const fetchData = async () => {
      const response = await db.collection('destinations').get() 
      const data = response.docs.map(doc => ({ id: doc.id, ...doc.data() })) 
      setDestinations(data) 
    } 

    fetchData() 
  }, []) 

  // useEffect(() => {
  //   document.body.className = theme 
  //   localStorage.setItem('theme', theme) 
  // }, [theme]) 

  // const handleThemeChange = () => {
  //   setTheme(theme === 'light' ? 'dark' : 'light') 
  // } 

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters) 
  } 

  const handleSelectDestination = (destination) => {
    setSelectedDestination(destination)
  }

  const handleAddOrUpdate = (destination) => {
    setSelectedDestination(destination || {})
  }

  const handleClose = () => {
    setSelectedDestination(null) 
  }

  return (
    <div className="app">
      {/* <ThemeSwitch theme={theme} onThemeChange={handleThemeChange} /> */}
      <Filters filters={filters} onFiltersChange={handleFiltersChange} />
      {selectedDestination ? (
        <DestinationDetails
          destination={selectedDestination}
          onBack={handleClose}
        />
      ) : (
        <DestinationList
          destinations={destinations}
          filters={filters}
          onSelect={handleSelectDestination}
        />
      )}
      {selectedDestination && selectedDestination.adminFlag && (
        <AddOrUpdateDestination
          destination={selectedDestination}
          onClose={handleClose}
        />
      )}
    </div>
  )
}

export default App
