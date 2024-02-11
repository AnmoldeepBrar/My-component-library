import React, { ReactNode } from "react";

interface TableProps {
  // Props for styling
  className?: string;
  // Props for accessibility
  ariaLabel?: string;
  // Props for other attributes
  id?: string;
  style?: React.CSSProperties;
  // Children elements
  children?: ReactNode;
  // Add more props as needed
}

const Table: React.FC<TableProps> = ({ children, className, ariaLabel, id, style }) => {
  return (
    <table className={className} aria-label={ariaLabel} id={id} style={style}>
      {children}
    </table>
  );
};

export default Table;
