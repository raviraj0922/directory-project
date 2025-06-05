import { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const categories = [
    'Restaurants',
    'Hotels',
    'Shops',
    'Services',
    'Education',
    'Healthcare',
    'Others'
  ];

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('/api/search', {
        params: {
          query: searchQuery,
          category: category || undefined,
          location: location || undefined
        }
      });
      setResults(response.data.data);
    } catch (err) {
      setError('Failed to perform search');
      console.error('Error searching:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Search Directory</h1>

      <form onSubmit={handleSearch} className="card space-y-4">
        <div>
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
            Search
          </label>
          <input
            type="text"
            id="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for businesses..."
            className="input"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="input"
            >
              <option value="">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter location..."
              className="input"
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary w-full">
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {error && (
        <div className="text-center text-red-600 py-4">
          <p>{error}</p>
        </div>
      )}

      {loading && (
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      )}

      {!loading && results.length > 0 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Search Results</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((result) => (
              <div key={result._id} className="card hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-2">{result.name}</h3>
                <p className="text-gray-600 mb-2">{result.category}</p>
                <p className="text-gray-700 mb-4">{result.address}</p>
                <div className="space-y-2">
                  <p className="flex items-center text-gray-600">
                    <span className="font-medium">Phone:</span> {result.phone}
                  </p>
                  {result.email && (
                    <p className="flex items-center text-gray-600">
                      <span className="font-medium">Email:</span> {result.email}
                    </p>
                  )}
                  {result.website && (
                    <p className="flex items-center text-gray-600">
                      <span className="font-medium">Website:</span>{' '}
                      <a
                        href={result.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline ml-1"
                      >
                        Visit
                      </a>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {!loading && results.length === 0 && searchQuery && (
        <div className="text-center py-8">
          <p className="text-gray-600">No results found. Try different search terms.</p>
        </div>
      )}
    </div>
  );
};

export default Search; 