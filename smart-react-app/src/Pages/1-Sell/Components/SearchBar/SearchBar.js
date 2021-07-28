import React, {useState, useEffect} from 'react'
import './searchbar.css';
import SmallLoader from '../SmallLoader/SmallLoader';
import userIcon from '../../icons/user-circle-solid.svg';
import AddIcon from '../../icons/plus-circle-solid.svg';

export const SearchBar = (props) => {

    const [suggestions, setSuggestions] = useState(null);
    const [loading, setLoading] = useState(true);
    const [searchedSuggestions, setSearchedSuggestions] = useState(null);
    const [fieldValue, setFieldValue] = useState("unFocused");

    useEffect(() => {
        setSuggestions(props.names);
    }, [props.names]);

    const onKeyDown = (e) => {
        setLoading(true);
        setTimeout(() => {

            if(e.target.value === " " || e.target.value === ""){
                setFieldValue("unFocused");
            }
            else{
                setFieldValue("onFocus");
            }


            const array = [];
            setSearchedSuggestions([]);
            suggestions.forEach(suggest => {
                if(suggest.includes(e.target.value)){
                    array.push(suggest);
                }
            })

            array.forEach(suggest => {
                if(suggest.includes(e.target.value)){
                    setSearchedSuggestions(suggest);
                }
                else{
                    setSearchedSuggestions(null);
                }
            })


            setLoading(false);
        }, 500);
    }

    const onFocus = (e) => {

        if(document.getElementById('search_user').value === " " || document.getElementById('search_user').value === ""){
            setFieldValue("unFocused");
        }
        else{
            setFieldValue("onFocus");
        }
    }


    const handleBlur = (e) => setFieldValue("unFocused");


    const handleUserClick = e => {
        props.handleCustomer(searchedSuggestions);
        setFieldValue("unFocused");
    }

    const checkUser = () => {
        if(searchedSuggestions.length < 1) {
            return <div className="search__box__outer">
                <div className="customer__inner">

                <div className="customer__logo__outer">
                    <div className="customer__logo">
                        N
                    </div>
                </div>

                <div className="customer__box">
                    <div className="customer__name__outer">
                        <div className="customer__name">
                            There is no customer with the number '0640620778'
                        </div>
                    </div>
                </div>

                </div>

                <div className="add__new__customer">
                <img className="add_icon" src={AddIcon} /> Add '{document.getElementById('search_user').value}' as new customer
                </div>
            </div>
        }
        else{
            return <div className="search__box__outer"><div onMouseDown={handleUserClick} className="customer__inner">

                <div className="customer__logo__outer">
                    <div className="customer__logo">
                        {searchedSuggestions.split("")[0].toUpperCase()}
                    </div>
                </div>

                <div className="customer__box">
                <div className="customer__name__outer">
                    <div className="customer__name" id="customer__name">
                    {searchedSuggestions}
                    </div>
                    <div className="customer__role">
                    All Customers
                    </div>
                </div>

                <div className="customer__details__outer">
                    <div className="customer__details__id">
                    {searchedSuggestions + "-" + Math.floor(Math.random() * 900)}
                    </div>
                    <div className="customer__details__seperator">
                        |
                    </div>
                    <div className="customer__details__number">
                        0640620778
                    </div>
                </div>
                </div>

            </div>
            </div>
        }
    }

    return (
        <div>
            <input autocomplete="off" placeholder={props.placeholder ? props.placeholder: "Search something..."} id="search_user" onFocus={onFocus} onBlur={handleBlur} type="text" onKeyDown={onKeyDown}></input>
            <div className={fieldValue}>
            {!loading && checkUser()}
            </div>
        </div>
    )
}

export default SearchBar
