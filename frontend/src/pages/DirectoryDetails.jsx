import { useParams, Link } from 'react-router-dom'; // ✅ You missed importing `Link`
import { useEffect, useState } from 'react';
import axios from 'axios';
import ContactImg from '../images/conatct.jpg';

const DirectoryDetails = () => {
  const { slug } = useParams();
  const [directory, setDirectory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBySlug = async () => {
      try {
        const res = await axios.get(`/api/directory/slug/${slug}`); // ✅ Make sure this endpoint exists and returns data in `res.data.data`
        setDirectory(res.data.data);
      } catch (err) {
        console.error('Error fetching directory by slug:', err);
        setDirectory(null); // Optional: ensure it's cleared on failure
      } finally {
        setLoading(false);
      }
    };

    fetchBySlug();
  }, [slug]);

  if (loading) return <div className="text-center py-10 text-gray-600">Loading...</div>;

  if (!directory) return <div className="text-center py-10 text-red-600">Organization not found.</div>;

  return (
    <div className="bg-[#f7f9fc] min-h-screen py-12 px-4 md:px-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        {directory.name}
        <div className="w-20 h-1 bg-blue-500 mx-auto mt-2 rounded" />
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Left Card */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h2 className="text-xl font-semibold mb-4">Get in touch</h2>
          {/* Updated Image Section */}
          <div className="flex justify-center mb-4">
            <img
              src={directory.image || ContactImg}
              alt={directory.name}
              className="w-20 h-20 object-cover rounded-lg"
            />
          </div>
          <p className="font-semibold text-gray-800">{directory.name}</p>
          <p className="text-sm text-gray-600 mb-4">{directory.category}</p>

          <div className="text-left space-y-2 mt-4 text-gray-700">
            <p>
              📍 <span className="ml-1">{directory.address}</span>
            </p>
            <p>
              📞{' '}
              <span className="ml-1">
                {directory.phone || 'Not available'}
              </span>
            </p>
            <p>
              ✉️ <span className="ml-1">{directory.email || 'Not available'}</span>
            </p>
            <p>
              🌐 <span className="ml-1">{directory.website || 'Not available'}</span>
            </p>
          </div>

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(directory.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-slate-700 text-white px-6 py-2 rounded-full hover:bg-slate-800 transition"
          >
            Get Direction
          </a>
        </div>

        {/* Right Form */}
        <div className="bg-blue-50 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Contact form</h2>
          <p className="text-sm text-gray-600 mb-4">
            If you have query related the contact directory feel free to contact us
          </p>

          <form className="space-y-4">
            <div className="flex gap-2">
              <input type="text" placeholder="First name" className="w-1/2 p-2 border rounded" />
              <input type="text" placeholder="Last name" className="w-1/2 p-2 border rounded" />
            </div>
            <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
            <input type="tel" placeholder="Phone" className="w-full p-2 border rounded" />
            <textarea placeholder="What is your Query?" className="w-full p-2 border rounded h-24" />
            <button
              type="submit"
              className="w-full bg-slate-700 text-white py-2 rounded-full hover:bg-slate-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer link */}
      <div className="text-center mt-10">
        <p className="text-gray-700 mb-2">Back to the Contact Directory</p>
        <Link
          to="/directory"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Directory
        </Link>
      </div>
    </div>
  );
};

export default DirectoryDetails;
