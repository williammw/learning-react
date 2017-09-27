import React, {Component} from 'react';


// class based component uses when you have some internal record kepping
/* function conponents
const SearchBar = () => {
    return <input />;  // react create component
}*/
// class component , more intellengence
// React.Component{    can be change to Component {
class SearchBar extends Component{ 
    // 5.1 define state, define constructor 
    // 5.2 class component has constructor
    // 5.3 !important! the constructor function is the first and only function called 
    //      automaticlaly whenever a new instance of the class created
    constructor(props){ 
        // init stuff       
        super(props); // <- 5.4 get parent method 
        // 6.1 only inside of the constructor function do we change our state like this by just saying like this this.state = {term:'xxx'}
        //     "this.state" 係 syntax
        this.state = {term:''}; //<- 5.5 when user update search input, 'term' property we want to update
        // state exists on class based components, 'this.state' <- 送嘅

    }
    
    render(){ 
     
    //3.1
    // return <input onChange={this.onInputChange} />;    
     // 3. this method can remove the onInputChange function shorthand 
     // return <input onChange={(event) => console.log(event.target.value))} />;
    
     // 4. if single arguement
     // return <input onChange={ event => console.log(event.target.value))} />;
     // 
     // 6.2 this.setState <- 送
      return (
        <div>  
         <input 
            className="search-bar"
            // 7.1 added value and remove  "onChange={ event => this.setState({term: event.target.value })} "
            value = {this.state.term}
            onChange={ event => this.onInputChange(event.target.value)} />
         {/* 6.3 */}
         Value of the input: {this.state.term}
        </div>
        );
    }


    //16.2 
    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
    
     // 1. every class based components must define reder method
     // 2. detect user input and monitor text change
    //3.1 handling
    // onInputChange(event){
    //    console.log(event.target.value);
    // }
    // end of 3.1
     //3. prepare redux
}
// 5. State is the plain javascript object that used to records or react 
//    immentely rerender, if any components inside "searchBar" as well those will re-renderd as well
//    need init the state object as-well
export default SearchBar;