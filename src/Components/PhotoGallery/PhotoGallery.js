import React from "react";
import "./PhotoGallery.scss";
import Popup from "reactjs-popup";
import Carousel from "nuka-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";

function PhotoGallery() {
  return (
    <Popup
      trigger={<FontAwesomeIcon icon={faCameraRetro} className="browse" />}
      modal
      closeOnDocumentClick
    >
      <div className="popup">
        <Carousel className="carousel" zoomScale={0.2}>
          <div>
            <img
              src={require("../../assets/fall.jpeg")}
              alt="Fall in Grandby, Colorado"
              width="580"
              height="400"
              className="photo"
            />
            <figcaption>Fall in Grandby, Colorado</figcaption>
          </div>
          <div>
            <img
              src={require("../../assets/dino.jpeg")}
              alt="Dinosaur National Monument"
              width="580"
              height="400"
              className="photo"
            />
            <figcaption>
              Echo Park at Dinosaur National Monument, Colorado
            </figcaption>
          </div>
          <div>
            <img
              src={require("../../assets/butte.jpeg")}
              alt="Kebler Pass near Crested Butte, Colorado"
              width="580"
              height="400"
              className="photo"
            />
            <figcaption>Kebler Pass near Crested Butte, Colorado</figcaption>
          </div>
          <div>
            <img
              src={require("../../assets/black-canyon.jpg")}
              alt="Sunset at Black Canyon of the Gunnison, Colorado"
              width="580"
              height="400"
              className="photo"
            />
            <figcaption>
              Sunset at Black Canyon of the Gunnison, Colorado
            </figcaption>
          </div>
          <div>
            <img
              src={require("../../assets/white-sands.jpg")}
              alt="White Sands National Monument, New Mexico"
              width="580"
              height="400"
              className="photo"
            />
            <figcaption>White Sands National Monument, New Mexico</figcaption>
          </div>
          <div>
            <img
              src={require("../../assets/clear-creek.jpeg")}
              alt="Clear Creek Falls, Colorado"
              width="580"
              height="400"
              className="photo"
            />
            <figcaption>Clear Creek Falls, Colorado</figcaption>
          </div>
          <div>
            <img
              src={require("../../assets/dead-horse.jpg")}
              alt="Dead Horse Point State Park, Utah"
              width="580"
              height="400"
              className="photo"
            />
            <figcaption>Dead Horse Point State Park, Utah</figcaption>
          </div>
          <div>
            <img
              src={require("../../assets/dallas-divide.jpeg")}
              alt="The Dallas Divide on the road to Telluride, Colorado"
              width="580"
              height="400"
              className="photo"
            />
            <figcaption>
              The Dallas Divide on the road to Telluride, Colorado
            </figcaption>
          </div>
          <div>
            <img
              src={require("../../assets/paonia.jpeg")}
              alt="Paonia River Park in Paonia, Colorado"
              width="580"
              height="400"
              className="photo"
            />
            <figcaption>Paonia River Park in Paonia, Colorado</figcaption>
          </div>
          <div>
            <img
              src={require("../../assets/plaza-blanca.jpg")}
              alt="Plaza Blanca, New Mexico"
              width="580"
              height="400"
              className="photo"
            />
            <figcaption>Plaza Blanca, New Mexico</figcaption>
          </div>
          <div>
            <img
              src={require("../../assets/blue-lake.jpg")}
              alt="Blue Lakes Trail, Colorado"
              width="580"
              height="400"
              className="photo"
            />
            <figcaption>Blue Lakes Trail, Colorado</figcaption>
          </div>
          <div>
            <img
              src={require("../../assets/first-blue.jpg")}
              alt="Blue Lake near Telluride, Colorado"
              width="580"
              height="400"
              className="photo"
            />
            <figcaption>Blue Lake near Telluride, Colorado</figcaption>
          </div>
          <div>
            <img
              src={require("../../assets/state-forest.jpg")}
              alt="State Forest State Park, Colorado"
              width="580"
              height="400"
              className="photo"
            />
            <figcaption>State Forest State Park, Colorado</figcaption>
          </div>
          <div>
            <img
              src={require("../../assets/telluride.jpg")}
              alt="Telluride Colorado"
              width="580"
              height="400"
              className="photo"
            />
            <figcaption>Telluride, Colorado</figcaption>
          </div>
          <div>
            <img
              src={require("../../assets/arches.jpg")}
              alt="Arches National Park, Utah"
              width="580"
              height="400"
              className="photo"
            />
            <figcaption>Arches National Park, Utah</figcaption>
          </div>
        </Carousel>
      </div>
    </Popup>
  );
}

export default PhotoGallery;
