import axios from 'axios';
import React, { useState } from 'react';

const App = () => {
  // 1
  const [posts, setPosts] = useState([]);

  // 2
  const getPosts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/post');
      console.log('++===+++===', response.data.data);
      setPosts(response.data.data);
    } catch (e) {
      console.log(e.messages);
    }
  };

  return (
    <div>
      {posts?.map((post, index) => (
        <div key={index}>
          {' '}
          <h1>{post.title}</h1>
          <h2>{post.content}</h2>
        </div>
      ))}
      <button onClick={getPosts}>데이터 가져오기</button>
    </div>
  );
};

export default App;
