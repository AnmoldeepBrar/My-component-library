import React from 'react';
import styled from 'styled-components';

export interface TableCellProps {
  children?: React.ReactNode;
  backgroundColor?: string;
  disabled?: boolean;
}

const CellContainer = styled.td<TableCellProps>`
  background-color: ${(props) => (props.disabled ? '#ccc' : props.backgroundColor || '#ffffff')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
`;

const TableCell: React.FC<TableCellProps> = ({ children, backgroundColor, disabled }) => {
  return (
    <CellContainer backgroundColor={backgroundColor} disabled={disabled}>
      {children}
    </CellContainer>
  );
};

export default TableCell;
