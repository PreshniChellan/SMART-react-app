import React, {useEffect, useState} from 'react'
import './popup.css';
import Product from '../Products/Products';

export const Popup = (props) => {

  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState(null);


  useEffect(() => {
    //Async function that will fetch posts from backend.
      async function fetchItems(){
          let response =  await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=12`);
            const data = await response.json();
          setItems(data);
          setLoading(false);
      }
      fetchItems();

  }, [items])

  const addToCart = () => {
    console.log("added");
  }


    return (
        <div className="popup__overlay" style={{visibility: props.visibility}}>
            <div className="popup__outer">
            <div className="popup__inner">
              <h1>Product Name</h1>
              <p>Select a Variable Option</p>
              {!loading ? (<div className="popup_products"><Product action={addToCart} items={items} loading={loading}/></div>) : "Loading"}
            </div>
            </div>
        </div>
    )
}

export default Popup;
