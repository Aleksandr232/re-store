import React,{useState} from 'react';
/* import './booksearch.css'; */

const api = {
  key: "af3904bcfb9954b533100c6413793863",
  base: "https://api.openweathermap.org/data/2.5/"
}

const BookSearch = () => {

  
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  
  const search =  () => {
    return fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
       .then(res => res.json())
       .then(result => {
         setWeather(result);
         setQuery('');
         console.log(result);
       });
   
 }
  return (
    {/* <div className="book-list-item">
      <div className="book-cover">
        <img src='' alt="cover" />
      </div>
      <div className="book-details">
        <span className="book-title"></span>
        <div className="book-author"></div>
        <div className="book-price">₽</div>
        <button
          className="btn btn-info add-to-cart">
            Добавить в корзину
        </button>
      </div>
    </div> */}
  );
};

export default BookSearch;
