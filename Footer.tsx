import React from 'react';

interface FooterProps {
  language: 'en' | 'es';
}

export function Footer({ language }: FooterProps) {
  const text = language === 'en' ? "Data Source: Essbase" : "Fuente de Datos: Essbase";

  return (
    <footer className="px-6 lg:px-20 py-4 border-t border-gray-700 bg-gray-900">
      <p className="text-sm text-gray-400">
        {text}
      </p>
    </footer>
  );
}