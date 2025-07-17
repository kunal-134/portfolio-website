import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('There was an error submitting your message. Please try again.');
      }
    } catch (error) {
      alert('Failed to connect to the backend. Please try again later.');
    }
  };


  return (
    <section id="contact" className="text-gray-100 py-20 px-4 bg-transparent">
      {submitted ? (
        <div className="text-center text-green-400 text-lg font-semibold mb-8">Thank you for reaching out! I will get back to you soon.</div>
      ) : (
        <div className="max-w-2xl mx-auto rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-extrabold mb-8 text-center text-yellow-400">Contact Me</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2 text-yellow-300 font-semibold" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <label className="block mb-2 text-yellow-300 font-semibold" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <label className="block mb-2 text-yellow-300 font-semibold" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-full bg-yellow-400 text-gray-900 font-bold shadow-md hover:bg-yellow-300 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      )}
    </section>
  );
}

export default Contact;
