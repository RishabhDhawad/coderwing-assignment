import React from "react";
import { Mail, PhoneCall } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row bg-white  rounded-lg overflow-hidden">
          
          {/* Left Side - Contact Info */}
          <div className="w-full md:w-1/3 bg-white p-6 border-r">
            {/* Call Section */}
            <div className="mb-6">
              <div className="flex items-center space-x-3">
                <PhoneCall className="text-red-500" />
                <h3 className="font-semibold text-lg">Call To Us</h3>
              </div>
              <p className="text-gray-600 mt-2">We are available 24/7, 7 days a week.</p>
              <p className="font-medium mt-2">Phone: +880611112222</p>
            </div>

            <hr className="border-gray-300 my-4" />

            {/* Email Section */}
            <div>
              <div className="flex items-center space-x-3">
                <Mail className="text-red-500" />
                <h3 className="font-semibold text-lg">Write To Us</h3>
              </div>
              <p className="text-gray-600 mt-2">Fill out our form and we will contact you within 24 hours.</p>
              <p className="mt-2 font-medium">Emails: customer@exclusive.com</p>
              <p className="font-medium">support@exclusive.com</p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-full md:w-2/3 p-6">
            <div className="flex flex-wrap -mx-2">
              {/* Name Input */}
              <div className="w-full md:w-1/3 px-2 mb-4">
                <input
                  type="text"
                  placeholder="Your Name *"
                  className="w-full border rounded-lg p-3 text-gray-700 bg-gray-100 focus:ring-2 focus:ring-red-500"
                />
              </div>
              {/* Email Input */}
              <div className="w-full md:w-1/3 px-2 mb-4">
                <input
                  type="email"
                  placeholder="Your Email *"
                  className="w-full border rounded-lg p-3 text-gray-700 bg-gray-100 focus:ring-2 focus:ring-red-500"
                />
              </div>
              {/* Phone Input */}
              <div className="w-full md:w-1/3 px-2 mb-4">
                <input
                  type="text"
                  placeholder="Your Phone *"
                  className="w-full border rounded-lg p-3 text-gray-700 bg-gray-100 focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            {/* Message Input */}
            <div className="w-full px-2 mb-4">
              <textarea
                placeholder="Your Message"
                className="w-full h-32 border rounded-lg p-3 text-gray-700 bg-gray-100 focus:ring-2 focus:ring-red-500"
              ></textarea>
            </div>

            {/* Send Message Button */}
            <div className="w-full px-2">
              <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600">
                Send Message
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
