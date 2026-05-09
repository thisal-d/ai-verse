import { useState } from 'react'
import "../styles/ai-component.css"
import heart_white from "../assets/heart-light.png"
import heart_black from "../assets/heart-dark.png"
import heart_red from "../assets/heart-red.png"


const AIComponent = (props) => {

    const [isFavourite, setIsFavourite] = useState(props.isFavourite);

    function removeFromFavouriteTools(tool_id, tool_name) {
        setIsFavourite(false)
        props.removeFromFavorite(tool_id, tool_name)
    }

    function addToFavouriteTools(tool_id, tool_name) {
        setIsFavourite(true)
        props.addToFavorite(tool_id, tool_name)
    }

    return (
        <>
            <div className="ai-card">

                <div className='favourite-btn-container'>
                    {
                        (isFavourite) ? (
                            < button onClick={() => { removeFromFavouriteTools(props.id, props.name) }} className='favourite-btn'>
                                <img src={heart_red} alt="heart red" className='favourite-btn-icon' />
                            </button>
                        ) : (
                            <button onClick={() => { addToFavouriteTools(props.id, props.name) }} className='favourite-btn'>
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
                            < button onClick={() => { removeFromFavouriteTools(props.id, props.name) }} className='favourite-btn'>
                                <img src={heart_red} alt="heart red" className='favourite-btn-icon' />
                            </button>
                        ) : (
                            <button onClick={() => { addToFavouriteTools(props.id, props.name) }} className='favourite-btn'>
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