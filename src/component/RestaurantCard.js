import { CDN_LINK } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRatingString, cuisines, costForTwo } =
    resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img src={CDN_LINK + cloudinaryImageId} className="rest-image" />
      <div className="res-details-container">
        <h4 className="res-name">{name}</h4>
        <h4>{avgRatingString} stars</h4>
      </div>
      <div className="res-details-container">
        <p className="res-varieties">{cuisines.join(",")}</p>
        <p>{costForTwo}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
