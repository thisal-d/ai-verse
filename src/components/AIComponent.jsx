import React from 'react'
import "../styles/ai-component.css"

const AIComponent = (props) => {
    console.log(props);

    return (
        <>
            <a href={props.url} target='_blank'>
                <div className="ai-card">
                    <div className="image-container">
                        <img src={props.image} alt={props.name} className="ai-image" />
                    </div>
                    <div className="name-container">
                        <h2 className="name">{props.name}</h2>
                    </div>
                    <div className="description-container">
                        <p className="description">{props.description}</p>
                    </div>
                </div>
            </a>
        </>
    )
}


export default AIComponent