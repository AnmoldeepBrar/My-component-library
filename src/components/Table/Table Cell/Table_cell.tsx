import React, { ReactNode } from "react";

interface TableCellProps {
  children: ReactNode;
}

const TableCell: React.FC<TableCellProps> = ({ children }) => {
  return <td>{children}</td>;
};

export default TableCell;