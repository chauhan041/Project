import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("bg-indigo-200");

  return (
    <div className={`w-full h-screen duration-200 ${color}`}>
      <div className="flex flex-wrap fixed justify-center bottom-12 inset-x px-4 py-4 w-full rounded-full bg-slate-400">
        <div className="flex flex-wrap justify-around items-end gap-3 px-3 py-2">
          <button
            onClick={() => {
              setColor("bg-red-400");
            }}
            className="font-bold outline-none px-4 py-2 rounded-full text-white shadow-lg hover:bg-red-500 bg-red-700 "
          >
            Red
          </button>
          <button
            onClick={() => {
              setColor("bg-yellow-400");
            }}
            className="font-bold outline-none px-4 py-2 rounded-full text-white shadow-lg hover:bg-yellow-500 bg-yellow-700 "
          >
            Yellow
          </button>
          <button
            onClick={() => {
              setColor("bg-blue-400");
            }}
            className="font-bold outline-none px-4 py-2 rounded-full text-white shadow-lg hover:bg-blue-500 bg-blue-700"
          >
            Blue
          </button>
          <button
            onClick={() => {
              setColor("bg-indigo-400");
            }}
            className="font-bold outline-none px-4 py-2 rounded-full text-white shadow-lg hover:bg-indigo-500 bg-indigo-700"
          >
            Indigo
          </button>
          <button
            onClick={() => {
              setColor("bg-black");
            }}
            className="font-bold outline-none px-4 py-2 rounded-full text-white shadow-lg hover:bg-gray-700 bg-black"
          >
            Black
          </button>
          <button
            onClick={() => {
              setColor("bg-white");
            }}
            className="font-bold outline-none px-4 py-2 rounded-full text-gray-600 shadow-lg hover:bg-slate-300 bg-white"
          >
            White
          </button>
          <button
            onClick={() => {
              setColor("bg-green-400");
            }}
            className="font-bold outline-none px-4 py-2 rounded-full text-white shadow-lg hover:bg-green-500 bg-green-700"
          >
            Green
          </button>
          <button
            onClick={() => {
              setColor("bg-lime-400");
            }}
            className="font-bold outline-none px-4 py-2 rounded-full text-white shadow-lg hover:bg-lime-500 bg-lime-700"
          >
            Lime
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
