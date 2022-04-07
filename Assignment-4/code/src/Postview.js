import React, { useState, useEffect } from "react";
import Post from "./components/Post";

export default function Postview() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3004/user");
      const data = await response.json();
      console.log(data);
      setPosts(data);
    }
    fetchData();
  }, []);
  return (
    <div className="Postview">
      {posts.map((post, index) => (
        <Post key={index} details={post} />
      ))}
    </div>
  );
}
