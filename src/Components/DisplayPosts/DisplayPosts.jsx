import React from "react";
import ButtonComponent from '../ButtonComponent/ButtonComponent';

const DisplayPosts = (props) => {
    return ( 
        <div >
          {props.parentPosts.map((post) => {
            return (
              <div>
                <h2>{post.name}</h2>
                <div ><p> {post.body} </p></div>
                <ButtonComponent />
              </div>
            )
          })} 

        </div>

     );
}
 
export default DisplayPosts;











// import React from "react";
// import Post from './Post/Post';
// // import PostTemplate from "../PostTemplate/PostTemplate";

// const DisplayPosts = (props) => {
//   return ( 
//     <div>
//       {/* {props.parentPosts.map((post) => {
//         return (
//           <div>
//             <h2>{post.name}</h2>
//             <p> {post.body} </p>
//           </div>
//       )
//       })}  */}
      
//       {/* <PostTemplate {...props}/> */}
//       {/* <PostTemplate childPosts={props}/> */}
//       {/* <Post /> */}
//     </div>
    
//     );
//   }
 
// export default DisplayPosts;