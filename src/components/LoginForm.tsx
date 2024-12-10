"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Formulario de inicio de sesión enviado");
    // Aquí podrías agregar la lógica de autenticación.
  };

  const handleForgotPassword = () => {
    router.push("/reset-password");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium mb-1">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
      >
        Login
      </button>
      <button
        type="button"
        onClick={handleForgotPassword}
        className="w-full text-blue-500 hover:underline"
      >
        Forgot Password?
      </button>
    </form>
  );
}
