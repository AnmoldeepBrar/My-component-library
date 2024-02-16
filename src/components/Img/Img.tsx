import React from 'react';
import styled from 'styled-components';

export interface ImgProps {
  src: string;
  alt?: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  disabled?: boolean;
}

const StyledImg = styled.img<ImgProps>`
  width: ${(props) => props.width || '50%'};
  height: ${(props) => props.height || 'auto'};
  background-color: ${(props) => (props.disabled ? '#ccc' : props.backgroundColor || 'transparent')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const Img: React.FC<ImgProps> = ({ src, alt, width, height, backgroundColor, disabled }) => {
  return <StyledImg src={src} alt={alt} width={width} height={height} backgroundColor={backgroundColor} disabled={disabled} />;
};

export default Img;
