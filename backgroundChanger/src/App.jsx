import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  function handleClick(event) {
    // console.log(event.target.style.backgroundColor);
    const currentColor = event.target.style.backgroundColor;
    setColor(currentColor);
  }

  return (
    <div
      className="w-screen h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <nav className="fixed inset-x-0 bottom-12 flex flex-wrap justify-center">
        <div className="bg-stone-200 p-4 flex flex-wrap justify-center gap-3 rounded-3xl">
          <button
            className="rounded-3xl outline-none shadow-lg text-white px-4 py-1"
            style={{ backgroundColor: "red" }}
            onClick={handleClick}
          >
            Red
          </button>
          <button
            className="rounded-3xl text-white px-4 py-1"
            style={{ backgroundColor: "green" }}
            onClick={handleClick}
          >
            Green
          </button>
          <button
            className="rounded-3xl text-white px-4 py-1"
            style={{ backgroundColor: "blue" }}
            onClick={handleClick}
          >
            Blue
          </button>
          <button
            className="rounded-3xl text-white px-4 py-1"
            style={{ backgroundColor: "olive" }}
            onClick={handleClick}
          >
            Olive
          </button>
          <button
            className="rounded-3xl text-white px-4 py-1"
            style={{ backgroundColor: "gray" }}
            onClick={handleClick}
          >
            Gray
          </button>
          <button
            className="rounded-3xl text-white px-4 py-1"
            style={{ backgroundColor: "yellow" }}
            onClick={handleClick}
          >
            Yellow
          </button>
          <button
            className="rounded-3xl text-white px-4 py-1"
            style={{ backgroundColor: "pink" }}
            onClick={handleClick}
          >
            Pink
          </button>
          <button
            className="rounded-3xl text-white px-4 py-1"
            style={{ backgroundColor: "purple" }}
            onClick={handleClick}
          >
            Purple
          </button>
          <button
            className="rounded-3xl text-white px-4 py-1"
            style={{ backgroundColor: "lavender" }}
            onClick={handleClick}
          >
            Lavender
          </button>
          <button
            className="rounded-3xl px-4 py-1"
            style={{ backgroundColor: "white" }}
            onClick={handleClick}
          >
            white
          </button>
          <button
            className="rounded-3xl text-white px-4 py-1"
            style={{ backgroundColor: "black" }}
            onClick={handleClick}
          >
            Black
          </button>
        </div>
      </nav>
    </div>
  );
}

export default App;
