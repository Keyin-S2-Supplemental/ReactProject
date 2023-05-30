// Feed.js

import { useState, useEffect } from 'react';

function Feed() {
  const [user, setUser] = useState("");
  const [posts, setPosts] = useState("");

  useEffect(() => {
    // Get user data and posts here
    setUser({ name: 'John Doe', profilePic: '/profile.jpg' });
    setPosts([
      { id: 1, user: 'Jane Doe', profilePic: '/jane.jpg', likes: 5, content: 'Lorem ipsum dolor sit amet.' },
      { id: 2, user: 'Bob Smith', profilePic: '/bob.jpg', likes: 2, content: 'Consectetur adipiscing elit.' },
    ]);
  }, []);

  function handleLike(id) {
     // Update post likes here
     const updatedPosts = posts.map((post) => {
       if (post.id === id) {
         return { ...post, likes: post.likes + 1 };
       }
       return post;
     });
     setPosts(updatedPosts);
  }
}  
export default Feed;