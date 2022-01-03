import React from "react";
import "./PhotoGallery.scss";
import Popup from "reactjs-popup";
import Carousel from "nuka-carousel";

function PhotoGallery() {
  return (
    <Popup trigger={<p className="browse">here</p>} modal closeOnDocumentClick>
      <div className="popup">
        <Carousel className="carousel" zoomScale={0.2}>
          <div>
            <img
              src={require("../../assets/dead-horse.JPEG")}
              alt="Dead Horse Point State Park, Utah"
              width="850"
              height="500"
              className="photo"
            />
            <figcaption>Dead Horse Point State Park, Utah</figcaption>
          </div>
          <div>
            <img
              src={require("../../assets/black-canyon.jpg")}
              alt="Sunset at Black Canyon of the Gunnison, Colorado"
              width="850"
              height="500"
              className="photo"
            />
            <figcaption>
              Sunset at Black Canyon of the Gunnison, Colorado
            </figcaption>
          </div>
          <div>
            <img
              src={require("../../assets/cactus.jpg")}
              alt="Saguaro National Park, Arizona"
              width="850"
              height="500"
              className="photo"
            />
            <figcaption>Saguaro National Park, Arizona</figcaption>
          </div>
          <div>
            <img
              src={require("../../assets/las-cruces.jpeg")}
              alt="Spring in Organ National Mounemnt, New Mexico"
              width="850"
              height="500"
              className="photo"
            />
            <figcaption>
              Spring in Organ National Monument, New Mexico
            </figcaption>
          </div>
          <div>
            <img
              src={require("../../assets/american-lakes.jpg")}
              alt="American Lakes Trail, Colorado"
              width="850"
              height="500"
              className="photo"
            />
            <figcaption>American Lakes Trail, Colorado</figcaption>
          </div>
          <div>
            <img
              src={require("../../assets/butte.jpeg")}
              alt="Kebler Pass near Crested Butte, Colorado"
              width="850"
              height="500"
              className="photo"
            />
            <figcaption>Kebler Pass near Crested Butte, Colorado</figcaption>
          </div>
          <div>
            <img
              src={require("../../assets/colorado-national.jpeg")}
              alt="Colorado National Monument"
              width="850"
              height="500"
              className="photo"
            />
            <figcaption>Colorado National Monument</figcaption>
          </div>

          <div>
            <img
              src={require("../../assets/white-sands.jpg")}
              alt="White Sands National Monument, New Mexico"
              width="850"
              height="500"
              className="photo"
            />
            <figcaption>White Sands National Monument, New Mexico</figcaption>
          </div>

          <div>
            <img
              src={require("../../assets/dallas-divide.jpeg")}
              alt="The Dallas Divide on the road to Telluride, Colorado"
              width="850"
              height="500"
              className="photo"
            />
            <figcaption>
              The Dallas Divide on the road to Telluride, Colorado
            </figcaption>
          </div>

          <div>
            <img
              src={require("../../assets/plaza-blanca.jpg")}
              alt="Plaza Blanca, New Mexico"
              width="850"
              height="500"
              className="photo"
            />
            <figcaption>Plaza Blanca, New Mexico</figcaption>
          </div>
          <div>
            <img
              src={require("../../assets/blue-lake.jpg")}
              alt="Blue Lakes Trail, Colorado"
              width="850"
              height="500"
              className="photo"
            />
            <figcaption>Blue Lakes Trail, Colorado</figcaption>
          </div>
          <div>
            <img
              src={require("../../assets/first-blue.jpg")}
              alt="Blue Lake near Telluride, Colorado"
              width="850"
              height="500"
              className="photo"
            />
            <figcaption>Blue Lake near Telluride, Colorado</figcaption>
          </div>

          <div>
            <img
              src={require("../../assets/arches.jpg")}
              alt="Arches National Park, Utah"
              width="850"
              height="500"
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
