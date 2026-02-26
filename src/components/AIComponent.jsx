import { useState } from 'react'
import "../styles/ai-component.css"
import heart_white from "../assets/heart-light.png"
import heart_black from "../assets/heart-dark.png"
import heart_red from "../assets/heart-red.png"

function getFavouriteToolsFromLocalStorage() {
    const favTools = localStorage.getItem("favouriteTools");
    return favTools ? JSON.parse(favTools) : [];
}

function saveFavouriteToolsToLocalStorage(tools_id) {
    localStorage.setItem("favouriteTools", JSON.stringify(tools_id));
}

function addFavouriteToolToLocalStorage(tool_id) {
    const favTools = getFavouriteToolsFromLocalStorage();
    favTools.push(tool_id);
    saveFavouriteToolsToLocalStorage(favTools);
}

function removeFavouriteToolFromLocalStorage(tool_id) {
    const favTools = getFavouriteToolsFromLocalStorage();
    const updatedFavTools = favTools.filter((favTool) => favTool !== tool_id);
    saveFavouriteToolsToLocalStorage(updatedFavTools);
}

const AIComponent = (props) => {

    const [isFavourite, setIsFavourite] = useState(props.isFavourite);

    function removeFromFavourite(props) {
        setIsFavourite(false)
        props.removeFavouriteToolFromArr(props.id)
        removeFavouriteToolFromLocalStorage(props.id)
    }

    function addToFavourite(props) {
        setIsFavourite(true)
        props.addFavouriteToolFromArr(props.id)
        addFavouriteToolToLocalStorage(props.id)
    }

    return (
        <>
            <div className="ai-card">

                <div className='favourite-btn-container'>
                    {
                        (isFavourite) ? (
                            < button onClick={() => { removeFromFavourite(props) }} className='favourite-btn'>
                                <img src={heart_red} alt="heart red" className='favourite-btn-icon' />
                            </button>
                        ) : (
                            <button onClick={() => { addToFavourite(props) }} className='favourite-btn'>
                                <img src={props.theme === "dark" ? heart_black : heart_white} alt="heart" className='favourite-btn-icon' />
                            </button>
                        )
                    }
                </div>

                <a href={props.url} target='_blank'>
                    <div className="image-container">
                        <img src={props.image} alt={props.name} className="ai-image" />
                    </div>
                </a>

                <a href={props.url} target='_blank'>
                    <div className="name-container">
                        <h2 className="name">{props.name}</h2>
                    </div>
                </a>

                <a href={props.url} target='_blank'>
                    <div className="description-container">
                        <p className="description">{props.description}</p>
                    </div>
                </a>

                <div className='favourite-btn-container-mobile'>
                    {
                        (isFavourite) ? (
                            < button onClick={() => { removeFromFavourite(props) }} className='favourite-btn'>
                                <img src={heart_red} alt="heart red" className='favourite-btn-icon' />
                            </button>
                        ) : (
                            <button onClick={() => { addToFavourite(props) }} className='favourite-btn'>
                                <img src={props.theme === "dark" ? heart_black : heart_white} alt="heart" className='favourite-btn-icon' />
                            </button>
                        )
                    }
                </div>
            </div >
        </>
    )
}


export default AIComponent