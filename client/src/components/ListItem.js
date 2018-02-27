import React from "react";

const ListItem = (props) => (

    <li className="list-group-item">
    { 
       props.article.snippet
    }
    </li>
);

export default ListItem;