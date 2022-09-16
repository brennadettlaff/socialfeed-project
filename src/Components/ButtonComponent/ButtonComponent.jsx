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
                <button className={buttonClass} onClick={likeButton}> like </button>
            </div>,
            <div>            
                <button className={buttonClass} onClick={dislikeButton}>dislike</button>
            </div>
        </div>

     );
}
export default ButtonComponent;
