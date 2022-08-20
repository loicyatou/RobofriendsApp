// this was created so that all our app components (features) are in one place.

import React, { Component} from 'react';
// {component} is brought here instead of doing React.component below (where component is). cleaner code

import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
// import { robots } from "./robots";
import './App.css';
import Scroll from '../Scroll';



class App extends Component {
// in order to use states you need class components: class components have 
// buit in state Object.

//apps that have state are called smartcomponets

    constructor() {
        super()
        this.state = {
            robots: [],
            // robots:robots,

            // to clarify this object key was the actual robots File. it is contained within the state
            // which is contained within the app constructor. so now that weve made robots (which was a prop) 
            // into a state here, it can be manipulated and re-rendered. look below at this.state.robots

            // now instead we are fetching the robot details from an API below

            searchField: ''
            // again this is not random - if you check searchBox fle you will see the value of the 
            // input box is searchField. go look there. 

        //   describign the app. so this is describing the things that can change 
        //   in our App. so the state objects that can ame amended
        //   and thus lead to re-rendering.  

        // these usally live in parent component.
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        //this is getting the users from an API which is more
        // realistic to what you would be doing in real life

       // componendidMount invokes immediatly after a component is mounted (ie.
      //inserted into the tree)

      //also becuase this is a inbuilt function there
      //is no need to use arrow functions 
        .then(response => response.json())
        .then(users =>this.setState({robots: users}));
        //updating the users (robots info) from the api

    }

    onSearchChange = (event) => {
        // rule of thumb. whenver you create your own methods on react make sure to use this syntax 
        // so whats been adde to the above is the "=" sign between onsearchchange and (event) and the arrow after the brackets
        
        // the reason for this is so that the "this.state.robots.. & this.state.search..." just below refers to the state
        // // above and not there orignals which arent on this page (there in the robots & searchbox page)

        this.setState({searchField: event.target.value})
            // - this.setState: this what will request the parent element to re-render a value
            // - event.target.value: retreives the value of whatever input it was called on.
            // so here for instance whatever value is inputted into the searchfiedl which is the value of the
            // searchbox then it will retreive it.
        }

    // function that console.logs changes in value to the SearchBox
    // to backtrack look at searchbox file value and follow to here

    render () {
        const {robots, searchField} = this.state
        //used destrufutirng so that we can remove 
        const filteredRobots = robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchField.toLowerCase())
        })

          // this is filtering the robots according to the changes made in the searchfield 
            // - toLowerCase: changes all the robots names to lowercase so that its easy to compare the input Text
            // with the names of the robot and match them when you search it in.

        if(robots.length=== 0) {
            return <h1>Loading! Please Wait</h1>
        } else {

            //this is incase the API takes long to load. this way
            // the user isnt just stuck with a loading page. 

    return (
        <div className='tc'>
        <h1 className='mv3' style={{fontSize: '4rem'}}>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
       
        {/* anytime the input of searchChange changes it will trigger the function onSearchChange
        and console.log the event.  */}
        {/* "=" is the value from the prop you want to pull */}

        {/* explain: 
        1. we call for a render with the searchChange element.
        2. react calls the SearchBox compomnnt with the onChange event as its prop (since searchChange
        is given the onChange event n the searchBox file)
        3. when a change in the value of the searchbox is made, the prop triggers the function
        onSearchChange and as a result the console logs what changes have been made. */}

        <Scroll>
        <CardList robots={filteredRobots}/>
        </Scroll>  
             {/* so that our code is cleaner we have created a specific file
             for the cards called cardlist. this is now grabbing those value from that component 
             Cardlist is also now acceptng robots as a prop. remember that 
             props are passng values, usually html elements. this is apssing the robots objects.

           filteredRobots -  (this.state.robots) so now we have the filteredrobots prop that filters through the robots 
           and renders the robot that the user inputs. 
 
             this.state.robots: to add to this. Cardlist is taking robots as a prop. that prop
             is passng html elements to cardlist component. (look at cardlist file and see what it is dooing
             to those html elements). Despite the fact that robots is a prop to cardlist here it is a state and thus it can be manipulated
             so essnetially it is playing both roles. the only reason it can now be changed is becuase it is within
             the state contained within the app constructor  */}

        </div>
  
        );
    
    }
}

}



export default App;