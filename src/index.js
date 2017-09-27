import React, {Component} from 'react';
// actuallt render the DOM 
import _ from 'lodash';
import ReactDom from 'react-dom';
// 8.1 import youtube search apu
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
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
    this.state = {
      videos:[],
      //17.1 Vid29!important
      // add the concept of selecting video and i want to pass to the selected video details
      selectedVideo:null
    };

    this.VideoSearch('Hello');

  }
    // create Video Search method
    VideoSearch(term) {
      //16.1 move YT search into VideoSearch
      //8.2 -> 9.3 (move 8.2 outside the function object into class based component)
      YTSearch({key:API_KEY, term : term }, (videos) => {
        // if key and value are identical term "videos and (videos) =>" ES6 can make it o videos
        //this.setState({videos}) <-- becoz of 17.1 change to original form
        this.setState({
          videos:videos,
          selectedVideo : videos[0]
        });
        // same as this.setState({videos:videos})
      });
     
    }

  
  render(){
    // 32.1 videoSearch =
    const VideoSearch = _.debounce((term) => this.VideoSearch(term), 300 );
    //10.4 class based component can use props everywhere.
    //this.props.xxx
    return (
    <div>
      <SearchBar onSearchTermChange={term => VideoSearch(term)} />
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList        
        onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
        videos={this.state.videos} 
        />
    </div>
    );
  }
}
//take this compoennt generated HTML and put it on the page
// wrap App by < /> to make it become from classes to component 
// ReactDom.render(<App/>, {{///////}}); {{////}} <- put render component to DOM
ReactDom.render(<App/>,document.querySelector('.container'));

//https://console.developers.google.com