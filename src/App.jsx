import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

/**
 * TODO: handler input (DONE)
 * TODO: handler operations (DONE)
 * TODO: show the result
 * TODO: histories
 * TODO: restore the history
 *
 */
const App = () => {
  const initialInputValue = {
    a: 0,
    b: 0,
  };
  const [inputState, setInputState] = useState({ ...initialInputValue });
  const [result, setResult] = useState(0);
  const [histories, setHistories] = useState([]);
  const [restoreId, setRestoreId] = useState(null);
  const handleInputs = (e) => {
    setInputState({
      ...inputState,
      [e.target.name]: parseInt(e.target.value),
    });
  };
  const handleClear = () => {
    setInputState({ ...initialInputValue });
    setResult(0);
  };
  const handleOperations = (operation) => {
    if (!inputState.a || !inputState.b) {
      return alert("Please Enter a value greater then 0");
    }
    const result = eval(`${inputState.a} ${operation} ${inputState.b}`);
    const history = {
      id: uuidv4(),
      inputState,
      operation,
      result,
      date: new Date(),
    };
    setHistories([history, ...histories]);
  };
  const handleRestore = (historyItem) => {
    setInputState({ ...historyItem.inputState });
    setResult(historyItem.result);
    setRestoreId(historyItem.id);
  };
  const clearHistories = () => {
    setHistories([]);
  };
  return (
    <div className="w-[50%] m-auto bg-white shadow-sm p-8 rounded-lg mt-4">
      <h1 className="text-4xl font-bold border rounded-md p-3">
        Result : {result}
      </h1>
      <div className="my-4 grid grid-cols-2">
        <input
          onChange={handleInputs}
          value={inputState.a}
          name="a"
          className="border p-2"
          type="number"
        />
        <input
          onChange={handleInputs}
          value={inputState.b}
          name="b"
          className="border p-2"
          type="number"
        />
      </div>
      <div className="my-4">
        <h2 className="text-2xl font-medium border rounded-md p-3">
          Operations
        </h2>
        <div className="flex justify-around items-center gap-4 text-white my-3">
          <button
            onClick={() => handleOperations("+")}
            className="bg-indigo-400 px-6 py-3 rounded-md text-lg font-bold"
          >
            +
          </button>
          <button
            onClick={() => handleOperations("-")}
            className="bg-indigo-400 px-6 py-3 rounded-md text-lg font-bold"
          >
            -
          </button>
          <button
            onClick={() => handleOperations("*")}
            className="bg-indigo-400 px-6 py-3 rounded-md text-lg font-bold"
          >
            *
          </button>
          <button
            onClick={() => handleOperations("/")}
            className="bg-indigo-400 px-6 py-3 rounded-md text-lg font-bold"
          >
            /
          </button>
          <button
            onClick={() => handleOperations("%")}
            className="bg-indigo-400 px-6 py-3 rounded-md text-lg font-bold"
          >
            %
          </button>
          <button
            onClick={handleClear}
            className="bg-red-400 px-6 py-3 rounded-md text-lg font-bold"
          >
            Clear Input
          </button>
        </div>
      </div>
      <div className="my-4">
        <div className="border rounded-md p-3 flex justify-between items-center">
          <h2 className="text-2xl font-medium ">Histories</h2>
          <button
            onClick={clearHistories}
            className="bg-red-400 text-white px-6 py-3 rounded-md text-lg font-bold"
          >
            Clear Histories
          </button>
        </div>
        <div className="my-3 text-white">
          {histories.length <= 0 ? (
            <div className="bg-red-400 px-6 py-3 rounded-md text-lg font-bold">
              <p>There is no history</p>
            </div>
          ) : (
            <>
              {histories.map((historyItem) => {
                return (
                  <div className="bg-green-400 px-6 py-3 rounded-md text-lg font-bold flex justify-between items-center mb-2">
                    <div>
                      <h4>Time : {historyItem.date.toLocaleTimeString()}</h4>
                      <h4>Date : {historyItem.date.toLocaleDateString()}</h4>
                      <h4>
                        Operation :{" "}
                        {`${historyItem.inputState.a} ${historyItem.operation} ${historyItem.inputState.b}`}
                      </h4>
                      <h4>Result : {historyItem.result}</h4>
                    </div>
                    <button
                      onClick={() => handleRestore(historyItem)}
                      className="bg-sky-400 px-6 py-3 rounded-md text-lg font-bold disabled:bg-gray-400"
                      disabled={
                        restoreId !== null && restoreId === historyItem.id
                      }
                    >
                      Restore
                    </button>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
