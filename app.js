import React from "react";
import ReactDOM from 'react-dom/client';

const heading = (
    <h1>Namaste React</h1>
);

const Heading = () => {
    return (
        <div className="nav-bar">
            <h1 className="logo">TastyTracks</h1>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Cart</li>
            </ul>
         </div>
    );
};

const restauList = [
{"id": "70279",
"name": "McDonald's",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/fedaee6f-c5e9-4f19-8188-93627e6d6776_70279.JPG",
"locality": "Mani Nagar",
"areaName": "Kankaria",
"costForTwo": "₹400 for two",
    "cuisines": [
    "Burgers",
    "Beverages",
    "Cafe",
    "Desserts"],
"rating": 4.2,
"slaString": "25-30 mins",
},
{"id": "47589",
"name": "Pizza Hut",
"cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
"locality": "City Gold Complex",
"areaName": "Navrangpura",
"costForTwo": "₹350 for two",
"cuisines": [
  "Pizzas"],
"avgRating": 3.9,
"slaString": "30-35 mins",
},
{
    "id": "40831",
    "name": "Subway",
    "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
    "locality": "Mithakali",
    "areaName": "Navrangpura",
    "costForTwo": "₹350 for two",
    "cuisines": [
        "Healthy Food",
        "Salads",
        "Snacks",
        "Desserts",
        "Beverages"],
    "avgRating": 4.3,
    "slaString": "25-30 mins",
},
{
    "id": "395939",
    "name": "KFC",
    "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
    "locality": "Panchwati Cross",
    "areaName": "Paldi & Ambawadi",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "Burgers",
      "Biryani",
      "American",
      "Snacks",
      "Fast Food"
    ],
    "avgRating": 4.2,
    "slaString": "20-25 mins",
},
{
    "id": "81814",
    "name": "Burger King",
    "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    "locality": "3rd Eye II,CG Road",
    "areaName": "Ellisbridge",
    "costForTwo": "₹350 for two",
    "cuisines": [
      "Burgers",
      "American",
      "Salads",
      "Beverages",
      "Chaat"
    ],
    "avgRating": 4.3,
    "slaString": "25-30 mins",
},
{
    "id": "36676",
    "name": "Jugaad Nights",
    "cloudinaryImageId": "ptqijjpjqkoxszwo0qtn",
    "locality": "Navrangpura",
    "areaName": "Navrangpura",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "Thalis",
      "Indian",
      "Chinese",
      "Beverages"
    ],
    "avgRating": 4.5,
    "slaString": "30-35 mins",
}
];

const RestauCard = ({
    name, cuisines, rating, slaString, locality, areaName, cloudinaryImageId
}) => {
    return(
        <div className="card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
            +cloudinaryImageId} alt="Name"/>
            <h2>{name}</h2>
            <p>{cuisines.join(", ")}</p>
            <p><i className="ri-star-fill"></i> {rating} . {slaString}</p>
            <p>{locality}, {areaName}</p>
        </div>
    );
}

const Body = () => {
    return(
        <div className="resto-list">
            {restauList.map((resto) => {
                return <RestauCard {...resto} key={resto.id}/>
            })};
        </div>
    );
}
 
const Footer = () => {
    return (
        <h1>Footer</h1>
    );
}

const AppLayout = () => {
    return (
        <>
            <Heading/>
            <Body/>
            <Footer/>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);