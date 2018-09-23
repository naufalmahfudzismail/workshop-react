import React from 'react';

const BlogListing = props =>{
    return (
        <div style = {style.border} >
            <h1 style = {style.nani}>{props.title}</h1>
            <p style = {style.nani}>{props.content}</p>
            <p style = {style.nani}>{props.author}</p>
           <p style = {style.nani}>{props.date}</p>
        </div>
    )
}
const style = {
    nani : {
        margin : 20,
        justifyContent : "center",
        alignItems : "center",
        display : "flex"
    },

    border :{

        margin : 20,
        border : 5
    }
}

export default BlogListing