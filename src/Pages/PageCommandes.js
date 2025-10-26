import '../css/favorite.css';

function PageCommandes() {
  return (
    <div className='containerr'>
        <div className='cart-container'>
            <div className='cart'>
                <div className='cart-header'>
                    <img src='/Images/Icones/flesh-left-cart.svg' alt='flesh-left' />
                    <p>Cart</p>
                    <img src='/Images/Icones/points-cart-right.svg' alt='flesh-right' />
                </div>
                <div className='cart-body'>
                    <div className='cart-items'>
                        <div className='cart-item'></div>
                        <div className='cart-item'></div>
                        <div className='cart-item'></div>
                        <div className='cart-item'></div>
                        <div className='cart-item'></div>
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