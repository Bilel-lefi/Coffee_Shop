import React from "react";
import books1 from "../assets/books1.png";
import books2 from "../assets/books2.png";
import Navbar from "./Navbar";
function Books() {
  return (
    <>

      <div className="flex flex-col md:flex-row min-h-screen items-center justify-center p-8">
        <img
          src={books1}
          alt="hero images"
          className="w-full md:w-2/5 max-w-md mb-8 md:mb-0"
        />
        <div className="text-center md:text-left text-lg text-amber-50 leading-10 md:ml-8">
          <span className="block text-lg font-bold text-center">
            An exiled prince searching for the truth. <br />
            A curious squire desperate to prove himself. <br />
            An epic romance that will change the world.
          </span>
          <br />
          <p className="text-base text-[16px] block text-center md:text-left">
            Sixteen-year-old Prince Anden has no memory of the night his father
            died. People say he caused the accident; his brother the king has
            never forgiven him. Now, years later and exiled in disgrace, Anden
            receives a mysterious note. "You didn't slip. You were pushed. Your
            father didn't drown. He was murdered." Anden falls for mischievous
            palace squire River, but the timing couldn’t be worse. He returns
            home to find his kingdom threatened by enemy states on all sides,
            his brother about to come of age, and their uncle the Lord Regent
            making moves to usurp the throne. Anden must race to uncover a
            decades-old conspiracy before it destroys his kingdom, his family,
            and the boy he loves.
          </p>
          <br />
          <span className="block text-lg font-bold text-center">
            Book one of the CELESTIA trilogy - Coming soon{" "}
          </span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row min-h-screen items-center justify-center p-8">
        <img
          src={books2}
          alt="hero images"
          className="w-full md:w-2/5 max-w-xs mb-8 md:mb-0 -ml-60"
        />
        <div className="text-center md:text-left text-lg text-amber-50 leading-10 md:ml-8 ">
          <span className="block text-lg font-bold text-cente px-10">
            Books two and three of the CELESTIA trilogy - coming soon.
          </span>
        </div>
      </div>
    </>
  );
}

export default Books;
