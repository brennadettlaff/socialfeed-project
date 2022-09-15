import React, { useState } from 'react';
// import DisplayPosts from './Components/DisplayPosts/DisplayPosts'
import AddPost from './Components/AddPost/AddPost'
import Post from './Components/Post/Post'


function App() {

  const [posts, setPosts] = useState([{name: 'name', body: 'posts will display here'}, {name: 'name 2', body:'body 2'}])

  function addNewPost(post){
    let tempPosts = [...posts, post];
    setPosts(tempPosts);
  }

  return (
    <div>
      <AddPost addNewPost={addNewPost}/>
      <Post parentPosts={posts} />
      

    </div>
  );
}

export default App;
