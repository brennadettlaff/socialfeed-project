import React, { useState } from 'react';

const AddPost = (props) => {

    return ( 
        <form>
            <div>
                <label>Name</label>
                <input type='text'></input>
            </div>
            <div>
                <label>Post</label>
                <input type='text'></input>
            </div>

        </form>
     );
}
 
export default AddPost;