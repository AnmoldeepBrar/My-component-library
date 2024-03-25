// button.types.tsx
import React from "react";
import styled from "styled-components";

interface ButtonProps {
  text: string;
  backgroundColor?: string;
  disabled?: boolean;
}

const StyledButton = styled.button<Omit<ButtonProps, "text">>`
  padding: 10px 20px;
  background-color: ${(props) =>
    props.disabled ? "#ccc" : props.backgroundColor || "#007bff"};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (!props.disabled ? "#0056b3" : "#ccc")};
  }
`;

const Button: React.FC<ButtonProps> = ({ text, backgroundColor, disabled }) => {
  return (
    <StyledButton backgroundColor={backgroundColor} disabled={disabled}>
      {text}
    </StyledButton>
  );
};

export default Button;
