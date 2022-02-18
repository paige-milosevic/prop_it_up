import React from 'react';

const People = (props) => {
    
    const { firstName, lastName, age, hairColor} = props;

    return(
        <div>
            <h1>{ lastName }&#44; { firstName }</h1>
            <p>Age: { age } </p>
            <p>Hair Color: { hairColor }</p>
            <br></br>
        </div>
        
    )
}
export default People;