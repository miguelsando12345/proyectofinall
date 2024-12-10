"use client";

import { useState } from "react";

export default function ResetPasswordForm() {
  const [email, setEmail] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Formulario de restablecimiento de contraseña enviado");
    // Aquí podrías agregar la lógica para enviar un enlace de restablecimiento.
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
          value={email}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
      >
        Reset Password
      </button>
    </form>
  );
}
