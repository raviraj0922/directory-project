import { Link } from 'react-router-dom';
import { PhoneCall, MessageSquare, Megaphone, Wrench,  Globe,  ShieldCheck,  Users } from 'lucide-react';
import Testimonials from "../components/Testimonials";
import CommunityForum from '../components/CommunityForum';
import Contactform from '../components/ContactForm';
import NewsBlog from '../components/newsBlog'
import heroImage from '../images/hero-img.png';
import Sponsor from '../components/Sponsor';

const Home = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gray-100 text-black rounded-lg">
  <h1 className="text-4xl md:text-5xl font-bold mb-4">The Voice of Azamgarh</h1>
  <p className="text-lg mb-6">
    is a platform that resonates with the vibrant spirit of Azamgarh, Uttar Pradesh
  </p>
  <div className="space-x-4">
          <Link to="/directory" className="btn btn-secondary">
            Browse Directory
          </Link>
          <Link to="/search" className="btn bg-white text-primary hover:bg-gray-300">
            Search Now
          </Link>
        </div>
  <div className="flex justify-center mt-4">
    <img src={heroImage} alt="Azamgarh Map" className="max-w-md rounded-lg" />
  </div>
</section>

      {/* Features Section */}
      <section className="bg-primary py-12 px-4 text-center">
  <div className="max-w-4xl mx-auto mb-8">
    <h2 className="text-2xl font-bold text-white">About Voice of Azamgarh</h2>
    <p className="text-gray-600 mt-4 text-white">
      The Voice of Azamgarh is your reliable source for current, unbiased news covering a wide range of topics including events, politics, business, technology, science, entertainment, and sports. We are committed to keeping you informed and up-to-date.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
    {[
      {
        title: "News Coverage",
        icon: Globe,
        description:
          "Detailing the types of news stories covered, including local, national, and international events.",
      },
      {
        title: "Journalistic Integrity",
        icon: ShieldCheck,
        description:
          "Exploring the principles of journalism upheld by The Voice of Azamgarh, such as accuracy, fairness, and transparency.",
      },
      {
        title: "Community Engagement",
        icon: Users,
        description:
          "Highlighting how The Voice of Azamgarh interacts with and serves the local community through its news coverage.",
      },
      {
        title: "Audience Interaction",
        icon: MessageSquare,
        description:
          "Describing how The Voice of Azamgarh encourages audience participation and feedback to improve its reporting.",
      },
    ].map(({ title, description, icon: Icon }) => (
      <div key={title} className="bg-white p-4 rounded shadow text-center">
        <Icon className="mx-auto text-primary mb-4 h-8 w-8" />
        <h4 className="font-semibold text-lg mb-2">{title}</h4>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    ))}
  </div>
</section>

    {/* Community Forum Form */}
    <CommunityForum />

        {/* News Blog Preview */}
        <NewsBlog />

        {/* Services Section */}
        <section className="py-12">
        <div className="max-w-4xl mx-auto mb-8">
          <h2 className="text-center text-2xl font-bold mb-6">Services</h2>
          <p className="text-center text-gray-600 mt-4">
            Create advertising packages for local businesses and organizations looking to reach the Azamgarh audience.
            Offer sponsorship opportunities for community-driven initiatives and events.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "WhatsApp Messaging",
              icon: MessageSquare,
              description: "Allow users to subscribe to alerts via WhatsApp, receiving timely updates on important events.",
            },
            {
              title: "Voice Calls",
              icon: PhoneCall,
              description: "Send voice call invitations and reminders for upcoming events, festivals, or community gatherings.",
            },
            {
              title: "Promotions",
              icon: Megaphone,
              description: "Send press releases and pitches highlighting newsworthy content and initiatives.",
            },
            {
              title: "Digital Tools",
              icon: Wrench,
              description: "Use SMS marketing platforms to send targeted messages and promotions to subscribers' mobile phones.",
            },
          ].map(({ title, description, icon: Icon }) => (
            <div key={title} className="bg-white p-6 rounded shadow text-center">
              <Icon className="mx-auto text-primary mb-4 h-8 w-8" />
              <h4 className="font-semibold mb-2">{title}</h4>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </section>

        {/* Sponsored Posts */}
        <Sponsor />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact Us */}
      <Contactform />

      {/* Call to Action */}
      <section className="text-center py-12 bg-gray-100 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Get List of Panchayat Representatives</h2>
        <p className="text-gray-600 mb-8">
        Details of Azamgarh block wise Panchayat representatives and workers at the Gram Panchayat level.
        </p>
        <Link to="https://panchayatiraj.up.nic.in/pblc_pg/Reports/PB2FormReport?ReportType=Filled&District=AZAMGARH" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Get the Details
        </Link>
      </section>
    </div>
  );
};

export default Home; 