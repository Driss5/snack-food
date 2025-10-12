import Navbar from '../Components/Navbar';
import '../css/home.css';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import DownLinks from '../Components/DownLinks';


function Home() {

      const [categories, setCategories] = useState([
        { id: 1, name: 'all', iconNormal: '/Images/Icones-Food/burger.png', iconActive: '/Images/Icones-Food/burger-w.png', alt: 'Burger', active: true },
        { id: 2, name: 'Pizza', iconNormal: '/Images/Icones-Food/pizza.png', iconActive: '/Images/Icones-Food/pizza-w.png', alt: 'Pizza', active: false },
        { id: 3, name: 'salad', iconNormal: '/Images/Icones-Food/frite.png', iconActive: '/Images/Icones-Food/frite-w.png', alt: 'Frites', active: false },
        { id: 4, name: 'tacoos', iconNormal: '/Images/Icones-Food/veggies.png', iconActive: '/Images/Icones-Food/veggies-w.png', alt: 'Veggies', active: false },
        { id: 5, name: 'drink', iconNormal: '/Images/Icones-Food/drink.png', iconActive: '/Images/Icones-Food/drink-w.png', alt: 'Drinks', active: false },
    ]);

    const foods = [
        { id: 1, name: 'Pizza Talienne', price: 80, image: '/Images/food/7.png', liked : false, categorie : 'pizza' },
        { id: 2, name: 'Cheese Burger', price: 50, image: '/Images/food/13.png', liked : false, categorie : 'burger' },
        { id: 3, name: 'Veggie Salad', price: 40, image: '/Images/food/2.png', liked : false, categorie : 'salad' },
        { id: 4, name: 'French Fries', price: 30, image: '/Images/food/5.png', liked : false, categorie : 'pizza' },
        { id: 5, name: 'Soft Drink', price: 20, image: '/Images/food/6.png', liked : false, categorie : 'drink' },
        { id: 6, name: 'Tacoos', price: 20, image: '/Images/food/6.png', liked : false, categorie : 'tacoos' },
    ]

    function handleAddFavorite(foodId) {
        return function() {
            let foodIndex = foods.findIndex(food => food.id === foodId);
            if (foodIndex !== -1) {
                
                foods[foodIndex].liked = !foods[foodIndex].liked;
                let favorites = JSON.parse(localStorage.getItem('foodFavorite')) || [];

                const newItem = {
                foodIndex: foodIndex + 1,
                liked: foods[foodIndex].liked
                };

                const existingIndex = favorites.findIndex(f => f.foodIndex === foodIndex + 1);

                if (existingIndex !== -1) {
                favorites[existingIndex].liked = !favorites[existingIndex].liked;
                } else {
                favorites.push(newItem);
                }
                setFavoritesH(favorites);
                localStorage.setItem('foodFavorite', JSON.stringify(favorites));
            }  
        }
    }

    const [favoritesH, setFavoritesH] = useState([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("foodFavorite")) || [];
        setFavoritesH(saved);
    }, []);

    const navigate = useNavigate();

    function handleSelectedFood(id) {
        const food = foods.find((f) => {return f.id === id})
        navigate("/pageSelectedFood", { state: { food: food } });
    }

    const [showCategorie, setShowCategorie] = useState('all');

    function handleChangeCategorie(categorie) {
        const updatedCategories = categories.map(cat => ({
            ...cat,
            active: cat.name === categorie
        }));
        setCategories(updatedCategories);
        setShowCategorie(categorie);
    }

    return (
        <div>
            <Navbar />
            <div className='home-container'>
                <div className='welcomme'>
                    <p>Good evening, Welcomme</p>
                </div>
                <div className='search-container'>
                    <div className='search'>
                        <img src='/Images/Icones/search.png' alt='Search' />
                        <input type='text' placeholder='Search for food, coffe, etc..' name='search'/>
                    </div>
                </div>
                <div className='categories-container'>
                    {categories.map((category) => (
                        <div className='categorie-card' key={category.id} onClick={() => {handleChangeCategorie(category.name)}}>
                            <img src={category.active ? category.iconActive : category.iconNormal } alt={category.alt} style={category.active ? {backgroundColor : '#F66141'} : {} } />
                        </div>
                    ))}
                </div> 
                <div className='categorie-title'>
                    <p>{ showCategorie }</p>
                </div>
                <div className='food-cards-container'>

                    {foods.map((food) => (
                        showCategorie.toLowerCase() === food.categorie.toLocaleLowerCase() || showCategorie.toLowerCase() === 'all' ? (
                            <div className='food-card' key={food.id}>
                                <div className='food-card-img'>
                                    <img src={food.image} alt='Food 1' onClick={() => handleSelectedFood(food.id)} />
                                </div>
                                <div className='food-card-body'>
                                    <div className='food-card-name'>
                                        <p>{food.name}</p>
                                    </div>
                                    <div className='food-card-prix'>
                                        <p>{food.price} DH</p>
                                        <img src='/Images/Icones/heart.svg' alt='Heart' onClick={handleAddFavorite(food.id)} className={favoritesH.some(fav => fav.foodIndex === food.id && fav.liked) ? 'heartActive' : ''}/>
                                    </div>
                                </div>
                            </div>
                        ) : null
                    ))}
                </div>
                <DownLinks />
            </div>
        </div>
    );
}
export default Home;