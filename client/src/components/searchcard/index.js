import React from "react";

export const Card = (props) => {
    return (
        <div className="col-sm-3 m-3 card">
            <img src={props.volumeInfo.imageLinks.smallThumbnail} className="card-img-top" alt={props.title} />
            <div className="card-body">
                <h4 className="card-title">{props.volumeInfo.title}</h4>
                <h5 className="card-title">{props.volumeInfo.authors}</h5>
                <a href={props.volumeInfo.infoLink} className="card-link" target="_blank" rel="noopener noreferrer">Link: {props.link}</a>
                <h6 className="card-subtitle mb-2 text-muted">{props.volumeInfo.description}</h6>
                <button type="button" class="btn btn-primary" onClick={props.saveBook}>Save</button>
                <button type="button" class="btn btn-primary">View</button>
            </div>
        </div>
    );
}
