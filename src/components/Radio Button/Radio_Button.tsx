import React from "react";

export interface RadioButtonProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({ label, checked, onChange }) => {
  return (
    <label>
      <input type="radio" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      {label}
    </label>
  );
};

export default RadioButton;