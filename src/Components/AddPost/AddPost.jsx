import React, { useState } from 'react';
import './AddPost.css'

const AddPost = (props) => {
    const [name, setName] = useState('');
    const [body, setBody] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        let newPost = {
            name: name,
            body: body
        };
        console.log(newPost)
        props.addNewPost(newPost)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div style={{margin : '1em'}}>
                <label style={{margin : '1em'}}>Name:</label>
                <input type='text' value={name} onChange={(event) => setName(event.target.value)}></input>
            </div>
            <div>
                <label style={{margin : '1em'}}>Post</label>
                <input type='text-box' className='textarea' value={body} onChange={(event) => setBody(event.target.value)}></input>
            </div>
            <button type='submit'>Create:</button>
        </form>
     );
}
 
export default AddPost;