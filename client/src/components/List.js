import React from "react";
import ListItem from "./ListItem";

const List = (props) => (
    <ul className="list-group">
    { 
        props.articles.length > 0 ? 
        props.articles.map( article => <ListItem article={article}/>)
    : 
        <h3> Sorry, no articles to show. Try searching for something else. </h3>
    }
    </ul>
);

export default List;