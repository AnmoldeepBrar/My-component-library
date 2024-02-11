import React, { ReactNode } from "react";

interface TableFooterProps {
  children: ReactNode;
}

const TableFooter: React.FC<TableFooterProps> = ({ children }) => {
  return <tfoot>{children}</tfoot>;
};

export default TableFooter;