import React from "react";
import Panel from "../components/Panel";
import List from "../components/List";

const SavedArticles = (props) => (
    <Panel name={"Saved Articles"}>
        <List articles={props.savedArticles}/>
    </Panel>
);

export default SavedArticles;
