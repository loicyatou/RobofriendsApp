import React from "react";

const Scroll = (props) =>{
    return(
            <div style={{overflowY: 'scroll', border:'2px solid transparent',height:'800px'}}>
            {props.children}    
            </div>
    )
}

//this componet was created so that there was a maxium
// scroll area to keep functionality regardless of the screen size 
// so if you chnge border color to solid black youll see there is a 
// border in which your able to scroll in. this works beuccase 
// <scroll> in App.js only wraps the cardlist.

export default Scroll;