import React from "react";
import Image from "next/image";

const FAQContent = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Título Principal */}
        <h1 className="text-5xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h1>

        {/* Sección con imagen y descripción */}
        <div className="flex flex-col lg:flex-row items-center mb-12">
          {/* Imagen a la izquierda */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <Image
              src="https://vignette.wikia.nocookie.net/althistory/images/a/ac/Partido_F%C3%BAtbol.jpg/revision/latest/scale-to-width-down/2000?cb=20150629180347&path-prefix=es"
              alt="Soccer Game"
              className="rounded-lg shadow-lg object-cover"
              width={2000}
              height={1125}
            />
          </div>

          {/* Texto a la derecha */}
          <div className="lg:w-1/2 lg:pl-12">
            <h2 className="text-3xl font-bold mb-6">
              All Your Questions, Answered
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              At KickIt365, we understand that questions arise when joining a
              new community or participating in new activities. That&#39;s why
              we&#39;ve compiled this FAQ to help you navigate with ease.
            </p>
            <p className="text-md text-gray-400">
              If you have additional questions, feel free to contact us.
              We&#39;re here to ensure your experience is seamless and
              enjoyable!
            </p>
          </div>
        </div>

        {/* Sección de Preguntas Frecuentes */}
        <div className="bg-gray-800 py-8 px-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-6">
            Common Questions
          </h3>
          <ul className="space-y-6">
            <li>
              <h4 className="text-xl font-bold mb-2">
                How do I join a league?
              </h4>
              <p className="text-gray-300">
                You can sign up through our registration page. Select the league
                that suits your skill level and schedule!
              </p>
            </li>
            <li>
              <h4 className="text-xl font-bold mb-2">
                What equipment do I need?
              </h4>
              <p className="text-gray-300">
                Basic soccer gear includes cleats, shin guards, and a ball.
                We&#39;ll provide uniforms and other necessary items.
              </p>
            </li>
            <li>
              <h4 className="text-xl font-bold mb-2">
                Are there training sessions available?
              </h4>
              <p className="text-gray-300">
                Yes! We offer group and individual training sessions for players
                of all levels.
              </p>
            </li>
            <li>
              <h4 className="text-xl font-bold mb-2">
                How do I stay updated on upcoming events?
              </h4>
              <p className="text-gray-300">
                Follow us on social media or subscribe to our newsletter for the
                latest updates and announcements.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FAQContent;
