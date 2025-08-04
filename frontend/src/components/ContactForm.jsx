import { useState } from "react";
import api from "../config/api";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccessMsg("");

    try {
      const res = await api.post("/api/contact", formData);
      setSuccessMsg("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setSuccessMsg("Failed to send message. Try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-12 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div>
          <h4 className="font-semibold mb-2">Our Address</h4>
          <p>
            6th Floor, Sagar Plaza, Distt. Centre, Laxmi Nagar <br />
            New Delhi-110092
          </p>
          <h4 className="font-semibold mt-4 mb-2">Email</h4>
          <p>voiceofazamgarh@gmail.com</p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="input w-full"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="input w-full"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Message"
            className="input w-full"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="btn btn-primary"
            disabled={submitting}
          >
            {submitting ? "Sending..." : "Send Message"}
          </button>
          {successMsg && (
            <p className="text-green-800 mt-2 text-sm">{successMsg}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
