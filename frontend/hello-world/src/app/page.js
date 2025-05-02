"use client"; // This is a client component
import { useState } from "react"; // Import useState for state management
import Image from "next/image";

function uploadFile(e) {
  console.log("File upload triggered"); // Log when file upload is triggered
  console.log(e); // Log the event object
  const file = e.target.files[0]; // Get the selected file
  if (file) {
    console.log("File selected:", file.name); // Print the file name
  }
}

export default function Home() {
  const [inputValue, setInputValue] = useState(""); // State to track input value

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Upload File Demo for next & fast API</h1>
      {/* Input field with onChange to update state */}
      <input
        type="text"
        placeholder="File description"
        className="border border-gray-300"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // Update state on input change
      />
      {/* Input file upload  */}
      <input
        type="file"
        className="border border-gray-300"
        onChange={uploadFile} // Handle file upload
      />
      {/* Button to trigger file upload */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => {
          const fileInput = document.querySelector('input[type="file"]');
          if (fileInput) {
            fileInput.click(); // Trigger the file input click
          }
        }
        }
      >Upload File</button>
      
      <h2>Uploaded file: </h2>
      {/* Image component with src and alt attributes */}
      <Image
        src="/next.svg"
        alt="Next.js Logo"
        width={100}
        height={100}
        className="rounded-full"
      />
    </div>
  );
}
