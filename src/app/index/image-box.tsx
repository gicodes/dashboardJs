"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const images: string[] = [
  "https://images.unsplash.com/photo-1506794778225-cbf6c8df4c5c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1546795708-c962dc089798?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1483356256511-b48749959172?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1516724562728-afc824a36e84?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1490814525860-594e82bfd34a?q=80&w=2521&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const ImageSlider: React.FC = () => {
  const [randomImage, setRandomImage] = useState<string>("");
  // randomize the displayed image on every render
  useEffect(() => {
    const getRandomImage = () => {
      const randomIndex = Math.floor(Math.random() * images.length);
      return images[randomIndex];
    };

    setRandomImage(getRandomImage());
  }, []);

  return (
    <div className="mx-auto md:h-96 lg:h-auto img-box">
      {randomImage && (
        <Image
        className="img fixed-size"
        src={randomImage}
        alt="Randomly selected image"
        height={100}
        width={100}
      />      
      )}
    </div>
  );
};

export default ImageSlider;