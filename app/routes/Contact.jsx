import React from 'react';
import { MyHero } from '../components/MyHero';
import { MyHeader } from '../components/MyHeader';
import { MyFotter } from '../components/MyFotter';



const Contact = () => {
  return (
    <div>
      <MyHeader/>
    <div className="bg-gray-50 py-12">
      
      <div className="container mx-auto px-4">
        <h1 className="text-center text-3xl font-semibold text-gray-800 mb-10">
          Feel Free to Contact Us
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54432.741740437115!2d74.27195392648227!3d31.495409539461832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919039c2e7120f3%3A0xf99aee2a0b057d81!2sGovernment%20Graduate%20College%20of%20Science!5e0!3m2!1sen!2s!4v1725869299548!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>

         
          <div className="flex items-center justify-center bg-gray-100 p-6 rounded-lg shadow-md">
            <form action="https://formspree.io/f/mjkbzdgp" method="post" className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md space-y-6">
              <input
                type="text"
                name="username"
                placeholder="Enter Your Name"
                autoComplete="off"
                required
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                autoComplete="off"
                required
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
              />
              <textarea
                name="message"
                cols="30"
                rows="6"
                autoComplete="off"
                required
                placeholder="Enter Your Message"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
              ></textarea>
              <button
                type="submit"
                value="send"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <MyFotter/>



    </div>
  );
};

export default Contact;
