import React from 'react';
import styled from 'styled-components';

export interface TableFooterProps {
  children?: React.ReactNode;
  backgroundColor?: string;
  disabled?: boolean;
}

const StyledTableFooter = styled.div<TableFooterProps>`
  width: 100%;
  background-color: ${(props) => (props.disabled ? '#f5f5f5' : props.backgroundColor || '#ffffff')};
  padding: 10px;
  position: absolute;
  bottom: 0;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const TableFooter: React.FC<TableFooterProps> = ({ backgroundColor, children, disabled }) => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) {
      e.currentTarget.style.cursor = 'not-allowed';
    } else {
      e.currentTarget.style.cursor = 'pointer';
    }
  };

  return (
    <StyledTableFooter
      backgroundColor={backgroundColor}
      disabled={disabled}
      onMouseMove={handleMouseMove}
    >
      <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd' }}>
        <tbody>
          <tr>
            <td style={{ textAlign: 'center' }}>
              {children}
            </td>
          </tr>
        </tbody>
      </table>
    </StyledTableFooter>
  );
};

export default TableFooter;
