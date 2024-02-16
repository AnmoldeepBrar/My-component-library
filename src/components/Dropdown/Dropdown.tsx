import React from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';

export interface DropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
  backgroundColor?: string;
  disabled?: boolean;
}

const StyledDropdown = styled.select<DropdownProps>`
  padding: 10px;
  background-color: ${(props) => (props.disabled ? '#ccc' : props.backgroundColor || '#ffffff')};
  color: ${(props) => (props.disabled ? '#888888' : '#000000')};
  border: 1px solid #cccccc;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const Dropdown: React.FC<DropdownProps> = ({ options, backgroundColor, disabled, ...rest }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    action('Dropdown Clicked')(event.target.value);
  };

  return (
    <StyledDropdown {...rest} backgroundColor={backgroundColor} disabled={disabled} onChange={handleChange} options={options}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </StyledDropdown>
  );
};

export default Dropdown;
