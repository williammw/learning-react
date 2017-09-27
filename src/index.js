import React, {Component} from 'react';
// actuallt render the DOM 
import ReactDom from 'react-dom';
// 8.1 import youtube search apu
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
// 10.2 import video list
import VideoList from './components/video_list';
// ReactDom
// create new componenet
// component use to create HTML
const API_KEY = "AIzaSyDDShiBJjwdbGn-wwgNlj9yvQeuiCy5nYk";


// 9.1 refactor function component to class based component
/*
const App = () => {
  // @when we create a component, we create a class of compoenet
  return (<div>
    <SearchBar />
  </div>);
}
*/

//9.2 
class App extends Component {
  // @when we create a component, we create a class of compoenet
  constructor(props){
    super(props);
    this.state = {videos:[]};

    
    //8.2 -> 9.3 (move 8.2 outside the function object into class based component)
    YTSearch({key:API_KEY, term : 'Jason' }, (videos) => {
      // if key and value are identical term "videos and (videos) =>" ES6 can make it o videos
      this.setState({videos})
      // same as this.setState({videos:videos})
    });

  }
  render(){
    //10.4 class based component can use props everywhere.
    //this.props.xxx
    return (
    <div>
      <SearchBar />
      <VideoList videos={this.state.videos} />
    </div>);
  }
}
//take this compoennt generated HTML and put it on the page
// wrap App by < /> to make it become from classes to component 
// ReactDom.render(<App/>, {{///////}}); {{////}} <- put render component to DOM
ReactDom.render(<App/>,document.querySelector('.container'));

//https://console.developers.google.com