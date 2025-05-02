"use client"; // This is a client component
import { useState } from "react"; // Import useState for state management
import Image from "next/image";

function myDemo(inputValue) {
  console.log("Button clicked!");
  console.log("Input value:", inputValue); // Print the input value
}

export default function Home() {
  const [inputValue, setInputValue] = useState(""); // State to track input value

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Hello world!</h1>
      {/* Input field with onChange to update state */}
      <input
        type="text"
        placeholder="Enter something"
        className="border border-gray-300"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // Update state on input change
      />
      {/* Button with onClick passing the input value to myDemo */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => myDemo(inputValue)}
      >
        Click me!
      </button>
    </div>
  );
}
