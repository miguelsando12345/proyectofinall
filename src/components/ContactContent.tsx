"use client";

import React from "react";

export default function ContactContent() {
  return (
    <div className="min-h-screen py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Título Principal */}
        <h1 className="text-5xl font-bold text-center mb-12">Get in Touch</h1>

        {/* Sección de Descripción */}
        <p className="text-lg text-center mb-12">
          Have questions, suggestions, or just want to say hello? We're here to
          help! Reach out to us and let's connect. Whether it's about joining a
          league, coaching, or anything soccer-related, we’d love to hear from
          you.
        </p>

        {/* Formulario de Contacto */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg mb-12">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2" htmlFor="message">
                Your Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Write your message here"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-red-500 px-6 py-3 rounded-lg text-white font-bold hover:bg-red-600 shadow-lg"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Información de Contacto */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center lg:justify-between bg-gray-800 p-8 rounded-lg shadow-lg">
          <div className="mb-6 lg:mb-0">
            <h2 className="text-3xl font-bold mb-4">Contact Details</h2>
            <p className="text-gray-300 mb-2">
              <strong>Email:</strong> support@kickit365.com
            </p>
            <p className="text-gray-300 mb-2">
              <strong>Phone:</strong> +1 (555) 123-4567
            </p>
            <p className="text-gray-300">
              <strong>Address:</strong> 123 Soccer Lane, Football City, CA 98765
            </p>
          </div>

          {/* Imagen decorativa */}
          <div>
            <img
              src="https://i.pinimg.com/736x/ff/63/82/ff638263c62c53b589c5d6a2d11c2959.jpg"
              alt="Contact Us"
              className="rounded-lg shadow-lg w-full lg:w-96"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
