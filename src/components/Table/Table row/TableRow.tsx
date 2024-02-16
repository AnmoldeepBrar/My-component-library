import React from 'react';
import styled from 'styled-components';

export interface TableRowProps {
  children?: React.ReactNode;
  backgroundColor?: string;
  disabled?: boolean;
}

const RowContainer = styled.tr<TableRowProps>`
  background-color: ${(props) => (props.disabled ? '#ccc' : props.backgroundColor || '#ffffff')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
`;

const TableCell = styled.td`
  padding: 10px;
`;


const TableRow: React.FC<TableRowProps> = ({ children, backgroundColor, disabled }) => {
  return (
    <RowContainer backgroundColor={backgroundColor} disabled={disabled}>
    <TableCell>Cell 1</TableCell>
    <TableCell>Cell 2</TableCell>
    <TableCell>Cell 3</TableCell>
  </RowContainer>
  );
};

export default TableRow;
