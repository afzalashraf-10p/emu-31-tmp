import * as React from "react";

interface DummyTitleProps {
  title: string;
}

const DummyTitle = ({ title }: DummyTitleProps) => (
  <div>
    <h2>{title}</h2>
  </div>
);

export default DummyTitle;
