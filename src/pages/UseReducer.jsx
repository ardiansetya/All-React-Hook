import React, { useReducer } from "react";

const UseReducer = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + action.payload };
      case "decrement":
        return { count: state.count - action.payload };
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const handleIncrement = () => {
    dispatch({ type: "increment", payload: 20 });
  };
  const handleDecrement = () => {
    dispatch({ type: "decrement", payload: 20 });
  };

  return (
    <div className="bg-slate-400 h-screen flex justify-center items-center">
      <div className="flex justify-center items-center">
        <div className="text-white flex flex-col items-center">
         <h1 className="text-3xl">Use Reducer</h1>
          <h1 className="text-3xl">Count: {state.count}</h1>
          <div className="flex gap-2 mt-5">
            <button
              className="text-xl px-2 py-3 bg-slate-300 rounded-xl"
              onClick={handleIncrement}>
              Increment
            </button>
            <button
              className="text-xl px-2 py-3 bg-slate-300 rounded-xl"
              onClick={handleDecrement}>
              Decrement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
