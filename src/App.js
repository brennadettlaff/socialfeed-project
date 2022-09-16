import React, { useState } from 'react';
import AddPost from './Components/AddPost/AddPost'
import DisplayPosts from './Components/DisplayPosts/DisplayPosts'
import './App.css'


function App() {

  const [posts, setPosts] = useState([{name: '', body: ''}])

  function addNewPost(post){
    let tempPosts = [...posts, post];
    setPosts(tempPosts);
  }

  return (
    <div className='container-fluid'>
      <div className='header'><h1>SocialFeed</h1></div>
      <div className='col-md-6'>
        <div className='border-box'>
          <AddPost addNewPost={addNewPost}/>
        </div>
        <div className='border-box'>
          <DisplayPosts parentPosts={posts}/>
        </div>
      </div>
    </div>
  );
}

export default App;
