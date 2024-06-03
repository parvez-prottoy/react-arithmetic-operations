import React from "react";

const App = () => {
  return (
    <div className="w-[50%] m-auto bg-white shadow-sm p-8 rounded-lg mt-4">
      <h1 className="text-4xl font-bold border rounded-md p-3">Result : 0</h1>
      <div className="my-4 grid grid-cols-2">
        <input className="border p-2" type="number" />
        <input className="border p-2" type="number" />
      </div>
      <div className="my-4">
        <h2 className="text-2xl font-medium border rounded-md p-3">
          Operations
        </h2>
        <div className="flex justify-around items-center gap-4 text-white my-3">
          <button className="bg-indigo-400 px-6 py-3 rounded-md text-lg font-bold">
            +
          </button>
          <button className="bg-indigo-400 px-6 py-3 rounded-md text-lg font-bold">
            -
          </button>
          <button className="bg-indigo-400 px-6 py-3 rounded-md text-lg font-bold">
            *
          </button>
          <button className="bg-indigo-400 px-6 py-3 rounded-md text-lg font-bold">
            /
          </button>
          <button className="bg-indigo-400 px-6 py-3 rounded-md text-lg font-bold">
            %
          </button>
          <button className="bg-red-400 px-6 py-3 rounded-md text-lg font-bold">
            Clear
          </button>
        </div>
      </div>
      <div className="my-4">
        <h2 className="text-2xl font-medium border rounded-md p-3">
          Histories
        </h2>
        <div className="my-3 text-white">
          <div className="bg-red-400 px-6 py-3 rounded-md text-lg font-bold">
            <p>There is no history</p>
          </div>
          <div className="bg-green-400 px-6 py-3 rounded-md text-lg font-bold flex justify-between items-center">
            <div>
              <h4>Date : </h4>
              <h4>Operation : </h4>
              <h4>Result : </h4>
            </div>
            <button className="bg-sky-400 px-6 py-3 rounded-md text-lg font-bold">
              Restore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
