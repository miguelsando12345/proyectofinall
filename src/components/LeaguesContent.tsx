import React from "react";

const LeaguesContent = () => {
  return (
    <div className="min-h-screen py-16 px-6 bg-gray-900 text-white">
      <h1 className="text-5xl font-bold text-center mb-8">Leagues</h1>

      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Contenedor de texto */}
        <div className="md:w-1/2 mb-6 md:mb-0 flex flex-col justify-center text-center md:text-left">
          <p className="text-lg mb-4">
            Football is more than just a sport; it’s a spectacle that captivates
            millions around the globe. The top leagues, from the Premier League
            to La Liga, showcase the pinnacle of talent and competition.
          </p>
          <p className="text-md mb-4">
            Each season is packed with epic rivalries, dramatic victories, and
            moments that become legendary. Fans gather at stadiums and watch
            from home, cheering for their favorite teams and players.
          </p>
          <p className="text-md mb-4">
            Explore the passion, the culture, and the unforgettable stories that
            make each league unique and cherished.
          </p>
          <button className="bg-red-500 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-red-600 transition duration-300 mt-4">
            Explore Leagues
          </button>
        </div>

        {/* Contenedor de la imagen */}
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src="https://wallpaperaccess.com/full/1398616.jpg"
            alt="Football Match"
            className="w-full md:w-96 h-80 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default LeaguesContent;
