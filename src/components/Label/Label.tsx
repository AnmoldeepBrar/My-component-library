import React from "react";
import styled from "styled-components";

export interface LabelProps {
  text: string;
  backgroundColor?: string;
  color?: string;
  disabled?: boolean;
}

const StyledLabel = styled.label<
  Pick<LabelProps, "backgroundColor" | "color" | "disabled">
>`
  display: block;
  background-color: ${(props) =>
    props.disabled ? "#ccc" : props.backgroundColor || "transparent"};
  color: ${(props) => props.color || "#000000"};
  padding: 10px;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const Label: React.FC<LabelProps> = ({
  text,
  backgroundColor,
  color,
  disabled,
}) => {
  return (
    <StyledLabel
      backgroundColor={backgroundColor}
      color={color}
      disabled={disabled}
    >
      {text}
    </StyledLabel>
  );
};

export default Label;
