import React from "react";
import a from "../assets/Rectangle.png";
import b from "../assets/Rectangle1.png";
import c from "../assets/Rectangle2.png";
import d from "../assets/Rectangle3.png";

function Menu() {
  return (
    <div className="min-h-screen flex flex-col items-center p-8" id="menu">
      {/* Title Section */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-[#603809]">
          Enjoy a new blend of coffee style
        </h1>
        <h2 className="text-lg text-[#707070] mt-2">
          Explore all flavours of coffee with us. There is always a new cup
          worth experiencing
        </h2>
      </div>

      {/* Coffee Menu */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 max-w-5xl">
        {coffeeItems.map((item, index) => (
          <div
            key={index}
            style={{ backgroundColor: "F9C06A" }}
            className="  shadow-lg overflow-hidden text-center border border-[#fbac3d]  bg-[#FFF9F1]"
          >
            <img src={item.image} alt={item.name} className="w-full h-48 " />
            <h3 className="text-xl font-semibold mt-4">{item.name}</h3>
            <p className="text-gray-600">Coffee 50% | Milk 50%</p>
            <p className="text-lg font-bold mt-2">$8.50</p>
            <div className="flex flex-auto items-center justify-center ">

              <button className="mt-auto bg-yellow-500 text-black px-6 py-2 rounded-full shadow hover:bg-yellow-600 mb-5 cursor-pointer">
                Order Now
              </button>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
}

const coffeeItems = [
  {
    name: "Cappuccino",
    image: a,
  },
  {
    name: "Chai Latte",
    image: b,
  },
  {
    name: "Macchiato",
    image: c,
  },
  {
    name: "Expresso",
    image: d,
  },
];

export default Menu;
