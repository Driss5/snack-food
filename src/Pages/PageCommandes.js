import '../css/favorite.css';
import { useEffect } from "react";
import { Link } from 'react-router-dom';

function PageCommandes() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                        <div className='cart-item'>
                            <div className='cart-image'>
                                <img src='/Images/food/2.png' alt='product' />
                            </div>
                            <div className='cart-text'>
                                <p>Product Name</p>
                                <div className='cart-text-two'>
                                    <p>Size : XL</p>
                                    <p>Qty : 2</p>
                                </div>
                                <p>150DH</p>
                            </div>
                            <div className='cart-icones'>
                                <div className='cart-icone-close'>
                                    <img src='/Images/Icones/close.svg' alt='close' />
                                </div>
                                <div className='cart-icone-qty'>
                                    <img src='/Images/Icones/rectangle top.svg' alt='close' />
                                    <img src='/Images/Icones/rectangle bottom.svg' alt='close' />
                                </div>
                            </div>
                        </div>

                        {/* <div className='cart-item'>
                            <div className='cart-image'>
                                <img src='/Images/food/5.png' alt='product' />
                            </div>
                            <div className='cart-text'>
                                <p>Product Name</p>
                                <div className='cart-text-two'>
                                    <p>Size : XL</p>
                                    <p>Qty : 2</p>
                                </div>
                                <p>150DH</p>
                            </div>
                            <div className='cart-icones'>
                                <div className='cart-icone-close'>
                                    <img src='/Images/Icones/close.svg' alt='close' />
                                </div>
                                <div className='cart-icone-qty'>
                                    <img src='/Images/Icones/rectangle top.svg' alt='close' />
                                    <img src='/Images/Icones/rectangle bottom.svg' alt='close' />
                                </div>
                            </div>
                        </div>

                        <div className='cart-item'>
                            <div className='cart-image'>
                                <img src='/Images/food/6.png' alt='product' />
                            </div>
                            <div className='cart-text'>
                                <p>Product Name</p>
                                <div className='cart-text-two'>
                                    <p>Size : XL</p>
                                    <p>Qty : 2</p>
                                </div>
                                <p>150DH</p>
                            </div>
                            <div className='cart-icones'>
                                <div className='cart-icone-close'>
                                    <img src='/Images/Icones/close.svg' alt='close' />
                                </div>
                                <div className='cart-icone-qty'>
                                    <img src='/Images/Icones/rectangle top.svg' alt='close' />
                                    <img src='/Images/Icones/rectangle bottom.svg' alt='close' />
                                </div>
                            </div>
                        </div>

                        <div className='cart-item'>
                            <div className='cart-image'>
                                <img src='/Images/food/7.png' alt='product' />
                            </div>
                            <div className='cart-text'>
                                <p>Product Name</p>
                                <div className='cart-text-two'>
                                    <p>Size : XL</p>
                                    <p>Qty : 2</p>
                                </div>
                                <p>150DH</p>
                            </div>
                            <div className='cart-icones'>
                                <div className='cart-icone-close'>
                                    <img src='/Images/Icones/close.svg' alt='close' />
                                </div>
                                <div className='cart-icone-qty'>
                                    <img src='/Images/Icones/rectangle top.svg' alt='close' />
                                    <img src='/Images/Icones/rectangle bottom.svg' alt='close' />
                                </div>
                            </div>
                        </div>

                        <div className='cart-item'>
                            <div className='cart-image'>
                                <img src='/Images/food/2.png' alt='product' />
                            </div>
                            <div className='cart-text'>
                                <p>Product Name</p>
                                <div className='cart-text-two'>
                                    <p>Size : XL</p>
                                    <p>Qty : 2</p>
                                </div>
                                <p>150DH</p>
                            </div>
                            <div className='cart-icones'>
                                <div className='cart-icone-close'>
                                    <img src='/Images/Icones/close.svg' alt='close' />
                                </div>
                                <div className='cart-icone-qty'>
                                    <img src='/Images/Icones/rectangle top.svg' alt='close' />
                                    <img src='/Images/Icones/rectangle bottom.svg' alt='close' />
                                </div>
                            </div>
                        </div> */}
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
                            <p>500DH</p>
                            <p>15DH</p>
                        </div>
                    </div>
                    <div className='price-total'>
                        <p>Order Total</p>
                        <p>485DH</p>
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