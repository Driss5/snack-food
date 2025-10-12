import { useLocation } from "react-router-dom";
import '../css/selected-food.css';
import { useNavigate } from "react-router-dom";
import DownLinks from "../Components/DownLinks";

function SelectedFood() {
  const location = useLocation();
  const { food } = location.state || {};

  const navigate = useNavigate();
  function handleReturn() {
    return function() {
        navigate(-1);
    }
  }
  return (
    <div className="bg-0">
        <div className="bg-1">
            <div className="detaille-header">
                <img src="/Images/Icones/flesh-left.svg" alt="Back" onClick={handleReturn()} />
                <div className="detaille-header-p">
                  <p>{ food.name }</p>
                  <p>{ food.price } DH</p>
                </div>
            </div>
            <div className="detaille-food-image">
                <img src={ food.image } alt={ food.name } />
            </div>
            <div className="detaille-food-infos">
                <div className="detaolle-food-info">
                    <img src="/Images/Icones/horloge.png" alt="Clock" />
                    <p>30 min</p>
                </div>
                <div className="detaolle-food-info">
                    <img src="/Images/Icones/calorie.svg" alt="Clock" />
                    <p>500 calories</p>
                </div>
                <div className="detaolle-food-info">
                    <img src="/Images/Icones/kg.svg" alt="Clock" />
                    <p>600 grams</p>
                </div>
            </div>
            <div className="detaolle-food-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique hendrerit aliquam ullamcorper laoreet gravida suspendisse libero turpis consectetur. Amet mi, neque elit</p>
            </div>
            <div className="detaolle-food-btn">
                <button>Add to cart - { food.price } DH</button>
            </div>
        </div>
        <div className="bg-2"></div>
        <div className="bg-3"></div>
        <div className="bg-4"></div>
        <div className="bg-5"></div>
        <DownLinks />
    </div>
  );
}

export default SelectedFood;
