"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const handleRegisterClick = () => {
    router.push("/register");
  };

  return (
    <div>
      {/* Sección Hero con el GIF */}
      <div
        className="relative flex flex-col items-center justify-center h-screen text-center"
        style={{
          background:
            'url("https://i.pinimg.com/originals/6e/26/67/6e266752cceac967e406b013629c4e41.gif") no-repeat center center fixed',
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-5xl font-bold text-white mb-6">
          ¡Bienvenido a la Pasión del Fútbol!
        </h1>
        <button
          onClick={handleRegisterClick}
          className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-600"
        >
          Register Now
        </button>
      </div>

      {/* Sección "ARE YOU READY TO PLAY?" */}
      <div className="bg-gray-800 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">ARE YOU READY TO PLAY?</h2>

          {/* Tarjetas con contenido */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tarjeta 1 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col justify-between">
              <h3 className="text-2xl font-bold mb-4">
                Team, Small Group or Individual
              </h3>
              <button
                onClick={handleRegisterClick}
                className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-600 mt-auto"
              >
                Register Now
              </button>
            </div>

            {/* Tarjeta 2 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col justify-between">
              <h3 className="text-2xl font-bold mb-4">
                ARE YOU LOOKING FOR COACHING?
              </h3>
              <p className="text-gray-300 mb-4">
                Adult Group Training & Private Training
              </p>
              <button
                onClick={handleRegisterClick}
                className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-600 mt-auto"
              >
                Register Now
              </button>
            </div>

            {/* Tarjeta 3 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col justify-between">
              <h3 className="text-2xl font-bold mb-4">
                READY TO MAKE NEW FRIENDS?
              </h3>
              <p className="text-gray-300 mb-4">
                Soccer social events, networking or fun outside the pitch
              </p>
              <button
                onClick={handleRegisterClick}
                className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-600 mt-auto"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Texto y Video */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between">
          {/* Texto centrado con margen */}
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              ¡Descubre Nuestra Comunidad!
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              En KICKIT365 transformamos el fútbol en una experiencia completa.
              Conéctate con jugadores apasionados y haz amigos dentro y fuera de
              la cancha.
            </p>
          </div>

          {/* Video a la derecha */}
          <div className="lg:w-1/2 flex justify-center lg:ml-10">
            <iframe
              className="rounded-lg shadow-lg"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/fPAtCcgFHfE"
              title="KickIt365 Overview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
