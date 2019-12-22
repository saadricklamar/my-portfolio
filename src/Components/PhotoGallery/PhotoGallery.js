import React from "react";
import "./PhotoGallery.scss";
import Popup from "reactjs-popup";

function PhotoGallery() {
  return (
    <Popup
      trigger={<button className="browse"> Browse My Photograpy</button>}
      modal
      closeOnDocumentClick
    >
      <article className="popup">
        <img
          src={require("../../assets/dino.jpeg")}
          alt="Dinosaur National Monument"
          width="600"
          height="400"
          className="nature"
        />
        <figcaption>
          Echo Park at Dinosaur National Monument, Colorado
        </figcaption>
      </article>
    </Popup>
  );
}

export default PhotoGallery;
