import React from 'react'
import SmallLoader from '../SmallLoader/SmallLoader';
import './products.css';

import arrow_left from '../../../../Icons/arrow-left-solid.svg'

const test = (props) => {

  //certain Data will be rendered depending on the click of the user and the category state.
      const itemsChosen = (item) => {
        //Checks if the data is not empty
              if(item !== undefined && props.itemsChosen === false) {
                  return (<div id={item.id} onClick={props.action} key = {item.id} className="make__sale__item">
                              <span className="make__sale__quantity">{item.id}</span>
                              <h5 className="make__sale__product">{item.id}</h5>
                          </div>)
              }
              else if(props.itemsChosen !== false){
                return (
                  <div id={item.id} onClick={props.setPopup} key = {item.id} className="make__sale__item">
                            <span className="make__sale__quantity">{item.id}</span>
                            <h5 className="make__sale__product">{item.id}</h5>
                        </div>)
              }
              else{//If no data for this search can be found.
                  return (<div className="make__sale__error">
                      <h3>Cannot Find Product By The Name of '{props.searchedName}'</h3>
                  </div>)
              }

      }

    return !props.loading ? (props.itemsChosen ? (<div className="make__sale__folder">
    <div className="folder__name"><img onClick={props.exitFolder} className="arrow-back" src={arrow_left}></img><h2>Folder Name</h2></div>
    {props.items.map(item => itemsChosen(item))} </div>) :
    props.items.map(item => itemsChosen(item))) : <SmallLoader/>
}

export default test
