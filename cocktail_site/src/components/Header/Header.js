import React from 'react'

function Header (props) {

    const query = {

    }

    return (
        <div>
            <h1>{props.title}</h1>
            <button onClick={() => props.changeTitle()}>New title</button>
            <form onSubmit={() => props.setQueryType(props.querytype)}>
                <label htmlFor="searchBy" >Search cocktails by </label>
                <select
                    name="searchBy"
                    id="searchBy"
                    onChange={(e) => props.setQueryType(e.target.value)}
                    >
                    <option>Name</option>
                    <option>Ingredient</option>
                    <option>Type</option>
                    <option>Glass</option>
                </select>
                {console.log(props.querytype)}
                {props.querytype === "Name" ?
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter name of cocktail"/> :
                props.querytype === "Ingredient" ?   
                    <input
                        type="text"
                        name="ingredient"
                        placeholder="Enter ingredient"/> :
                props.querytype === "Type" ?
                    <select
                        name="type">
                    <option>type a</option>
                    <option>type b</option>
                    <option>type c</option>
                    </select> :
                    <select
                        name="glass">
                    <option>glass a</option>
                    <option>glass b</option>
                    <option>glass c</option>
                    </select> 
                    }
                
                
            </form>
        </div>
        
    )
}

export default Header;