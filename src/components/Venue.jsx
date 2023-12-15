import { NavLink, useNavigate } from "react-router-dom";
import Rating from "./Rating";
import FoodAndDrinkList from "./FoodAndDrinkList";
import AdminButton from "./AdminButton";
import {formatDistance} from "../services/Utils";
const Venue = ({ venue, admin }) => {

  const navigate = useNavigate()

  const performClick = (evt) => {
    // Mekanı Güncelle butonu fonksiyonu . Addupdate sayfasına yönlendirir.
    if(evt.target.name === "Mekanı Güncelle")
      navigate("/admin/addupdate", { state: { venue } }) //mekan verisi gönderir. 
  };

  return (
    <div className="list-group">
      <div className="col-xs-12 col-sm-12">
        <div className="col-xs-12 list-group-item">
          <h4>
            <NavLink to={`/venue/${venue.id}`} state={{ id: venue.id }}>
              {venue.name}{" "}
            </NavLink>
            <Rating rating={venue.rating} />
          </h4>
          <span className="span badge pull-right badge-default">
            {!admin ? formatDistance(venue.distance) : ""}
          </span>
          {admin ? (<AdminButton type="primary" name="Mekan Sil" onClick={performClick}/>):""}
          {admin ? (<AdminButton type="info" name="Mekanı Güncelle" onClick={performClick}/>):""}
          <p className="address"> {venue.address}</p>
          <p>
            <FoodAndDrinkList foodAndDrinkList={venue.foodanddrink} />
          </p>
         
        </div>
      </div>
    </div>
  );
};
export default Venue;
