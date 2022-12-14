import React from "react";

const Hello = () => {
    // return (
    //     <div className='dummyClass'>
    //         <h1>Hello !</h1>
    //     </div>
    // )
    
    return React.createElement(
        'div', 
        {id: 'hello', classeName: 'dummyClass'}, 
        React.createElement('h1', null, 'Hello !'))
}

export default Hello