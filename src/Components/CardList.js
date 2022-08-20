import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {

    // we have access to robots here without having to import it because robots was passed
    // to the cardlist component as a prop in index.js. thisis also destructuring, it is using the 
    // robots object keys and taking the target values

    const cardsArray = robots.map((user,i) => {
        return <Card 
        key={i} 
        id={robots[i].id} 
        name={robots[i].name} 
        email={robots[i].email}/>

        // multiple advantages to using map. 1) shorter than foEach 2) dont need to state
        // the amount of iternations. ist will just loop through them all

        // key used so that each item in the array cna be identified. better if you used like id or any other 
        // string value that is used in each array element. 
    })

    return (
        <div>
            {cardsArray}
            {/* this is calling on the map loop above. remeber curly brakcets for JS */}
            
            {/* you could also choose to copy and paste the code above into these brackets since it
            is for js anyway and remove the varibale. but I chose not to since ive already made fairly complex notes
            change this if you have to */}

            {/* old way */}

            {/* <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
            <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
            <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/> */}
             
             {/* here we were accessing the propertes of the objects. we are able to because
             we have imported the object from robots.js. the syntax for accessing properties of an object is 
             objectName.property but it has been commeted out beucase we are using the map loop
             above that will go through each item in the array without lots of code */} 
  
        </div>
  
            //  {/* all this is doing is creating multiple cards.
            // they will all have the detail needed. check index.js */}
  
            // {/* remeber that react only expects you to return one element.
            //  wrap things in divs */}
    );
}

export default CardList

