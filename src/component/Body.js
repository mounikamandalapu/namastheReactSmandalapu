import { Title } from "./Header";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
//whenever state variable updated - react triggers reconsilation algorithm-> updates the virtual DOM and then compares old version of V DOM and new version , and then updates only the changed part in the Real DOM
const SearchBar = ({ searchText, setSearchText, onSearch }) => {
  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleClick = (e) => {
    setFilteredList(listOfRes.filter((rest) => rest.info.avgRating > 4.5));
  };

  const handleSearch = () => {
    const filtered = listOfRes.filter((restCard) =>
      restCard?.info?.name
        .toLowerCase()
        .includes(searchText.toLocaleLowerCase())
    );
    console.log(searchText);
    setFilteredList(filtered);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9628669&lng=77.57750899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const result = await response.json();
      const restaurants =
        result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setFilteredList(restaurants);
      setListOfRes(restaurants);
    } catch (err) {}
  };
  //useEffect - to sync ur component with external system.
  //          -- 2 args , callback function, dependency array
  useEffect(() => {
    fetchData();
  }, []);

  if (listOfRes.length === 0) {
    return <ShimmerUI />;
  }

  return (
    <section className="body-container">
      <SearchBar
        setSearchText={setSearchText}
        searchText={searchText}
        onSearch={handleSearch}
      />
      <div>
        <button className="filter-res" onClick={(e) => handleClick(e)}>
          Top-Rated Restaurants
        </button>
      </div>
      <Title name="Food Delivery Restaurants in Bengaluru" />
      <div className="res-container">
        {filteredList.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </section>
  );
};

export default Body;
