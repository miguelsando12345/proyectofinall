import React from "react";

const HiringContent = () => {
  return (
    <div className="min-h-screen py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Título principal */}
        <h1 className="text-5xl font-bold text-center mb-12">Join Our Team</h1>

        {/* Sección de imagen y descripción */}
        <div className="flex flex-col lg:flex-row items-center mb-12">
          {/* Imagen a la izquierda */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <img
              src="https://i.pinimg.com/736x/27/a7/fb/27a7fbac325631309d6d68af3cbc8f13.jpg"
              alt="Hiring"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>

          {/* Texto a la derecha */}
          <div className="lg:w-1/2 lg:pl-12">
            <h2 className="text-3xl font-bold mb-6">
              Be Part of Something Great
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              At KickIt365, we're always looking for passionate, talented, and
              dedicated individuals to join our team. Whether you're a coach, an
              organizer, or someone who loves soccer, we have a spot for you!
            </p>
            <p className="text-md text-gray-400">
              Grow your career while helping us build an amazing community of
              soccer enthusiasts. Make a difference on and off the field!
            </p>
          </div>
        </div>

        {/* Sección de detalles */}
        <div className="bg-gray-800 py-8 px-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-6">
            Why Work With Us?
          </h3>
          <ul className="space-y-6">
            <li>
              <h4 className="text-xl font-bold mb-2">
                Collaborative Environment
              </h4>
              <p className="text-gray-300">
                Join a supportive team that values teamwork, creativity, and
                innovation.
              </p>
            </li>
            <li>
              <h4 className="text-xl font-bold mb-2">
                Opportunities for Growth
              </h4>
              <p className="text-gray-300">
                We invest in our team members through training, mentorship, and
                career development.
              </p>
            </li>
            <li>
              <h4 className="text-xl font-bold mb-2">A Love for Soccer</h4>
              <p className="text-gray-300">
                Share your passion for the game with a community that lives and
                breathes soccer.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HiringContent;
