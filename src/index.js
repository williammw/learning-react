import React from 'react';
// actuallt render the DOM 
import ReactDom from 'react-dom';
/*!!!!!!*/
import SearchBar from './components/search_bar';
/*!!!!!!!*/
// ReactDom 
// create new componenet
// component use to create HTML
const API_KEY = 'AIzaSyDDShiBJjwdbGn-wwgNlj9yvQeuiCy5nYk';
const App = () => {
  // @when we create a component, we create a class of compoenet
  return (<div>
    <SearchBar />
  </div>);
}
//take this compoennt generated HTML and put it on the page
// wrap App by < /> to make it become from classes to component 
// ReactDom.render(<App/>, {{///////}}); {{////}} <- put render component to DOM
ReactDom.render(<App/>,document.querySelector('.container'));

//https://console.developers.google.com