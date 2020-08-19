import React from "react";

export const SavedCard = (props) => {
    return (
        <div className="col-md-5 m-3 card">
            <img src={props.img} className="card-img-top" alt={props.title} />
            <div className="card-body">
                <h4 className="card-title">{props.title}</h4>
                <h5 className="card-title">{props.authors}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.description}</h6>
                <a href={props.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View</a>
                <button type="button" className="btn btn-danger" onClick={props.handleDelete}>Delete</button>
            </div>
        </div>
    );
}