import React from "react";

interface Props {
  children: string | JSX.Element | JSX.Element[];
}

export default function Test({ children }: Props) {
  return (
    <div>
      <div>Test import component</div>
      {children}
    </div>
  );
}
