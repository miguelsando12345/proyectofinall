import React from "react";

const TrainingContent = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Título principal */}
        <h1 className="text-5xl font-bold text-center mb-12">Training</h1>

        {/* Contenido en dos columnas */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          {/* Columna de texto */}
          <div className="lg:w-1/2 lg:pr-12">
            <h2 className="text-3xl font-bold mb-6">Master Your Skills</h2>
            <p className="text-lg leading-relaxed mb-4">
              Take your game to the next level with professional training.
              Whether you're looking to improve your technical skills, tactical
              understanding, or physical fitness, we have something for every
              player.
            </p>
            <p className="text-md text-gray-400 mb-4">
              Our experienced coaches use proven methodologies to help players
              of all levels achieve their full potential. Join a community of
              athletes striving for excellence both on and off the pitch.
            </p>
            <p className="text-md text-gray-400">
              From personalized training sessions to group workshops, we ensure
              a balanced and enjoyable experience. Let’s build your confidence
              and skills today!
            </p>
          </div>

          {/* Columna de imagen */}
          <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
            <img
              src="https://th.bing.com/th/id/OIP.VRYUfcp1TTW5Ps7_CpPOsgHaE7?rs=1&pid=ImgDetMain"
              alt="Training Session"
              className="rounded-lg shadow-lg w-full lg:w-3/4 object-cover"
            />
          </div>
        </div>

        {/* Sección adicional */}
        <div className="mt-16 bg-gray-800 py-8 px-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-4">
            Why Choose Our Training Programs?
          </h3>
          <p className="text-center text-lg text-gray-300 leading-relaxed">
            We believe in fostering a supportive and challenging environment
            where players can thrive. Whether you're preparing for competitive
            play or just starting out, our training programs are tailored to
            suit your needs. Join us and discover the joy of growth, teamwork,
            and achievement!
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrainingContent;
