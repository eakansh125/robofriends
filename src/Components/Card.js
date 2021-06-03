import React from 'react'

const Card = (props) => {

    /* ---------------------------------------OR WE CAN USE this and remove props keyword-------------------------------------- */ 
    /* THIS IS CALLED DESTRUCTURING */
/* const Card = ({name,email,id}) => { */
    return(
        <div className='tc bg-light-gray dib br3 pa3 ma3 grow shadow-5'>
            <img alt='robots' src={`https://robohash.org/${props.id}}?200x200`} />
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;