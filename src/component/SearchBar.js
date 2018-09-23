import React from 'react';

const Searchbar = props => {

    const test = "input here"
    return(

        <div style = {style.contentSearch}>
           <input 
           style = {style.inputSearch}
           type = "text" 
           placeholder = {test}  
           value = {props.search}
           onChange = {props.onChangeSearch}/>
        </div>
    )
}

const style = {
    inputSearch:{
       
        width : 500,
        height : 30
    },

    contentSearch:{
        backgroundColor : "blue",
        height : 100,
        justifyContent : "center",
        alignItems : "center",
        display : "flex"
    }


}

export default Searchbar;