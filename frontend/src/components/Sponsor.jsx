import { useState } from 'react';
import Sponsor1 from '../images/portfolio-5.jpg';
import Sponsor2 from '../images/portfolio-3.jpg';
import Sponsor3 from '../images/portfolio-2.jpg';
import Sponsor4 from '../images/portfolio-4.jpg';
import Sponsor5 from '../images/portfolio-9.jpg';

function Sponsor() {
  const [modalImage, setModalImage] = useState(null);

  const openImageModal = (img) => setModalImage(img);
  const closeModal = () => setModalImage(null);

  return (
    <section className="py-12 bg-gray-100 relative z-0">
      <h2 className="text-center text-2xl font-bold mb-6">Sponsored Posts & Partnerships</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[
          {
            image: Sponsor1,
            name: "Get Website @999",
            description: "Low Cost Website Design in India Rs.999 Only! Professional Websites on Your Budget!!!",
          },
          {
            image: Sponsor2,
            name: "आजमगढ़ महोत्सव-2024",
            description: "आजमगढ़ महोत्सव-2024 के अंतर्गत होने वाले कार्यक्रम का सम्पूर्ण विवरण @azamgarhmahotsav2024",
          },
          {
            image: Sponsor3,
            name: "आजमगढ़ महोत्सव-2024",
            description: "आजमगढ़ महोत्सव-2024 के अंतर्गत होने वाले कार्यक्रम का सम्पूर्ण विवरण @azamgarhmahotsav2024",
          },
          {
            image: Sponsor4,
            name: "आजमगढ़ महोत्सव-2024",
            description: "आजमगढ़ महोत्सव-2024 के अंतर्गत होने वाले कार्यक्रम का सम्पूर्ण विवरण @azamgarhmahotsav2024",
          },
          {
            image: Sponsor5,
            name: "Plot for sale | Nasirpur Bazar, Bilariyaganj",
            description: "Booking Starts, Plot for sale | Location : 1500 meters west of Nasirpur Bazar, Bilariyaganj.",
          },
        ].map(({ image, name, description }, index) => (
          <div key={index} className="bg-white rounded shadow p-4 text-center">
            <img
              src={image}
              alt={name}
              className="mx-auto h-48 object-cover rounded cursor-pointer"
              onClick={() => openImageModal(image)}
            />
            <h4 className="font-semibold text-lg mt-2">{name}</h4>
            <p className="text-sm text-gray-600 mt-2">{description}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <img
            src={modalImage}
            alt="Full View"
            className="max-w-full max-h-full rounded shadow-lg"
          />
        </div>
      )}
    </section>
  );
}

export default Sponsor;
