import { useState } from 'react'
import "../styles/ai-component.css"
import heart_white from "../assets/heart-light.png"
import heart_black from "../assets/heart-dark.png"
import heart_red from "../assets/heart-red.png"

const MAX_VISIBLE_CATEGORIES = 3;

const AIComponent = (props) => {

    const [isFavourite, setIsFavourite] = useState(props.isFavourite);

    const categories = props.categories || [];
    const pricing = props.pricing || [];
    const selectedCategory = (props.selectedCategory || "").toLowerCase();

    function toggleFavourite() {
        if (isFavourite) {
            setIsFavourite(false)
            props.removeFromFavorite(props.id, props.name)
        } else {
            setIsFavourite(true)
            props.addToFavorite(props.id, props.name)
        }
    }

    function openTool(e) {
        // keep the app's usage tracking; let modified clicks (new tab / copy link) behave natively
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
        e.preventDefault();
        props.onClickEvent();
    }

    return (
        <article className="ai-card">

            <a
                className="ai-card-link"
                href={props.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={openTool}
                aria-label={`Open ${props.name}`}
            >
                <div className="image-container">
                    <img src={props.image} alt="" className="ai-image" loading="lazy" />
                </div>

                <div className="ai-card-body">
                    <h2 className="name">{props.name}</h2>
                    <p className="description">{props.description}</p>
                </div>
            </a>

            <div className="card-footer">
                <div className="card-meta">
                    {pricing.length > 0 && (
                        <span className="pricing-badge" title="Pricing">{pricing.join(" · ")}</span>
                    )}
                    <ul className="category-chips" aria-label="Categories">
                        {categories.slice(0, MAX_VISIBLE_CATEGORIES).map((category) => {
                            const active = selectedCategory !== "" && category.toLowerCase().includes(selectedCategory);
                            return (
                                <li key={category} className={active ? "chip chip-active" : "chip"}>
                                    {category}
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <button
                    type="button"
                    onClick={toggleFavourite}
                    className="favourite-btn"
                    aria-label={isFavourite ? `Remove ${props.name} from favourites` : `Add ${props.name} to favourites`}
                    aria-pressed={isFavourite}
                >
                    <img
                        src={isFavourite ? heart_red : (props.theme === "dark" ? heart_black : heart_white)}
                        alt=""
                        className="favourite-btn-icon"
                    />
                </button>
            </div>
        </article>
    )
}


export default AIComponent
