import React from 'react';
import styled from 'styled-components';

export interface TextProps {
  content: string;
  backgroundColor?: string;
  color?: string;
  disabled?: boolean;
}

const StyledText = styled.text<Pick<TextProps, 'backgroundColor' | 'color' | 'disabled'>>`
  color: ${(props) => (props.disabled ? '#888888' : props.color || '#000000')};
  background-color: ${(props) => (props.disabled ? '#ccc' : props.backgroundColor || 'transparent')};
  padding: 10px;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
`;

const Text: React.FC<TextProps> = ({ content, backgroundColor, color, disabled }) => {
  return <StyledText backgroundColor={backgroundColor} color={color} disabled={disabled}>
            {content}
          </StyledText>;
};

export default Text;
