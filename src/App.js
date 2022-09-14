import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts'
import AddPost from './Components/AddPost/AddPost'


function App() {

  const [posts, setPosts] = useState([{name: 'name', body: 'posts will display here'}, {name: 'name 2', body:'body 2'}])

  return (
    <div>
      <DisplayPosts parentEntries={posts} />
      <AddPost />

    </div>
  );
}

export default App;
