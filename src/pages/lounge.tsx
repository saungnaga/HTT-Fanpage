import React, { useState } from "react";
import Header from "../layouts/header";
import Sidebar from "../layouts/sidebar";
import Footer from "../layouts/footer";

// Define the types for our component state
interface Post {
  id: number;
  content: string;
}

const Lounge: React.FC = () => {
  // State to store the current status input and the list of posted statuses
  const [status, setStatus] = useState<string>(""); // Typed as a string
  const [posts, setPosts] = useState<Post[]>([]); // Typed as an array of Post objects

  // Function to handle posting of status
  const handlePost = (): void => {
    if (status.trim() === "") return; // Prevent empty posts

    const newPost: Post = { id: Date.now(), content: status }; // Create a new post with a unique id
    setPosts([newPost, ...posts]); // Add the new post to the beginning of the posts array
    setStatus(""); // Clear the status input field
  };

  return (
    <div className="lg:w-4/5 mx-auto">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="min-h-screen bg-gray-100 flex justify-center w-full py-10">
          <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
            {/* Status Input Area */}
            <div className="mb-4">
              <h1 className="text-2xl font-semibold mb-4">
                Here's your tea!☕
              </h1>
              <textarea
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full h-32 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Tell something to Mugi-chan"
              />
              <button
                onClick={handlePost}
                className="mt-3 w-full py-2 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition-all"
              >
                Talk
              </button>
            </div>

            {/* Display Posted Statuses */}
            <div className="space-y-4">
              {posts.length > 0 ? (
                posts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-gray-100 p-4 rounded-lg shadow-md"
                  >
                    {post.content}
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center">
                  Just tell mugi-chan anything,<br/> you know she's a really good friend right?
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
