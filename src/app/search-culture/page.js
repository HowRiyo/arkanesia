"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function SearchPage() {
  const chatBoxRef = useRef(null);
  const inputRef = useRef(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const savedMessages = localStorage.getItem("messages");
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  const handleKeyDown = async (e) => {
    const input = e.target;
    if (e.key === "Enter" && input.value.trim()) {
      const userMessage = input.value.trim();
      setMessages((prev) => {
        const newMessages = [{ type: "user", text: userMessage }, ...prev];
        localStorage.setItem("messages", JSON.stringify(newMessages)); 
        return newMessages;
      });
      input.value = "";

      try {
        const res = await fetch("https://arkanesia.onrender.com/chatbot", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ question: userMessage }),
        });

        const data = await res.json();

        if (!res.ok || !data.answer) {
          throw new Error("Invalid response");
        }

        setMessages((prev) => {
          const newMessages = [{ type: "ai", text: data.answer }, ...prev]; 
          localStorage.setItem("messages", JSON.stringify(newMessages)); 
          return newMessages;
        });

        if (data.result && Array.isArray(data.result)) {
          const newMessages = data.result.map((item) => ({
            type: "ai",
            id: item.id,
            text: `${
              item.name.charAt(0).toUpperCase() + item.name.slice(1)
            } - (${
              item.province.charAt(0).toUpperCase() + item.province.slice(1)
            })\n${
              item.description.charAt(0).toUpperCase() +
              item.description.slice(1)
            }`,
          }));
          setMessages((prev) => {
            const updatedMessages = [...newMessages, ...prev];
            localStorage.setItem("messages", JSON.stringify(updatedMessages)); 
            return updatedMessages;
          });
        }
      } catch (err) {
        setMessages((prev) => [
          { type: "ai", text: "Maaf, terjadi kesalahan saat mengambil data." },
          ...prev,
        ]);
      }
    }
  };

  const handleClearChat = () => {
    setMessages([]);
    localStorage.removeItem("messages"); 
  };

  return (
    <section className="text-[var(--dark-col)] fade-in grid place-items-center">
      <section className="text-center relative">
        <h2 className="text-4xl font-bold text-[var(--main-col)] leading-tight mb-4">
          Mulai Percakapan Budaya dengan AI
        </h2>
        <p className="text-lg text-[var(--gray-col)] mb-6">
          Tanyakan budaya, tradisi, atau legenda Indonesia
        </p>
        <div className="mx-auto flex items-center w-full max-w-xl bg-[var(--light-col)] rounded-full px-6 py-3 shadow-xl">
          <i className="fa-solid fa-comment-dots text-[var(--accent-col)]"></i>
          <input
            type="text"
            placeholder="Tanyakan tentang budaya..."
            className="ml-3 w-full bg-transparent outline-none text-lg px-2 py-1"
            id="userInput"
            ref={inputRef}
            onKeyDown={handleKeyDown}
          />
        </div>

        {messages.length > 0 && (
          <button
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
            onClick={handleClearChat}
          >
            Hapus Semua Chat
          </button>
        )}
      </section>

      <section>
        <div
          id="chatBox"
          ref={chatBoxRef}
          className="flex flex-col space-y-2 mt-10 px-4 w-full"
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message-bubble ${
                msg.type === "user"
                  ? "from-user self-end"
                  : "from-ai self-start"
              }`}
            >
              {msg.text.charAt(0).toUpperCase() + msg.text.slice(1)}

              {msg.id && (
                <div className="mt-2">
                  <Link href={`/tour/${msg.id}?from=/search-culture`}>
                    <button className="text-blue-500 hover:underline">
                      Lihat Selengkapnya
                    </button>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
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

        .message-bubble {
          padding: 10px 16px;
          border-radius: 16px;
          margin: 8px 0;
          word-wrap: break-word;
          white-space: pre-line;
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
    </section>
  );
}
