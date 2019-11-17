// import react
import React from "react";

// Card component that has icon, title, and children props passed in
function Card({ icon, title, children }) {
  return (
    <div className="card mt-4">
      <div className="card-header">
        <h3>
          <strong>
            {/* <strong> aka bold <i> tag with icon prop passed in as class name followed by the title prop*/}
            <i className={`fa fa-${icon}`} aria-hidden="true" /> {title}
          </strong>
        </h3>
      </div>
      {/* pass in children prop as card body to populate the bod of the card */}
      <div className="card-body">{children}</div>
    </div>
  );
}

//export Card component
export default Card;
