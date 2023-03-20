import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import ReactPlayer from "react-player";
import MinareVid from "../assets/vids/download.mp4";
import "bootstrap/dist/css/bootstrap.css";

function VideoCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const videoProperties = [
    {
      id: 1,
      title: "Minare 1",
      src: "https://res.cloudinary.com/dlvmyc0x3/video/upload/v1678824530/download_kljuc9.mp4",
    },
    {
      id: 2,
      title: "Minare 2",
      src: "https://res.cloudinary.com/dlvmyc0x3/video/upload/v1678824608/download_1_mcjtwe.mp4",
    },
    {
      id: 3,
      title: "Minare 3",
      src: "https://res.cloudinary.com/dlvmyc0x3/video/upload/v1678826858/download_2_avxzxm.mp4",
    },
  ];

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {videoProperties.map((videoObj) => {
          return (
            <Carousel.Item key={videoObj.id}>
              <div className="reactPlayer">
                <ReactPlayer
                  url={videoObj.src}
                //   width="70%"
                  pip={true}
                  controls={true}
                  loop={false}
                  muted={false}
                  // playing={false}
                />
              </div>
              <Carousel.Caption>
                <h3>{videoObj.title}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}

export default VideoCarousel;
