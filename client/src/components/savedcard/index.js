import React from "react";

export const SavedCard = (props) => {
    return (
        <div className="col-sm-3 m-3 card">
            <img src={props.img} className="card-img-top" alt={props.title} />
            <div className="card-body">
                <h4 className="card-title">{props.title}</h4>
                <h5 className="card-title">{props.authors}</h5>
                <a href={props.infoLink} className="card-link" target="_blank" rel="noopener noreferrer">Link: {props.link}</a>
                <h6 className="card-subtitle mb-2 text-muted">{props.description}</h6>
                <button type="button" class="btn btn-primary">View</button>
                <button type="button" class="btn btn-danger" onClick={props.handleInputChange}>Delete</button>
            </div>
        </div>
    );
}