import React from "react";

function StudentListItem({ name }) {
    return <>
    <div className="card">
        <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
                <p>₱ 35.00</p>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <input type="text"/>
            <a href="#" className="btn btn-primary">Add to cart</a>
          </div>
      </div>
    </>
}

export default StudentListItem;