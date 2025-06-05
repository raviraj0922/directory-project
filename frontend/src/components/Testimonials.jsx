import Slider from 'react-slick';
import testimonial1 from '../images/testimonials-1.jpg';
import testimonial2 from '../images/testimonials-2.jpg';
import testimonial3 from '../images/testimonials-3.jpg';
import testimonial4 from '../images/testimonials-4.jpg';
import testimonial5 from '../images/testimonials-5.jpg';

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  const testimonials = [
    {
        quote:  "I rely on 'The Voice of Azamgarh' for all the latest news and updates in our community. It keeps me informed about local events, issues, and achievements. Such a valuable resource for staying connected!",
        name: "S Vishwakarma",
        role: "A Local Resident",
        profile: testimonial1,
      },
      {
        quote: "As a community leader, I appreciate the insightful coverage provided by 'The Voice of Azamgarh.' Their commitment to highlighting important issues and promoting community engagement is commendable.",
        name: "RR Singh",
        role: "A Community Leader",
        profile: testimonial2,
      },
      {
        quote: "Partnering with 'The Voice of Azamgarh' has been instrumental in reaching our local audience. Their platform helped us connect with residents and showcase our services effectively.",
        name: "N Akhtar",
        role: "A Business Partner",
        profile: testimonial3,
      },
      {
        quote: "I enjoy reading the engaging articles and features on 'The Voice of Azamgarh.' It's my go-to source for everything happening in our town. Keep up the great work!",
        name: "Mohd. Faizan",
        role: "A Businessman",
        profile: testimonial4,
      },
      {
        quote: "Following 'The Voice of Azamgarh' on social media has enriched my feed with informative content. I appreciate their efforts to highlight our community's stories and achievements.",
        name: "RG Yadav",
        role: "A Social Media Follower",
        profile: testimonial5,
      },
  ];

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-center mb-2">Testimonials</h2>
      <p className="text-center text-gray-600 mb-6">These are the testimonials which is provided by satisfied customers, clients and users.</p>
      <div className="max-w-2xl mx-auto">
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index}>
              <div className="bg-white p-6 rounded shadow text-center">
                <img
                src={item.profile}
                alt={item.name}
                className="w-16 h-16 mx-auto rounded-full mb-4 object-cover"
                />
                <p className="italic text-gray-600 mb-4">"{item.quote}"</p>
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.role}</p>
            </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;