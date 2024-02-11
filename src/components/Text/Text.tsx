import React from "react";

export interface TextProps {
  content: string;
}

const Text = (props: TextProps) => {
  return <p>{props.content}</p>;
};

export default Text;