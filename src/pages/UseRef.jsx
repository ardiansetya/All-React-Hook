import React, { useRef, useState } from "react";

const UseRef = () => {
  // 1. Mengakses Elemen DOM Langsung
  const inputRef = useRef(null);
  const handleFocus = () => {
    inputRef.current.focus(); // Memberi fokus pada elemen input
  };

  //   2. Mengontrol State Tanpa Re-render
  const countRef = useRef(0); // Menyimpan nilai persist tanpa re-render
  const [renderCount, setRenderCount] = useState(0);

  const increment = () => {
    countRef.current += 1; // Memperbarui nilai count tanpa re-render
    console.log(`Count: ${countRef.current}`);
  };

  //   3. Mengontrol Interval atau Timeout
  const timerRef = useRef(null);
  const [seconds, setSeconds] = useState(0);

  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null; // Menghapus referensi interval
  };

  

  return (
    <>
      <div>
        <input ref={inputRef} type="text" placeholder="Ketik sesuatu..." />
        <button
          className="bg-slate-400 py-2 px-5 rounded-xl"
          onClick={handleFocus}>
          Focus Input
        </button>
      </div>

      <div>
        <p>Render Count: {renderCount}</p>
        <button
          className="bg-slate-400 py-2 px-5 rounded-xl"
          onClick={() => setRenderCount((prev) => prev + 1)}>
          Re-render
        </button>
        <button
          className="bg-slate-400 py-2 px-5 rounded-xl"
          onClick={increment}>
          Increment Count (useRef)
        </button>
      </div>

      <div>
        <h1>{seconds}s</h1>
        <button
          className="bg-slate-400 py-2 px-5 rounded-xl"
          onClick={startTimer}>
          Start
        </button>
        <button
          className="bg-slate-400 py-2 px-5 rounded-xl"
          onClick={stopTimer}>
          Stop
        </button>
      </div>
    </>
  );
};
export default UseRef;
