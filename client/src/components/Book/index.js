// import react so that it is available for JS to read
import React from "react";
// import ListItem from file
import { ListItem } from "../List";
// import Row and Col components from the rid folder in the components folder
import { Row, Col } from "../Grid";
// import style.css from within the Book folder
import "./style.css";

// create a functional component that takes in the following props as parameters: title, subtitle, authors, link, description, image, Button
function Book({ title, subtitle, authors, link, description, image, Button }) {
  // return the component
  return (
    // JSX for the component
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          {/* pass <h3> tag into title prop */}
          <h3 className="font-italic">{title}</h3>
          {/* subtitle prop and <h5> tag with "font-italic" className*/}
          {subtitle && <h5 className="font-italic">{subtitle}</h5>}
        </Col>
        <Col size="md-4">
          <div className="btn-container">
            <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={link}>
              View
            </a>
            <Button />
          </div>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          {/* paragraph tag with authors prop */}
          <p className="font-italic small">Written by {authors}</p>
        </Col>
      </Row>
      <Row>
        <Col size="12 sm-4 md-2">
          {/* img with src attribute set to image prop and alt attribute set to title prop */}
          <img className="img-thumbnail img-fluid w-100" src={image} alt={title} />
        </Col>
        <Col size="12 sm-8 md-10">
          {/* <p> tag with description prop passed in */}
          <p>{description}</p>
        </Col>
      </Row>
    </ListItem>
  );
}

export Book prop
export default Book;
