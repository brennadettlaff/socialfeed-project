import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts'



function App() {

  const [posts, setPosts] = useState([{name: 'name', body: 'posts will display here'}, {name: 'name 2', body:'body 2'}])

  return (
    <div>
      
      <DisplayPosts parentEntries={posts} />
     

    </div>
  );
}

export default App;
