import { useState } from "react";
function Messages({ messages }) {
  function OneMessage({ author, title, text }) {
    return (
      <article className="bg-white shadow-md rounded-md p-4 my-4 mx-auto max-w-lg">
        <div className="flex items-center space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className={"w-6 h-6 mr-1 rounded-full"}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <p className="font-semibold text-lg">{author}</p>
        </div>
        <h1 className="text-2xl font-bold mt-4">{title}</h1>
      <p className="mt-4 text-gray-700">{text}</p>
      </article>
    

    );
  }

  return (
    <div className="bg-pink-200">
      <h1 className="text-center text-2xl">Messaggi</h1>
      {messages.map((m) => (
        <OneMessage author={m.author} title={m.title} text={m.text} />
      ))}
    </div>
  );
}

export default Messages;
