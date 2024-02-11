import React, { ReactNode } from "react";

interface TableHeaderProps {
  children: ReactNode;
}

const TableHeader: React.FC<TableHeaderProps> = ({ children }) => {
  return <thead>{children}</thead>;
};

export default TableHeader;