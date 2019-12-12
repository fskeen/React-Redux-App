import React from 'react'

function Results (props) {
    return (
        <div>
            <button onClick={() => props.getData()}>Random cocktail</button>
            {props.random && !props.isLoading && <h3>{props.random.strDrink}</h3>}
        </div>


    )
}

export default Results;