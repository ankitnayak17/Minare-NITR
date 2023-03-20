import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import ReactPlayer from "react-player";
import MinareVid from "../assets/vids/download.mp4";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";

function VideoCarousel() {
  const [index, setIndex] = useState(0);
  const [isPlaying, setPlaying] = useState(false);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setPlaying(false);
  };

  const videoProperties = [
    {
      id: 1,
      src: "https://res.cloudinary.com/dlvmyc0x3/image/upload/v1679300671/84866965_871311856658770_6730225580209142915_n_n7zazv.jpg",
      src2: "https://res.cloudinary.com/dlvmyc0x3/image/upload/v1679325252/84732852_186442366033343_2469334859080864999_n_pdxajk.jpg",
      src3: "https://res.cloudinary.com/dlvmyc0x3/image/upload/v1679325501/84070430_484966422443950_4391400939061321253_n_orymrv.jpg"
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/dlvmyc0x3/image/upload/v1679325252/84732852_186442366033343_2469334859080864999_n_pdxajk.jpg",
      src2: "https://res.cloudinary.com/dlvmyc0x3/image/upload/v1679325501/84070430_484966422443950_4391400939061321253_n_orymrv.jpg",
      src3: "https://res.cloudinary.com/dlvmyc0x3/image/upload/v1679325717/274777655_100542415907953_1877114561174669634_n_wamkuk.jpg"
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dlvmyc0x3/image/upload/v1679325501/84070430_484966422443950_4391400939061321253_n_orymrv.jpg",
      src2: "https://res.cloudinary.com/dlvmyc0x3/image/upload/v1679325717/274777655_100542415907953_1877114561174669634_n_wamkuk.jpg",
      src3: "https://res.cloudinary.com/dlvmyc0x3/image/upload/v1679326206/274915490_3756806427878486_1689018875749748180_n_inn3sa.jpg"
    },
  ];

  useEffect(() => {
    setPlaying(false);
  }, [index]);

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {videoProperties.map((videoObj) => {
          return (
            <Carousel.Item key={videoObj.id}>
              <div className="reactPlayer">
                <div className="imagesCarousel">
                  <div>
                    <img src={videoObj.src}></img>
                  </div>
                  <div>
                    <img src={videoObj.src2}></img>
                  </div>
                  <div>
                    <img src={videoObj.src3}></img>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}

export default VideoCarousel;
