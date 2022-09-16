import {useState} from 'react';
import "./ButtonStyle.css"


const ButtonComponent = () => {

    const [buttonClass, setButtonClass] = useState('inactive');

    function likeButton(){
        if(buttonClass === 'inactive'){
            setButtonClass("like")
        }
        else {
            setButtonClass("inactive")
        }
    }
    function dislikeButton(){
        if(buttonClass === 'inactive'){
            setButtonClass("dislike")
        }
        else {
            setButtonClass("inactive")
        }
    }
    return ( 
        <div>
            <div>
                <button className={buttonClass} style={{margin : '1em'}} onClick={likeButton}> like </button>           
                <button className={buttonClass} style={{margin : '1em'}} onClick={dislikeButton}>dislike</button>
            </div>
        </div>

     );
}
export default ButtonComponent;
