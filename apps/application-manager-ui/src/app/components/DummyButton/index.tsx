import * as React from "react";

interface DummyButtonProps {
  title: string;
  onClick?: EventHandlerFunction;
}

type EventHandlerFunction = (event: React.MouseEvent<HTMLElement>) => void;

const DummyButton = ({ title, onClick }: DummyButtonProps) => (
  <button onClick={onClick}>{title}</button>
);

export default DummyButton;
