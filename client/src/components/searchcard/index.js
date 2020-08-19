import React from "react";

export const SearchCard = (props) => {
    return (
        <div className="col-md-5 m-3 card">
            <img src={props.volumeInfo.imageLinks.thumbnail} className="card-img-top" alt={props.title} />
            <div className="card-body">
                <h4 className="card-title">{props.volumeInfo.title}</h4>
                <h5 className="card-title">{props.volumeInfo.authors}</h5>
                {/* <a href={props.volumeInfo.infoLink} className="card-link" target="_blank">Link: {props.link}</a> */}
                <h6 className="card-subtitle mb-2 text-muted">{props.volumeInfo.description}</h6>
                <button type="button" className="btn btn-primary" onClick={props.saveBook}>Save</button>
                {/* <button href={props.volumeInfo} type="button" className="btn btn-primary" target="_blank" rel="noopener noreferrer" onClick={props.viewClick} >View</button> */}
                <a href={props.volumeInfo.infoLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View</a>
            </div>
        </div>
    );
}
