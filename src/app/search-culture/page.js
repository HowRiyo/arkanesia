"use client";
import { useEffect, useRef } from "react";

export default function SearchPage() {
  const chatBoxRef = useRef(null);
  const inputRef = useRef(null);

  const handleKeyDown = (e) => {
    const input = e.target;
    const chatBox = chatBoxRef.current;
    if (e.key === "Enter" && input.value.trim()) {
      const userMsg = document.createElement("div");
      userMsg.className = "message-bubble from-user self-end";
      userMsg.textContent = input.value;
      chatBox.appendChild(userMsg);

      setTimeout(() => {
        const aiMsg = document.createElement("div");
        aiMsg.className = "message-bubble from-ai";
        aiMsg.textContent = `Sedang mencari jawaban untuk "${input.value}"...`;
        chatBox.appendChild(aiMsg);
        chatBox.scrollTop = chatBox.scrollHeight;
      }, 800);

      input.value = "";
    }
  };

  return (
    <main className="text-gray-800 font-sans fade-in">
      <section className="text-center py-20 relative">
        <h2 className="text-4xl font-bold text-blue-700 leading-tight mb-4">
          Mulai Percakapan Budaya dengan AI
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Tanyakan budaya, tradisi, atau legenda Indonesia
        </p>
        <div className="mx-auto flex items-center w-full max-w-xl bg-white rounded-full px-6 py-3 shadow-xl">
          <i className="fa-solid fa-comment-dots text-blue-400"></i>
          <input
            type="text"
            placeholder="Tanyakan tentang budaya..."
            className="ml-3 w-full bg-transparent outline-none text-sm"
            id="userInput"
            ref={inputRef}
            onKeyDown={handleKeyDown}
          />
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 mb-24">
        <div
          id="chatBox"
          ref={chatBoxRef}
          className="flex flex-col space-y-2 mt-10"
        ></div>
      </section>

      <style jsx>{`
        .fade-in {
          animation: fadeIn 1s ease-in-out both;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        body {
          background: radial-gradient(circle at top, #e0f2ff, #ffffff);
          overflow-x: hidden;
        }

        .glow-input:focus {
          box-shadow: 0 0 12px rgba(59, 130, 246, 0.8);
        }

        .message-bubble {
          max-width: 70%;
          padding: 10px 16px;
          border-radius: 16px;
          margin: 8px 0;
          word-wrap: break-word;
        }

        .from-user {
          background-color: #e0f2ff;
          align-self: flex-end;
        }

        .from-ai {
          background-color: #f0f0f0;
          align-self: flex-start;
        }
      `}</style>
    </main>
  );
}
