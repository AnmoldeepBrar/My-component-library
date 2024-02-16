import React from 'react';
import styled from 'styled-components';

export interface RadioButtonProps {
  label: string;
  backgroundColor?: string;
  color?: string;
  disabled?: boolean;
}

const StyledRadioButton = styled.input<RadioButtonProps>`
  appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid ${(props) => (props.disabled ? '#ccc' : props.backgroundColor || '#000000')};
  background-color: ${(props) => (props.checked ? props.backgroundColor || '#000000' : 'transparent')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  margin-right: 8px;

  &:checked {
    background-color: ${(props) => props.backgroundColor || '#000000'};
  }
`;

const RadioButtonLabel = styled.label`
  display: flex;
  align-items: center;
`;

const RadioButton: React.FC<RadioButtonProps & React.InputHTMLAttributes<HTMLInputElement>> = ({
  label,
  backgroundColor,
  color,
  disabled,
  ...rest
}) => {
  return (
    <RadioButtonLabel>
      <StyledRadioButton
        type="radio"
        label={label}
        backgroundColor={backgroundColor}
        color={color}
        disabled={disabled}
        {...rest}
      />
      {label}
    </RadioButtonLabel>
  );
};

export default RadioButton;
