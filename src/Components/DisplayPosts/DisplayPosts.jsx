
const DisplayPosts = (props) => {
  return ( 
    <div>
      {props.parentEntries.map((post) => {
        return (
          <div>
            <h2>{post.name}</h2>
            <p> {post.body} </p>
          </div>
      )
      })} 
    </div>
    
    );
  }
 
export default DisplayPosts;