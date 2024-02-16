// Card.tsx
import React from 'react';
import styled from 'styled-components';

export interface CardProps {
  title: string;
  content: string;
  backgroundColor?: string;
  disabled?: boolean;
  onclick?: () => void; 
}

const StyledCard = styled.div<CardProps>`
  background-color: ${(props) => (props.disabled ? '#ccc' : props.backgroundColor || '#ffffff')};
  color: ${(props) => (props.disabled ? '#888888' : '#000000')};
  border: 1px solid #cccccc;
  border-radius: 5px;
  padding: 20px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${(props) => (!props.disabled ? '#f5f5f5' : '#ccc')};
  }
`;

const Card: React.FC<CardProps> = ({ title, content, backgroundColor, disabled, onclick }) => {
  return (
    <StyledCard title={title} content={content} backgroundColor={backgroundColor} disabled={disabled} onclick={onclick} >
      <h2>{title}</h2>
      <p>{content}</p>
    </StyledCard>
  );
};

export default Card;
