import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow">
        <Navbar />
      </div>

      {/* Main content with top padding to offset fixed navbar height */}
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Voice of Azamgarh</h3>
              <p className="text-gray-300">
                Your trusted directory for local businesses and services in Azamgarh.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
                <li><a href="/privacy-policy" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
                <li><a href="/refund-cancellation" className="text-gray-300 hover:text-white">Refund & Cancellation</a></li>
                <li><a href="/terms-conditions" className="text-gray-300 hover:text-white">Terms & Conditions</a></li>
                <li><a href="/disclaimer" className="text-gray-300 hover:text-white">Disclaimer</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Email: info@voiceofazamgarh.com</li>
                <li>Phone: +91 XXXXXXXXXX</li>
                <li>Address: 6th Floor, Sagar Plaza, Distt. Centre, Laxmi Nagar, New Delhi-110092</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} Voice of Azamgarh. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
