import React from "react";
import { Clock, Truck, Heart, Shield } from "lucide-react";

function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          About cravings.io
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your favorite local restaurants, delivered to your doorstep with love
          and care.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
            alt="Delicious food spread"
            className="rounded-lg shadow-xl"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2023, cravings.io was born from a simple idea: to connect
            food lovers with their favorite local restaurants. We believe that
            great food should be accessible to everyone, anytime.
          </p>
          <p className="text-gray-600">
            Today, we partner with thousands of restaurants across the city to
            bring you the best culinary experiences, from street food to fine
            dining, all at your fingertips.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-8 mb-16">
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <Clock className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Quick Delivery</h3>
          <p className="text-gray-600">Average delivery time of 30 minutes</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <Truck className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Live Tracking</h3>
          <p className="text-gray-600">Real-time order tracking</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Quality Food</h3>
          <p className="text-gray-600">Partnered with top restaurants</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <Shield className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Food Safety</h3>
          <p className="text-gray-600">Highest safety standards</p>
        </div>
      </div>

      <div className="bg-red-50 rounded-xl p-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Join Our Food Journey
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Whether you're craving pizza, burgers, or local delicacies, we're here
          to satisfy your hunger with just a few taps.
        </p>
        <button className="bg-red-500 text-white px-8 py-3 rounded-md hover:bg-red-600 transition-colors">
          Order Now
        </button>
      </div>
    </div>
  );
}

export default About;
