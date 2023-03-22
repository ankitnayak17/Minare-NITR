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
      src: "https://res.cloudinary.com/dlvmyc0x3/image/upload/v1679325501/84070430_484966422443950_4391400939061321253_n_orymrv.jpg",
      src2: "https://res.cloudinary.com/dlvmyc0x3/image/upload/v1679334571/placemantra1.c6c4ca23402847dc6710_yizwnd.jpg",
      src3: "https://res.cloudinary.com/dlvmyc0x3/image/upload/v1679334986/Techpap.bc6bec5c92613b07d05b_ofegjm.jpg"
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/dlvmyc0x3/image/upload/v1679334668/workshop.a9f3fade99fc0cbe60ae_fcauer.jpg",
      src2: "https://res.cloudinary.com/dlvmyc0x3/image/upload/v1679334667/minquiz.9b28a020e5e721f8f258_ain06j.jpg",
      src3: "https://res.cloudinary.com/dlvmyc0x3/image/upload/v1679325717/274777655_100542415907953_1877114561174669634_n_wamkuk.jpg"
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dlvmyc0x3/image/upload/v1679334571/placemantra1.c6c4ca23402847dc6710_yizwnd.jpg",
      src2: "https://res.cloudinary.com/dlvmyc0x3/image/upload/v1679325717/274777655_100542415907953_1877114561174669634_n_wamkuk.jpg",
      src3: "https://res.cloudinary.com/dlvmyc0x3/image/upload/v1679334667/minquiz.9b28a020e5e721f8f258_ain06j.jpg"
    },
    {
      id: 4,
      src3: "https://res.cloudinary.com/dlvmyc0x3/image/upload/v1679334571/placemantra1.c6c4ca23402847dc6710_yizwnd.jpg",
      src2: "https://res.cloudinary.com/dlvmyc0x3/image/upload/v1679325717/274777655_100542415907953_1877114561174669634_n_wamkuk.jpg",
      src: "https://res.cloudinary.com/dlvmyc0x3/image/upload/v1679334667/minquiz.9b28a020e5e721f8f258_ain06j.jpg"
    }
  ];

  useEffect(() => {
    setPlaying(false);
  }, [index]);

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect} indicators={false} pause="hover">
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
