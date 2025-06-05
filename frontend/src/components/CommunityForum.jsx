import { useState } from "react";

export default function CommunityForumForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
    block: "",
    subject: "",
    image: null,
    video: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, type, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccess(false);
    setError("");

    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value) data.append(key, value);
      });

      const response = await fetch("/api/forum", {
        method: "POST",
        body: data,
      });

      if (!response.ok) throw new Error("Failed to submit form");

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        mobile: "",
        city: "",
        block: "",
        subject: "",
        image: null,
        video: null,
      });

      // Optionally reset file inputs manually (since they don't reset with state alone)
      document.querySelector('input[name="image"]').value = "";
      document.querySelector('input[name="video"]').value = "";

    } catch (err) {
      console.error(err);
      setError("Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto mb-8">
        <h2 className="text-center text-2xl font-bold mb-6">Community Forums</h2>
        <p className="text-center text-gray-600 mt-4">
          The Voice of Azamgarh hosts online forums or discussion boards where readers can engage in constructive conversations, share information, and exchange viewpoints on relevant matters.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="name" type="text" placeholder="Your Name" className="input w-full" value={formData.name} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Your Email" className="input w-full" value={formData.email} onChange={handleChange} required />
        <input name="mobile" type="text" placeholder="Mobile Number" className="input w-full" value={formData.mobile} onChange={handleChange} required />
        <input name="city" type="text" placeholder="City/Location" className="input w-full" value={formData.city} onChange={handleChange} />
        <input name="block" type="text" placeholder="Block" className="input w-full" value={formData.block} onChange={handleChange} />
        <input name="subject" type="text" placeholder="Subject" className="input w-full" value={formData.subject} onChange={handleChange} />

        <div className="col-span-2">
          <div className="flex flex-wrap items-center gap-6 mb-4">
            <div className="flex items-center gap-2">
              <label className="font-semibold">Image:</label>
              <input name="image" type="file" accept="image/*" className="input-file" onChange={handleChange} />
            </div>
            <div className="flex items-center gap-2">
              <label className="font-semibold">Video:</label>
              <input name="video" type="file" accept="video/*" className="input-file" onChange={handleChange} />
            </div>
          </div>

          <div className="flex flex-col items-center">
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>

            {success && <p className="mt-4 text-green-600 font-semibold">Submission successful!</p>}
            {error && <p className="mt-4 text-red-600 font-semibold">{error}</p>}
          </div>
        </div>
      </form>
    </section>
  );
}
