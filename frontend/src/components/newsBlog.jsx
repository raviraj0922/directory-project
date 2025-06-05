import { Link } from "react-router-dom";
import blog1 from '../images/azamgarh-img.jpg';
import blog2 from '../images/tiranga-yatra.jpg';
import blog3 from '../images/Bypass-amh.jpg';

function NewsBlog() {
  return (
    <section className="py-12 bg-gray-100">
      <h2 className="text-2xl font-bold text-center">News Blog</h2>
      <p className="text-center text-gray-600 mb-6">Regularly publish news articles, updates, and stories related to Azamgarh</p>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[
          {
            image: blog1,
            headline: "एक महीने में शुरू होगा फोरलेन निर्माण, जमीन अधिग्रहण के लिए शुरू हुआ सर्वे",
            summary:
              "आजमगढ़। नगर क्षेत्र को जाम से मुक्ति दिलाने के उद्देश्य से बाईपास बंधे को फोरलेन का निर्माण एक महीने में शुरू होगा।...",
            link: "https://www.amarujala.com/uttar-pradesh/azamgarh/four-lane-construction-will-start-in-a-month-survey-for-land-acquisition-has-started-azamgarh-news-c-258-1-svns1001-131723-2025-05-21?src=epaper-story-local",
          },
          {
            image: blog2,
            headline: "सेना के सम्मान में निकाली तिरंगा यात्रा",
            summary:
              "बिलरियागंज के नया चौक से मंगलवार को तिरंगा यात्रा निकाली गई, जिसमें...",
            link: "https://www.livehindustan.com/uttar-pradesh/azamgarh/story-tiranga-yatra-in-bilriaganj-patriotic-slogans-and-strong-statements-against-pakistan-201747773274624.html",
          },
          {
            image: blog3,
            headline: "यूपी के इस ज‍िले में रिंग रोड न‍िर्माण को योगी सरकार की मंजूरी, 27 गांवों से अधि‍ग्रहि‍त की जाएगी जमीन",
            summary:
              "आजमगढ़ जिले में रिंग रोड के निर्माण को योगी सरकार ने मंजूरी दे दी है। यह रिंग रोड 27 गांवों...",
            link: "https://www.jagran.com/uttar-pradesh/azamgarh-azamgarh-ring-road-project-approved-by-up-government-23941395.html",
          },
        ].map(({ image, headline, summary, link }, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <img src={image} alt="News" className="rounded mb-2 w-full h-48 object-cover" />
            <h3 className="text-md font-semibold mb-1">{headline}</h3>
            <p className="text-sm text-gray-600">{summary}</p>
            <Link to={link} target="_blank" rel="noopener noreferrer" className="text-primary text-sm mt-2 block">Read More</Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NewsBlog; // <-- Fix: Export as default
