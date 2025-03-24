import React from "react";
import Navbar from "./Navbar";
function Home() {
  return (
    <>
      <div className="relative min-h-screen bg-cover bg-center bg-no-repeat">
        {/* Navigation Bar */}

        {/* Contenu principal */}
        <div className="relative flex flex-col items-center justify-center min-h-screen px-6 w-full text-white">
          <div className="relative bg-white text-black p-6 rounded-lg shadow-lg max-w-md w-full self-start md:ml-50 md:mt:20">
            <h2 className="text-xl font-bold text-left">Mailing list</h2>
            <p className="text-sm text-left">
              Sign up for exclusive previews and free content!
            </p>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mt-2 border rounded"
            />
            <button className="w-full mt-2 bg-black text-white p-2 rounded hover:bg-gray-800">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
