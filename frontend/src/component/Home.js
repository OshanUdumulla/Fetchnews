import React, { useEffect, useState } from "react";
import image1 from "../../src/images/flower.jpg";
import image2 from "../../src/images/image3.jpg";
import image3 from "../../src/images/image4.jpg";
import "./Style.css";
import passage1 from "../utils/Passage.txt"



export default function Home() {


  const [Passage, setPassage] = useState([]);


  const ViewPassage = () => {
    fetch(passage1)
      .then((data) => data.text())
      .then((res) => setPassage(res))
      .catch((error) => console.log(error.message));
  };

  useEffect(()=>{
    ViewPassage();
  })



  return (
    <div>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              id="img1"
              src={image1}
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              id="img2"
              src={image2}
              alt="Second slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              id="img3"
              src={image3}
              alt="Third slide"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      <h3>
        <div className="container">
          <p1 style={{ color: "red" }}> </p1>
        </div>
      </h3>
    </div>
  );
}
