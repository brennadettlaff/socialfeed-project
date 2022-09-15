import React, { useState } from 'react';
import AddPost from './Components/AddPost/AddPost'
import DisplayPosts from './Components/DisplayPosts/DisplayPosts'


function App() {

  const [posts, setPosts] = useState([{name: 'name', body: 'body goes here'}])

  function addNewPost(post){
    let tempPosts = [...posts, post];
    setPosts(tempPosts);
  }

  return (
    <div>
      <AddPost addNewPost={addNewPost}/>
      <DisplayPosts parentPosts={posts}/>
      

    </div>
  );
}

export default App;
