import React, {useEffect, useState} from 'react'
import '../SellPages.css';

//Redux Required imports.
import { connect } from 'react-redux';
import { setAlert } from '../../../actions/alert';
import propTypes from 'prop-types';

//Icons Imported
import shopping from '../icons/shopping-cart-solid.svg';
import user from '../icons/user-plus-solid.svg';

//Components Imported In
import SearchBar from '../Components/SearchBar/SearchBar';
import UserIcon from '../icons/user-solid.svg';
import Popup from '../Components/popup/Popup';
import Sidebar from '../../../Components/SideNav/Sidebar'
import SmallLoader from '../Components/SmallLoader/SmallLoader';
import Products from '../Components/Products/Products';

export const MakeSale = (props) => {

//States
    const [items, setItems] = useState(null);
    const [loading, setLoading] = useState(true);
    const [searchedName, setSearchedName] = useState(null);
    const [chooseItem, setChooseItem] = useState(false);
    const [cart, setCart] = useState([]);
    const [cartLoading, setCartLoading] = useState(false);
    const [customer, setCustomer] = useState(null);
    const [popupVisibility, setPopupVisibility] = useState("hidden");

//Test Data for search suggestions
    const data = {
        names : [
            'Brandon-Lee',
            'Jaun-Pierre',
            'Kegan Scott',
            'Lucy Ourique',
            'Peter Todd',
            'Linda Coetzee'
        ]
    }

//Method to check status code and return JSON data from REST API.
    const returnJSON = async (link) => {
        const res = await fetch(link);
        const data = await res.json();

        //Will return error logged to console.
        if(res.status !== 200){
            return console.log("ERROR WITH STATUS CODE ==> " + res.status);
        }

        return data; //returns data from the API.
    }
    useEffect(() => {
      //Async function that will fetch posts from backend.
        async function fetchItems(){
            let data =  await returnJSON(`https://jsonplaceholder.typicode.com/posts?_limit=12`);

              //Cehcks to see if the name searched is not null.
            if(searchedName !== null){
                data =  await returnJSON(`https://jsonplaceholder.typicode.com/posts/${searchedName}`);
                let temp_array = [data]; //Sets a temp array back to the state.
                setItems(temp_array);
            }
            else{
                setItems(data);
            }
            setLoading(false);
        }
        fetchItems();

    }, [searchedName])

//On key down for searched name or number input to get the exact input.
    const onKeyDown = (e) => {
        setLoading(true); //Displays loader
        setChooseItem(false);

        setTimeout(() => {//Set timeout so input can be grabbed after user types character.
            if(e.target.value === ""){
                setSearchedName(null);
                var key = e.keyCode || e.charCode;//stores key code.

                //Checks to see if the character key code is equal to a backspace.
                if( key == 8 || key == 46 ){
                    setSearchedName(null);
                }
            }
            else{
                setSearchedName(e.target.value);
            }
        }, 1000);
    }

    const getCategory = e => {
        setLoading(true);//Sets Loader

        const id = e.currentTarget.id; //Gets the id of the category.
        async function fetchItems(){//async function for response.

            const data = await returnJSON(`https://jsonplaceholder.typicode.com/posts/${id}`);//gets the inner items of that category

            const temp_array = [];

            temp_array.push(data);

            setItems(temp_array);
            setChooseItem(true);//Sets the boolean of the condition of the items and categories.
            setLoading(false);
        }

        fetchItems();
    }

//Test functions to add data to the screen.
    const selectItem = e => {
        setCartLoading(true);
        const temp_array = [...cart];
        temp_array.push({name: 'Heets Pack Red', price_ex: "299", price_in: "343.85"});
        setCart(temp_array);
        setCartLoading(false);
        console.log(cart);
    }

    //this functions will be sent to searchedSuggestions as a prop to get feedback.
    const handleCustomer = (customer) => {
        setCustomer(customer);
    }

    const unSetCustomer = () => {
        setCustomer(null);
    }

    //Drop Item in cart to show info on it.
    const dropItem = (e) => {
      e.target.parentNode.parentNode.style.height = "150px";
    }

    const exitFolder = async() => {
      setChooseItem(false);
      let data =  await returnJSON(`https://jsonplaceholder.typicode.com/posts?_limit=12`);
      setItems(data);
    }

    const setPopup = () => {
      setPopupVisibility("visible");
    }


    return (
        <div>
            <Sidebar />
            <div className="make__sale__body">
            <Popup visibility={popupVisibility}/>
            <div className="make__sale__left__container">
                <div className="make__sale__search__conatiner">
                <img className="make__sale__cart__icon" src={shopping}/>
                <h2>Looking for Something?</h2>
                </div>
                <input type="text" placeholder="Search for something" onKeyDown={onKeyDown} className="make__sale__searchbar"></input>
                <div id="search"></div>
                <div id="make__items__body" className="make__sale__items">
                  <Products exitFolder={exitFolder} itemsChosen={chooseItem} setPopup={setPopup} items={items} searchedName={searchedName} getCategory={getCategory} loading={loading}/>
                </div>
            </div>
            <div className="make__sale__right__container">
                <div className="make__sale__extra">

                </div>

                {!customer ? (<div className="make__sale__search_user">
                    <img className="make__sale__user_img" src={user}/>
                    <SearchBar handleCustomer={handleCustomer} className="customer__search" placeholder="Search for customer" names = {data.names}/>
                </div>) : <div className="make__sale__search_user">
                    <img className="make__sale__user_img" src={UserIcon}/>
                    <h1 className="make__sale__customer">{customer}</h1>
                    <button onClick={unSetCustomer} className="change__customer">Change</button>
                </div>}

                <div className="make__sale__user__details">
                    <div className="make__sale__items__container">
                        <div className="make__sale__cart">
                        <div className="inner-top-cart">
                        <span className="cart-collapse" onClick={dropItem}>></span> <h4> 3.0 Duo Gold</h4><span className="cart-price">R853</span>
                        </div>


                        </div>
                    </div>
                    <div className="make__sale__sale__details">
                        <div>
                        <span>Subtotal</span>
                        <input placeholder="R" disabled/>
                        </div>
                        <div>
                        <span>VAT 15%</span>
                        <input placeholder="R" disabled/>
                        </div>
                    </div>
                    <div className="make__sale__final">
                    <button>Pay</button>
                    <input disabled placeholder="R"></input>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

MakeSale.propTypes = {
  setAlert: propTypes.func.isRequired
}

export default connect(null, {setAlert})(MakeSale);
