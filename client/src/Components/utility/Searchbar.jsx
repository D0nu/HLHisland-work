import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useHistory, useLocation } from 'react-router-dom';

export default function Searchbar({ listings }) {
  const history = useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialSearchQuery = queryParams.get('query') || '';

  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [searchResults, setSearchResults] = useState([]);
  const [showNotFound, setShowNotFound] = useState(false);

  useEffect(() => {
    handleSearch(searchQuery);
  }, [searchQuery]);

  const handleSearch = (query) => {
    const filteredListings = listings.filter(listing =>
      listing.name.toLowerCase().includes(query.toLowerCase()) ||
      listing.description.toLowerCase().includes(query.toLowerCase()) ||
      listing.address.toLowerCase().includes(query.toLowerCase()) ||
      listing.type.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(filteredListings);
    setShowNotFound(filteredListings.length === 0 && query.length >= 3);
    updateUrlParams(query);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchQuery);
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    setShowNotFound(false);
  };

  const updateUrlParams = (query) => {
    const urlParams = new URLSearchParams(location.search);
    if (query.trim() !== '') {
      urlParams.set('query', query);
    } else {
      urlParams.delete('query');
    }
    history.push({ search: urlParams.toString() });
  };

  return (
    <form onSubmit={handleSubmit} className='bg-slate-100 p-3 rounded-lg flex items-center max-w-max'>
      <input 
        type="text" 
        placeholder="Search..." 
        className='bg-transparent focus:outline-none'
        value={searchQuery}
        onChange={handleChange}
      />
      <button type="submit"><FaSearch className='text-yellow-600' /></button>
      {showNotFound && <p className="text-red-500">Listing not found</p>}
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((listing, index) => (
            <li key={index}>
              <p>Name: {listing.name}</p>
              <p>Description: {listing.description}</p>
              <p>Address: {listing.address}</p>
              <p>Type: {listing.type}</p>
              {/* Render other listing parameters as needed */}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}
