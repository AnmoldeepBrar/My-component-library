import React from 'react';
import styled from 'styled-components';

export interface HeroImageProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  disabled?: boolean;
}

const StyledHeroImage = styled.img<HeroImageProps>`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || 'auto'};
  filter: ${(props) => (props.disabled ? 'grayscale(100%)' : 'none')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const HeroImage: React.FC<HeroImageProps> = ({ src, alt, width, height, disabled }) => {
  return <StyledHeroImage src={src} alt={alt} width={width} height={height} disabled={disabled} />;
};

export default HeroImage;
