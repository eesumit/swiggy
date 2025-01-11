import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
const RestaurentMenue = () =>{
    const params = useParams();
    // const {restId} = useParams();///destructuring on the fly.😉
    const {restId} = params;
    const [restaurant, setRestaurant] = useState(null);
     
    useEffect(()=>{
        getData();
    },[])
    async function getData(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.797977&lng=75.8192578&restaurantId=" + restId);
        const json = await data.json();
        console.log(json);
        const apiData = json.data.cards[0].card.card.info;
        console.log("data : "+apiData)
        setRestaurant(apiData);
        

    }
    if(restaurant===null) return <Shimmer/>
    return(
        <>
        <div className="center">
        <h1>{restaurant?.name}</h1>
             <img className="single" src={IMG_CDN_URL + restaurant?.cloudinaryImageId} alt="" />
             <div className="box">
                <div className="left">
                <h6>{restaurant?.city.toUpperCase() + ", "+restaurant?.areaName}</h6>
             <h6>{restaurant?.cuisines.join(", ")}</h6>
                </div>
                <div className="right">
                <h6>{"Rating : "+ restaurant?.avgRatingString +"⭐"}</h6>
             <h6>{restaurant?.totalRatingsString}</h6>
                </div>
             </div>
        </div>

             
              
             
        </>
    )
}
export default RestaurentMenue;