"use client";

import React from "react";

export default function LocationsContent() {
  const locations = [
    {
      image:
        "https://th.bing.com/th/id/OIP.d30gJWBxKZ617UNYTm-MNgHaDt?rs=1&pid=ImgDetMain",
      title: "Downtown Soccer Arena",
      description:
        "Located in the heart of the city, this arena offers a vibrant atmosphere for soccer enthusiasts. Perfect for intense matches under the city lights.",
    },
    {
      image:
        "https://th.bing.com/th/id/R.73f115b6b3e0ee04c3f4dda692a9d6ca?rik=guHohBmw8HPfFg&pid=ImgRaw&r=0",
      title: "Seaside Football Grounds",
      description:
        "Feel the ocean breeze as you play on our seaside pitch. Ideal for casual games and breathtaking views.",
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.wUHwU3Vs6Eg3iJlTZ1fkMQHaEK?rs=1&pid=ImgDetMain",
      title: "Mountain View Fields",
      description:
        "Nestled among rolling hills, these fields offer a tranquil setting for competitive and friendly matches alike.",
    },
    {
      image:
        "https://th.bing.com/th/id/R.ae8fdd36ae86137f0045a0720fe2f9a3?rik=cjKWXJBD2m%2fMsA&pid=ImgRaw&r=0",
      title: "Sunset Soccer Park",
      description:
        "Play your favorite sport as the sun sets over the horizon, creating a perfect backdrop for memorable games.",
    },
  ];

  return (
    <div className="min-h-screen py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-16">
        <h1 className="text-5xl font-bold text-center mb-12">Our Locations</h1>
        <p className="text-lg text-center mb-8">
          Discover our premium soccer locations. Each venue is designed to
          provide the perfect environment for players of all levels to enjoy
          their game.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={location.image}
                alt={location.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{location.title}</h2>
                <p className="text-gray-300">{location.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
