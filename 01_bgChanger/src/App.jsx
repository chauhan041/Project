import { useState } from "react";

function App() {
  const [color, setColor] = useState("bg-indigo-200");

  return (
    <div className={`w-full h-screen duration-200 ${color}`}>
      <div className="flex flex-wrap fixed justify-center bottom-12 inset-x px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button>Red</button>
        </div>
      </div>
    </div>
  );
}

export default App;
