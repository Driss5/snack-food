import '../css/favorite.css';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function PageCommandes() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    let Commandes = JSON.parse(localStorage.getItem('foodFavorite')) || [];
    const orderedFoods = Commandes.filter(food => food.cartStatut);

    function handleChangeCartStatu(foodIndex) {
        let updatedCommandes = Commandes.map(food => {
            if (food.foodIndex === foodIndex) {
                return { ...food, cartStatut: false };
            }
            return food;
        });
        Commandes = updatedCommandes;
        localStorage.setItem('foodFavorite', JSON.stringify(updatedCommandes));
        window.location.reload();
    }

    let initTotalProduit = {};
    orderedFoods.forEach(food => {
        initTotalProduit[food.foodIndex] = food.price;
    });
    const totalFinal = Object.values(initTotalProduit).reduce((sum, price) => sum + price, 0);

    let [quantite, setQuantite] = useState({});
    let [totalProduit, setTotalProduit] = useState({});
    let [totalOrder, setTotalOrder] = useState(totalFinal);

    function handleIncrement(foodIndex) {
        const foodToUpdate = Commandes.find(food => food.foodIndex === foodIndex);
        if (foodToUpdate) {

            setQuantite(prev => {
                const newQty = (prev[foodIndex] || 1) + 1;
                setTotalProduit(totalPrev => ({
                    ...totalPrev,
                    [foodIndex]: foodToUpdate.price * newQty
                }));
                return {
                    ...prev,
                    [foodIndex]: newQty
                };
            });
            setTotalOrder(prevTotal => prevTotal + foodToUpdate.price);
        }
    }

    function handleDecrement(foodIndex) {
        const foodToUpdate = Commandes.find(food => food.foodIndex === foodIndex);
        if (foodToUpdate) {
            setQuantite(prev => {
                const newQty = (prev[foodIndex] || 1) - 1;
                setTotalProduit(totalPrev => ({
                    ...totalPrev,
                    [foodIndex]: foodToUpdate.price * newQty
                }));
                return {
                    ...prev,
                    [foodIndex]: newQty
                };
            });
            if ((quantite[foodIndex] || 1) > 1) {
                setTotalOrder(prevTotal => prevTotal - foodToUpdate.price);
            }
        }
    }

  return (
    <div className='containerr'>
        <div className='cart-container'>
            <div className='cart'>
                <div className='cart-header'>
                    <Link to='/'>
                        <img src='/Images/Icones/flesh-left-cart.svg' alt='flesh-left' />
                    </Link>
                    <p>Cart</p>
                    <img src='/Images/Icones/points-cart-right.svg' alt='flesh-right' />
                </div>
                <div className='cart-body'>
                    <div className='cart-items'>
                        {
                            orderedFoods.map((food) => (
                                <div className='cart-item' key={food.foodIndex}>
                                    <div className='cart-image'>
                                        <img src={food.image} alt={food.name} />
                                    </div>
                                    <div className='cart-text'>
                                        <p>{food.name}</p>
                                        <div className='cart-text-two'>
                                            <p>Size : XL</p>
                                            <p>Qty : {quantite[food.foodIndex] || 1}</p>
                                        </div>
                                        <p>{totalProduit[food.foodIndex] || food.price}DH</p>
                                    </div>
                                    <div className='cart-icones'>
                                        <div className='cart-icone-close'>
                                            <img src='/Images/Icones/close.svg' alt='close' onClick={() => {handleChangeCartStatu(food.foodIndex)}} />
                                        </div>
                                        <div className='cart-icone-qty'>
                                            <img src='/Images/Icones/rectangle top.svg' alt='INCREMENT' onClick={() => handleIncrement(food.foodIndex)} />
                                            <img src='/Images/Icones/rectangle bottom.svg' alt='DECREMENT' onClick={() => handleDecrement(food.foodIndex)} />
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>
                <div className='cart-footer'>
                    <p>Price Details</p>
                    <div className='price-detaills'>
                        <div>
                            <p>Total Product Price</p>
                            <p>Total Discounts</p>
                        </div>
                        <div>
                            <p>{totalOrder}DH</p>
                            <p>0DH</p>
                        </div>
                    </div>
                    <div className='price-total'>
                        <p>Order Total</p>
                        <p>{totalOrder}DH</p>
                    </div>
                    <div className='cart-footer-btn'>
                        <button>Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default PageCommandes;