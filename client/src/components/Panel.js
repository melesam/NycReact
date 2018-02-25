import React from "react";

const Panel = (props) => (
    <div>
        <div className="panel panel-default">
            <div className="panel-heading">
                <h3 className="panel-title">{props.title}</h3>
            </div>
            <div className="panel-body">
                This is results body
            </div>
        </div>
    </div>
);

export default Panel;

