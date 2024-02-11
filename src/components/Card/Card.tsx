import React from "react";

export interface CardProps {
  title: string;
  content: string;
}

const Card = (props: CardProps) => {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
};

export default Card;