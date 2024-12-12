import React from "react";
import Image from "next/image"; // Importa el componente Image de Next.js

const SocialContent = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Título Principal */}
        <h1 className="text-5xl font-bold text-center mb-12">Social</h1>

        {/* Sección de contenido */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          {/* Imagen a la izquierda */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <Image
              src="https://as01.epimg.net/futbol/imagenes/2021/02/11/reportajes/1613002271_264040_1613002427_noticiareportajes_grande.jpg"
              alt="Social Events"
              className="rounded-lg shadow-lg w-full object-cover"
              width={600}
              height={400}
            />
          </div>

          {/* Texto a la derecha */}
          <div className="lg:w-1/2 lg:pl-12">
            <h2 className="text-3xl font-bold mb-6">
              Where Soccer Meets Friendship
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Soccer is more than just a game – it&#39;s a way to connect with
              people who share your passion. At KickIt365, we bring players
              together to form lifelong friendships, both on and off the field.
            </p>
            <p className="text-md text-gray-400 mb-4">
              Whether you&#39;re looking to expand your network, share a laugh
              over a post-match drink, or attend fun social events, our
              community is here for you. With a range of activities tailored for
              soccer enthusiasts, there&#39;s always something to look forward
              to.
            </p>
            <p className="text-md text-gray-400">
              Join our vibrant community and experience the joy of camaraderie,
              shared victories, and unforgettable memories. Together, we make
              soccer more than just a sport – we make it a lifestyle.
            </p>
          </div>
        </div>

        {/* Sección Adicional */}
        <div className="mt-16 bg-gray-800 py-8 px-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-4">
            Upcoming Social Events
          </h3>
          <p className="text-center text-lg text-gray-300 leading-relaxed">
            Don&#39;t miss out on our upcoming events! From casual meetups to
            exciting tournaments, there&#39;s something for everyone. Stay
            connected, stay active, and make memories with KickIt365.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialContent;
