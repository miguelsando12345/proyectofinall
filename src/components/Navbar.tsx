import React from "react";
import Link from "next/link"; // Importa Link de Next.js para navegación

const Navbar = () => {
  return (
    <nav className="bg-black py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo principal a la izquierda */}
        <Link href="/">
          <img
            src="https://static.vecteezy.com/system/resources/previews/023/579/934/non_2x/illustration-of-soccer-logo-it-s-for-champion-concept-png.png"
            alt="Main Logo"
            className="h-12 cursor-pointer"
          />
        </Link>

        {/* Navegación */}
        <ul className="flex items-center space-x-6 text-white font-semibold">
          {/* Enlaces principales */}
          <li>
            <Link href="/" className="hover:text-gray-400 cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/leagues"
              className="hover:text-gray-400 cursor-pointer"
            >
              Leagues
            </Link>
          </li>
          <li>
            <Link
              href="/training"
              className="hover:text-gray-400 cursor-pointer"
            >
              Training
            </Link>
          </li>
          <li>
            <Link href="/social" className="hover:text-gray-400 cursor-pointer">
              Social
            </Link>
          </li>
          <li>
            <Link
              href="/locations"
              className="hover:text-gray-400 cursor-pointer"
            >
              Locations
            </Link>
          </li>
          <li>
            <Link href="/faq" className="hover:text-gray-400 cursor-pointer">
              FAQ
            </Link>
          </li>
          <li>
            <Link href="/hiring" className="hover:text-gray-400 cursor-pointer">
              Hiring
            </Link>
          </li>
          <li>
            <Link href="/video" className="hover:text-gray-400 cursor-pointer">
              Video
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-gray-400 cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Logos adicionales como botones */}
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com/share/15YPPTrxMu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://static.vecteezy.com/system/resources/previews/017/221/797/original/facebook-logo-transparent-background-free-png.png"
              alt="Facebook Logo"
              className="h-10 w-10 rounded-full border-2 border-white hover:shadow-lg"
            />
          </a>
          <a
            href="https://x.com/futbolenredmx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://freelogopng.com/images/all_img/1690643591twitter-x-logo-png.png"
              alt="X (Twitter) Logo"
              className="h-10 w-10 rounded-full border-2 border-white hover:shadow-lg"
            />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://static.vecteezy.com/system/resources/previews/018/930/413/large_2x/instagram-logo-instagram-icon-transparent-free-png.png"
              alt="Instagram Logo"
              className="h-10 w-10 rounded-full border-2 border-white hover:shadow-lg"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
