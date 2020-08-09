import React from "react";

export const Card = (props) => {
    return (
        <div className="col-sm-3 m-3 card">
            <img src={props.image} className="card-img-top" alt={props.title} />
            <div className="card-body">
                <h4 className="card-title">{props.title}</h4>
                <h5 className="card-title">{props.authors}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.description}</h6>
                <a href={props.link} className="card-link" target="_blank" rel="noopener noreferrer">Link: {props.link}</a>
            </div>
        </div>
    );
}
