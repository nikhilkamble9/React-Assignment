import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Post from "./Post";
import "./Postview.css";

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
      <Navbar />
      {posts.map((post, index) => (
        <Post key={index} details={post} />
      ))}
    </div>
  );
}
