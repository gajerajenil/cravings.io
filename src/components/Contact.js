import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're here to help! Reach out to us for any questions or concerns.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h2>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                placeholder="How can we help?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="space-y-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-red-500 mr-4" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-red-500 mr-4" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">support@cravings.io</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-red-500 mr-4" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-gray-600">
                    123 Foodie Street, Cuisine City, FC 12345
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-red-500 mr-4" />
                <div>
                  <p className="font-medium">Hours</p>
                  <p className="text-gray-600">24/7 Customer Support</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">How do I track my order?</h3>
                <p className="text-gray-600">
                  You can track your order in real-time through our app or
                  website.
                </p>
              </div>
              <div>
                <h3 className="font-medium">What's the delivery radius?</h3>
                <p className="text-gray-600">
                  We deliver within a 10km radius of our partner restaurants.
                </p>
              </div>
              <div>
                <h3 className="font-medium">How can I become a partner?</h3>
                <p className="text-gray-600">
                  Contact our business team at partners@cravings.io
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
