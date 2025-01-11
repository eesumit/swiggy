import RestrauntCard from './RestrauntCard.js';
import { useEffect, useState } from 'react';
import Search from "../assets/img/search.png";
import Shimmer from './Shimmer.js';
import {API_URL} from '../constants.js'
import { Link } from 'react-router-dom'
import useOnline from '../utils/useOnline.js';
 

function filterData(searchText,restraunts) {
    let data = restraunts.filter((restraunt)=> restraunt.info.name.toLowerCase().includes(searchText.toLowerCase().trim()))
    return data;
}
 
const Body = () =>{
    const [allRestraunts,setAllRestraunts] = useState([])
    const [filteredRestraunts, setFilteredRestraunts] = useState([])
    const [searchText, setSearchText] = useState("zesty");

    useEffect(()=>{
      getRestraunts();
    },[])

    async function getRestraunts(){
    let json=null;
    try {
      const fetchData = await fetch(API_URL);
      if (!fetchData.ok) {
        throw new Error(`HTTP error! Status: ${fetchData.status}`);
      }
      json = await fetchData.json();
      console.log("json data:", json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
      //optional chaining
      const apiData = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setAllRestraunts(apiData);
      setFilteredRestraunts(apiData);
      // console.log( json);
   
    }
     const isOnline = useOnline();
    if(!isOnline) return (
      <h1>🔴you are offline, check your internet connection.</h1>
      )
    if(!allRestraunts) return null;
    if(allRestraunts?.length===0) return <Shimmer/>
    if(filteredRestraunts?.length===0) 
    return (
  <>
  <div className="search-container">
        <div className='search-container'> 
            <input 
            type="text" 
            value={searchText} 
            onChange={(e)=> {
                setSearchText(e.target.value)
            //     const data =  filterData(searchText, allRestraunts);
            // setFilteredRestraunts(data);
                if(e.target.value.trim()==="") setFilteredRestraunts(allRestraunts);
            }}
            onKeyDown={(e)=>{
              if(e.code==="Enter"){
                const data =  filterData(searchText, allRestraunts);
            setFilteredRestraunts(data);
                if(e.target.value.trim()==="") setFilteredRestraunts(allRestraunts);
              }
            }}
          
            className='search-input' 
            placeholder='search'/>
        <button 
        className='search-button'
        onClick={()=>{
            const data =  filterData(searchText, allRestraunts);
            setFilteredRestraunts(data);
        }}
        >
        <img src={Search} alt="" className='search-img' />
        </button>
        </div>
        <div>
        <h1 className='qoute'>Delight in Every Bite: Where Flavor Meets Imagination.</h1>
        </div>
        </div>
 <h1>No result found of your search.</h1>
  </>
  ) 
    return (allRestraunts?.length === 0)? <Shimmer/> : (
        <>
        <div className="search-container">
        <div className='search-container'> 
            <input 
            type="text" 
            value={searchText} 
            onChange={(e)=> {
                setSearchText(e.target.value)
            //     const data =  filterData(searchText, allRestraunts);
            // setFilteredRestraunts(data);
                if(e.target.value.trim()==="" || e.target.value.trim()==="zesty") setFilteredRestraunts(allRestraunts);
            }}
            onKeyDown={(e)=>{
              if(e.code==="Enter"){
                const data =  filterData(searchText, allRestraunts);
            setFilteredRestraunts(data);
                if(e.target.value.trim()==="") setFilteredRestraunts(allRestraunts);
              }
            }}
          
            className='search-input' 
            placeholder='search'/>
        <button 
        className='search-button'
        onClick={()=>{
            const data =  filterData(searchText, allRestraunts);
            setFilteredRestraunts(data);
        }}
        >
        <img src={Search} alt="" className='search-img' />
        </button>
        </div>
        <div>
        <h1 className='qoute'>Delight in Every Bite: Where Flavor Meets Imagination.</h1>
        </div>
        </div>
        <div className='cards'>
        {
          filteredRestraunts.map((restraunt)=><Link to={"/restaurants/"+restraunt.info.id}> <RestrauntCard {...restraunt.info}/> </Link>)
        }
        </div>
        </>
         
    )
}
export default Body;