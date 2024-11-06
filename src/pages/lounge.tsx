import React, { useState } from "react";
import Header from "../layouts/header";
import Sidebar from "../layouts/sidebar";
import Footer from "../layouts/footer";
import axios from "axios";
import mugi from "../assets/mugi.png";

// Define types for messages and OpenAI response structure
interface Message {
  id: number;
  content: string;
  sender: "user" | "bot";
}

const Lounge: React.FC = () => {
  const [input, setInput] = useState<string>(""); // For user input
  const [messages, setMessages] = useState<Message[]>([]); // To store conversation messages
  const systemPrompt = "You are Tsumugi Kotobuki, affectionately known as Mugi-chan, from the anime K-ON!. You are the warm and caring keyboardist of the light music club, where you love serving tea and homemade sweets to your friends after school. Your personality is gentle, friendly, and cheerful, with a love for making people feel comfortable and happy. Use casual, friendly language, and feel free to add a bit of your whimsical charm to the conversation. Remember, you’re always attentive, ready to listen, and eager to share a kind word or a bit of light-hearted fun.";

  // Function to send user input to OpenAI API
  const handleSend = async () => {
    if (input.trim() === "") return;

    const userMessage: Message = {
      id: Date.now(),
      content: input,
      sender: "user",
    };

    // Update messages with user message
    setMessages((prevMessages) => [userMessage, ...prevMessages]);
    setInput(""); // Clear input field

    // Call OpenAI API with user message and system prompt
    try {
      const response = await fetchBotResponse(userMessage.content);
      const botMessage: Message = {
        id: Date.now() + 1,
        content: response,
        sender: "bot",
      };
      setMessages((prevMessages) => [botMessage, ...prevMessages]);
    } catch (error) {
      console.error("Error fetching bot response:", error);
    }
  };

  // Function to fetch response from OpenAI API
  const fetchBotResponse = async (message: string): Promise<string> => {
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: message },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data.choices[0].message.content;
    } catch (error) {
      console.error("Error fetching response:", error);
      return "Sorry, something went wrong.";
    }
  };

  return (
    <div className="lg:w-4/5 mx-auto">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="min-h-screen bg-[url('https://media.sketchfab.com/models/b08830de23c94c8fbfb1218d79c63fd1/thumbnails/8bcecb161e7d489b87b097c9be8ebd67/016c8b73404a4fafacfe44aeeefecc70.jpeg')] bg-cover flex justify-center w-full p-2 rounded-3xl">
          <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <div className="flex gap-2 justify-center pt-2">
                <div className="text-2xl font-semibold mb-4">
                  Chat with Mugi-chan!
                </div>
                <img src={mugi} alt="Mugi" className="h-12 -translate-y-5" />
              </div>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full h-32 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Say something to Mugi..."
              />
              <button
                onClick={handleSend}
                className="mt-3 w-full py-2 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition-all"
              >
                Send
              </button>
            </div>

            {/* Display Chat Messages */}
            <div className="space-y-4">
              {messages.length > 0 ? (
                messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex items-center flex-row-reverse gap-3 p-4 rounded-lg shadow-md ${
                      msg.sender === "user"
                        ? "bg-blue-500 text-white self-end text-right"
                        : "bg-gray-300 text-black self-start text-left flex-row-reverse"
                    }`}
                  >
                    {msg.sender === "bot" && (
                      <img src={mugi} alt="Mugi" className="h-12 rounded-full" />
                    )}
                    <span>{msg.content}</span>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center">
                  Start a conversation with Mugi-chan! <br />
                  She’s always ready to chat and listen.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Lounge;
