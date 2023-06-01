import React from 'react';
import './Style.css'

const Feed = () => {
  const posts = [
    {
      id: 1,
      author: 'John Doe',
      profilePicture: 'https://i.pinimg.com/236x/bc/56/d9/bc56d961ab4dd6d579ea5195f643b98a.jpg',
      text: 'Catching fire by Suzanne Collins is a must read! 11/10',
    },
    {
      id: 2,
      author: 'Jane Smith',
      profilePicture: 'https://e0.pxfuel.com/wallpapers/516/374/desktop-wallpaper-harry-potter-cartoon-kawaii-harry-potter.jpg',
      text: 'Chamber of Secrets FTW!! 10/10',
    },
    {
      id: 3,
      author: 'David Johnson',
      profilePicture: 'https://m.media-amazon.com/images/I/71jWXXLOU7L.jpg',
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
  ];

  return (
    <div className="feed-container">
      <div className="your-feed">
        <img className='your-feed' src="https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg"/>
      </div>
      {posts.map(post => (
        <div className="post" key={post.id}>
          <img src={post.profilePicture} alt={post.author} className="profile-picture" />
          <div className='feed-text'>
          <p>{post.text}</p>
          <p2>{post.author}</p2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
