// src/components/AddOrUpdateDestination.js
import React, { useState, useEffect } from 'react' 
import db from '../firebase' 
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore' 

const AddOrUpdateDestination = ({ destination, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    description: '',
    profileImg: '',
    additionalImages: ['', '', ''],
    averageBudget: '',
    adminFlag: false
  }) 

  useEffect(() => {
    if (destination) {
      setFormData(destination) 
    }
  }, [destination]) 

  const handleChange = (e) => {
    const { name, value } = e.target 
    setFormData({ ...formData, [name]: value }) 
  } 

  const handleSubmit = async (e) => {
    e.preventDefault() 
    if (destination && destination.id) {
      const docRef = doc(db, 'destinations', destination.id) 
      await updateDoc(docRef, formData) 
    } else {
      await addDoc(collection(db, 'destinations'), formData) 
    }
    onClose() 
  } 

  return (
    <div className="add-or-update-destination">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="profileImg"
          placeholder="Profile Image URL"
          value={formData.profileImg}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="additionalImages"
          placeholder="Additional Images URLs (comma separated)"
          value={formData.additionalImages.join(',')}
          onChange={(e) => setFormData({ ...formData, additionalImages: e.target.value.split(',') })}
          required
        />
        <input
          type="number"
          name="averageBudget"
          placeholder="Average Budget"
          value={formData.averageBudget}
          onChange={handleChange}
          required
        />
        <label>
          Admin Flag:
          <input
            type="checkbox"
            name="adminFlag"
            checked={formData.adminFlag}
            onChange={(e) => setFormData({ ...formData, adminFlag: e.target.checked })}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  ) 
} 

export default AddOrUpdateDestination 
