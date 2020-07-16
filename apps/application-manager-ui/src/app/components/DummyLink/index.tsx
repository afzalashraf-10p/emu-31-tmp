import * as React from "react";
import { Link } from "react-router-dom";

interface DummyLinkProps {
  title: string;
  linkTo: string;
}

const DummyLink = ({ title, linkTo }: DummyLinkProps) => (
  <Link to={linkTo}>{title}</Link>
);

export default DummyLink;
