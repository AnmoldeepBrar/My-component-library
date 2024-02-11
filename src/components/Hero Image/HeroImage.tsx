import React from "react";

export interface HeroImageProps {
  src: string;
  alt: string;
}

const HeroImage: React.FC<HeroImageProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};

export default HeroImage;