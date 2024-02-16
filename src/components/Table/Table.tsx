import React from 'react';
import styled from 'styled-components';

export interface TableProps {
  data: any[][];
  backgroundColor?: string;
  color?: string;
  disabled?: boolean;
}

const StyledTable = styled.table<Pick<TableProps, 'backgroundColor' | 'color' | 'disabled'>>`
  width: 100%;
  border-collapse: collapse;
  background-color: ${(props) => (props.disabled ? '#ccc' : props.backgroundColor || 'transparent')};
  color: ${(props) => props.color || '#000000'};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')}; 
`;

const Table: React.FC<TableProps> = ({ data, backgroundColor, color, disabled }) => {
  return (
    <StyledTable backgroundColor={backgroundColor} color={color} disabled={disabled}>
      <thead>
        <tr>
          {data.length > 0 &&
            data[0].map((header: any, index: number) => (
              <th key={index}>{header}</th>
            ))}
        </tr>
      </thead>
      <tbody>
        {data.slice(1).map((row: any[], rowIndex: number) => (
          <tr key={rowIndex}>
            {row.map((cell: any, cellIndex: number) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
