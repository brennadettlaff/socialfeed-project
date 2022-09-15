import React from "react";
import DisplayPosts from "../DisplayPosts/DisplayPosts";

const Post = (props) => {
    return ( 
        <div>
            <DisplayPosts childPosts={props}/>
            <h3>like/dislike button</h3>
        </div>

     );
}
 
export default Post;