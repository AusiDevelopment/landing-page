"use client";

import Image from "next/image";

export default function Home() {
  return (
    <>

        <link rel="shortcut icon" href="https://www.ausidevelopment.xyz/assets/image/raw.png" />

        <style jsx>{`body {
      background-color: #0f0f0f;
    }
    .fade-in {
      opacity: 0;
      transform: translateY(20px);
      animation: fadeIn 1.2s ease-out forwards;
    }
    @keyframes fadeIn {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .pulse-border {
      border: 3px solid #ff0000;
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0%, 100% {
        box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.7);
      }
      50% {
        box-shadow: 0 0 20px 5px rgba(255, 0, 0, 0.9);
      }
    }`}</style>

      <div className="flex items-center justify-center h-screen text-white">
        <div className="text-center fade-in">
            <div className="inline-block p-8 rounded-2xl bg-zinc-900 pulse-border">
                <h1 className="text-4xl md:text-6xl font-bold text-red-600 mb-4">AusiDevelopment</h1>
                <p className="text-xl md:text-2xl text-white mb-6">Wir bauen digitale Lösungen. Bald geht es los.</p>
                <div className="mt-6">
                    <span className="inline-block px-6 py-2 border-2 border-white rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 cursor-default">
                        Cooming Soon
                    </span>
                </div>
                <p className="mt-10 text-gray-400 text-sm">Made with Love in Austria</p>
            </div>
        </div>
      </div>

    </>
  );
}
