// TableHeader.tsx
import React from 'react';
import styled from 'styled-components';

interface TableHeaderProps {
  backgroundColor?: string;
  disabled?: boolean;
}

const StyledTableHeader = styled.th<TableHeaderProps>`
  background-color: ${(props) => (props.disabled ? '#f5f5f5' : props.backgroundColor || '#ffffff')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  color: ${(props) => (props.disabled ? '#888888' : '#000000')};
  padding: 20px;
  padding-right: 10px;
  padding-top: 10px;
  width: 100%; /* Ensure the header spans the entire width */
  position: absolute; /* Position the header absolutely */
  top: 0; /* Align the header to the top */
  left: 0; /* Align the header to the left */
  /* Add other styles as needed */
  z-index: 1; /* Ensure the header is above other table elements */
`;

const TableHeader: React.FC<TableHeaderProps> = ({ children, backgroundColor, disabled }) => {
  return (
      <StyledTableHeader backgroundColor={backgroundColor} disabled={disabled}>
        {children}
        {disabled && (
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            cursor: 'not-allowed',
            backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAQElEQVR42mL8//8/AxSAnMDhIHUYwOAAMnAEDwnyE/wX8eVRkUQUDlygAG5RrLsXhWKDQAAAABJRU5ErkJggg==")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            pointerEvents: 'none', // Ensure that the pseudo-element does not block mouse events
          }}
        />
      )}
    </StyledTableHeader>
  );
};

export default TableHeader;
