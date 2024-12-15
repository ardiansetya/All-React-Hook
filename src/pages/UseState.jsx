import { useState } from 'react'


function UseState() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount((prevCount) => prevCount + 1)
  }

  const decrement = () => {
    setCount((prevCount) => prevCount - 1)
  }

  return (
    <div className="bg-slate-400 h-screen flex justify-center items-center">
      <div className="flex justify-center items-center">
        <div className="text-white flex flex-col items-center">
          <h1 className='text-3xl'> Use State</h1>
          <h1 className="text-3xl">Count: {count}</h1>
          <div className="flex gap-2 mt-5">
            <button
              className="text-xl px-2 py-3 bg-slate-300 rounded-xl"
              onClick={increment}>
              Increment
            </button>
            <button
              className="text-xl px-2 py-3 bg-slate-300 rounded-xl"
              onClick={decrement}>
              Decrement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UseState
