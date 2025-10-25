import Navbar from "../Components/Navbar";
import DownLinks from "../Components/DownLinks";
import '../css/favorite.css';

function PageLikes() {

    let favorites = JSON.parse(localStorage.getItem('foodFavorite')) || [];
    const likedFoods = favorites.filter(food => food.liked);

    return (
        <div className="favorite-container">
            <Navbar />
            <div>
                <div className="favorite-header">
                    <img src="/Images/Icones/favorite-play.png" alt="Back" />
                    <p>Favorites</p>
                </div>

                <div className='food-cards-container'>
                    {likedFoods.map((food) => (
                        <div className='food-card' key={food.foodIndex}>
                            <div className='food-card-img'>
                                <img src={food.image} alt='Food 1' />
                            </div>
                            <div className='food-card-body'>
                                <div className='food-card-name'>
                                    <p>{food.name}</p>
                                </div>
                                <div className='food-card-prix'>
                                    <p>{food.price} DH</p>
                                    <img src='/Images/Icones/heart.svg' alt='Heart'  className='heartActive' />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <DownLinks />
        </div>
    );
}
export default PageLikes;