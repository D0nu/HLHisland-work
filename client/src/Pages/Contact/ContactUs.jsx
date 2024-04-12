import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Contact.css'

export default function ContactUs() {
  const contactUsImage = './hero4.jpg';

  
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      try {
        const response = await fetch('/api/email/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        if (response.ok) {
          setSuccessMessage('Message sent successfully!');
        } else {
          throw new Error('Failed to send message');
        }
      } catch (error) {
        console.error(error);
        setErrorMessage('Failed to send message. Please try again later.');
      }
      setLoading(false);
    };
  
  return (
    <div className="text-black py-16 mb-0">
      <div className="relative bg-cover bg-center h-64">
        <img src={contactUsImage} alt="About Us" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gold opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <h1 className="text-black text-4xl font-bold mb-3">Contact Us</h1>
        </div>
      </div>
    <div className="container mx-auto px-4 h-full">
      <div className="flex flex-col ">
          <h2 className="text-4xl font-bold mb-6 mt-20 max-w-lg mx-auto">Send us a Message</h2>
          <form className="mb-8 max-w-lg mx-auto"  onSubmit={handleSubmit}>
            <input
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-500 placeholder-gray-500 focus:outline-none focus:border-white mb-4 p-3"
              placeholder="Name"
              required
            />
            <input
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-500 placeholder-gray-500 focus:outline-none focus:border-white mb-4 p-3"
              placeholder="Email"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-500 placeholder-gray-500 focus:outline-none focus:border-white mb-4 p-3"
              placeholder="Message"
              rows="4"
              required
            ></textarea>
            <button
            type="submit" 
            className="bg-yellow-600 text-black py-2 px-4 rounded-full hover:bg-yellow-500 transition duration-300 font-semibold"
            disabled={loading}>

              {loading ? 'Sending...' : 'Send Message'}
              
              </button>
              {successMessage && 
              <p className="text-green-500">
                {successMessage}
              </p>}
                {errorMessage && 
              <p className="text-red-500">
                {errorMessage}
              </p>}
          </form>

          <div className="md:pr-8 mx-auto px-4 flex flex-col">
          <h2 className="text-4xl font-bold mb-6 mt-20 max-w-lg mx-auto">Get In Touch</h2>
          <div className="flex items-center justify-center mb-6 p-3 max-w-lg mx-auto gap-7">
            <Link to=""></Link><FaFacebook className="text-2xl mr-4" />
            <Link to=""></Link><FaTwitter className="text-2xl mr-4" />
            <Link to=""></Link><FaInstagram className="text-2xl mr-4" />
            <Link to=""></Link><FaWhatsapp className="text-2xl mr-4" />
          </div>
        </div>
        <div className="flex gap-6 items-center justify-center mb-0">
        <div className="flex flex-wrap justify-center lg:justify-between mb-0 gap-6">
          {/* Email */}
          <div className="bg-yellow-600 text-black py-4 px-6 rounded-lg w-full lg:w-auto mb-4">
            <h3 className="font-bold mb-2 text-xl lg:text-2xl">Our Email</h3>
            <span className="block  text-sm mt-3 mb-3 w-80">For more enquiries you can send us a mail at the below email address</span>
            <p>info@example.com</p>
          </div>
          
          {/* Address */}
          <div className="bg-yellow-600 text-black py-4 px-6 rounded-lg w-full lg:w-auto mb-4">
            <h3 className="font-bold mb-2 text-xl lg:text-2xl">Our Address</h3>
            <span className="text-sm mt-3 ">For in person negotiations, visit us at; </span>
            <p className='font-extrabold text-sm mt-2'>123 Main Street, City, Country</p>
          </div>
          
          {/* Phone Number */}
          <div className="bg-yellow-600 text-black py-4 px-6 rounded-lg w-full lg:w-auto mb-4">
            <h3 className="font-bold mb-2 text-xl lg:text-2xl">Our Number</h3>
            <span className="text-sm mb-2">For enquiries over the phone, Contact us at;</span>
            <p className="mt-2">1234567890</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
);
}
 
