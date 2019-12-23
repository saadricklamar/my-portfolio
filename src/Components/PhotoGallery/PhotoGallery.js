import React from "react";
import "./PhotoGallery.scss";
import Popup from "reactjs-popup";
import Carousel from "nuka-carousel";

function PhotoGallery() {
  return (
    <Popup
      trigger={<button className="browse"> Browse My Photograpy</button>}
      modal
      closeOnDocumentClick
    >
      <div className="popup"></div>
    </Popup>
  );
}

export default PhotoGallery;
