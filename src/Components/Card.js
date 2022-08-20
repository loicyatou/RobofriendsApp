import React from 'react';

const Card = ({ name, email, id }) => {
    // const { name, email, id } = props;

    // destructuring (es6) so that we dont have to add props.name etc to the 
    // html below. makes things tidier. 

    // weve just copied and pasted this into the parameters but I commented
    // // out what used to be there so that I could still have this understanding. but
    // all thats happening here is we are reciving props paramters destruitng itin the brackets
        

    return(
        <div className='tc bg-light-red dib br3 pa3 ma2 grow bw2 shadow-5'> 
        {/* this is just tachyon classes. no need to import
        tachyon here. its already in index.js.   */}

            <img alt='robophoto' src={`https://robohash.org/${id}?200x200`} />
            {/* here we hav used backticks (es6 template strings) on the src link. this makes it 
            dynamix so that we can add any valyes we want and make any type of expressions
            all in one line. so here we added a ${props.id} expression which randomizes 
            the images of the robofrieds   */}

            <div>
                <h2>{name}</h2>
                {/* //card is taking these properties (name and email) from the Cardlist map array */}
                <p>{email}</p>
                {/* <p>{id}</p> */}
                
                {/* these are js expressions so they have to be wrapped
                in curly brackets . This is how jsx works since this isnt proper html
            . but it is also good practice to always wrap js statements in curly brackets 
            to avoid bugs & increase code clarity */}

            </div>
        </div>

    );
}

// so here we have used props. remember these are arguments passed into react components. 
// They are usually passed to components via HTML attribute. here we have passed
// the values within the Card component

//also cardlist is the parent element here. and robots as a component has already been 
// passed to its parent element. as such there is no need to import robots here
//  since it already has access to it through its parent 

// LOOK HERE ^ in terms of AnimationPlaybackEvent, there was props.name, props.id and props.email 
// but we used destructuring and removed the props.



export default Card;