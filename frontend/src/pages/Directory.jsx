import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Contact from '../images/conatct.jpg';

const Directory = () => {
  const [directories, setDirectories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchDirectories();
  }, [page]);

  const slugify = (text) =>
    text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

  const fetchDirectories = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/directory?page=${page}&limit=1`);
      setDirectories(response.data.data.docs);
      setTotalPages(response.data.data.totalPages);
      setError(null);
    } catch (err) {
      setError('Failed to fetch directory listings');
      console.error('Error fetching directories:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 py-8">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 md:px-8 bg-[#f7f9fc] min-h-screen space-y-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Contact Directory
      </h1>

      {directories.map((directory) => (
        <div
          key={directory._id}
          className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center justify-between max-w-3xl mx-auto"
        >
          {/* Updated Image Section */}
          <img
            src={directory.image || Contact }
            alt={directory.name}
            className="w-20 h-20 object-cover rounded-lg mb-4 md:mb-0 md:mr-6 flex-shrink-0"
          />

          <div className="flex-1 space-y-2 text-left">
            <p>
              <span className="font-semibold">Organization Name:</span>{' '}
              {directory.name}
            </p>
            <p>
              <span className="font-semibold">Category:</span>{' '}
              {directory.category}
            </p>
            <p>
              <span className="font-semibold">Address of Organization:</span>{' '}
              {directory.address}
            </p>
          </div>

          <div className="mt-4 md:mt-0 md:ml-6">
            <Link
              to={`/directory/${slugify(directory.name)}`}
              className="text-blue-600 underline"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center flex-wrap gap-2">
          <button
            onClick={() => setPage((prev) => prev - 1)}
            disabled={page === 1}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`px-3 py-1 rounded ${
                p === page ? 'bg-blue-600 text-white' : 'bg-gray-100'
              }`}
            >
              {p}
            </button>
          ))}
          <button
            onClick={() => setPage((prev) => prev + 1)}
            disabled={page === totalPages}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}

      {/* CTA */}
      <div className="text-center mt-10">
        <p className="text-lg mb-4">
          For advance contact directory details please visit here
        </p>
        <Link
          to="/search"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Search Directory
        </Link>
      </div>
    </div>
  );
};

export default Directory;
