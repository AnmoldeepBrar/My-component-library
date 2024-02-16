// Card.types.tsx
import React from 'react';

export interface CardProps {
  title: string;
  content: string;
  backgroundColor?: string;
  disabled?: boolean;
}
