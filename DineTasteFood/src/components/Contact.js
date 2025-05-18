import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, subject, category, message } = formData;

    if (!name || !email || !phone || !subject || !category || !message) {
      toast.error("Please fill out all fields!");
      return;
    }

    toast.success("Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      category: "",
      message: "",
    });
  };

  return (
    <div className="container mx-auto bg-white min-h-screen py-12 px-4 flex justify-center items-center">
      <div className="w-full max-w-4xl bg-gray-200 text-black rounded-xl shadow-xl p-10">
        <h2 className="text-4xl font-bold text-yellow-400 text-center mb-10">
          Get in Touch
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="col-span-1">
            <label className="text-black block mb-2 text-lg">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-white text-black focus:ring-2 focus:ring-yellow-400"
              placeholder="John Doe"
            />
          </div>

          <div className="col-span-1">
            <label className="text-black block mb-2 text-lg">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-white text-black focus:ring-2 focus:ring-yellow-400"
              placeholder="you@example.com"
            />
          </div>

          <div className="col-span-1">
            <label className="text-black block mb-2 text-lg">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-white text-black focus:ring-2 focus:ring-yellow-400"
              placeholder="9876543210"
            />
          </div>

          <div className="col-span-1">
            <label className="text-black block mb-2 text-lg">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-white text-black focus:ring-2 focus:ring-yellow-400"
              placeholder="Your reason for contacting"
            />
          </div>

          <div className="col-span-1 md:col-span-2">
            <label className="text-black block mb-2 text-lg">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-white text-black focus:ring-2 focus:ring-yellow-400"
            >
              <option value="">Select a category</option>
              <option value="Feedback">Feedback</option>
              <option value="Support">Support</option>
              <option value="Collaboration">Collaboration</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div className="col-span-1 md:col-span-2">
            <label className="text-black block mb-2 text-lg">
              Your Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full p-4 rounded-xl bg-white text-black focus:ring-2 focus:ring-yellow-400"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          <div className="col-span-1 md:col-span-2 text-center">
            <button
              type="submit"
              className="w-full md:w-1/3 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 rounded-2xl transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default ContactForm;
