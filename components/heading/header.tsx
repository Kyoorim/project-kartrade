import React from "react";
import styled from "styled-components";
import { variant, space } from "styled-system";

const variants = {
  1: {
    fontWeight: "bold",
    fontSize: "60px",
  },
  2: {
    fontWeight: "bold",
    fontSize: "35px",
  },
  3: {
    fontWeight: "bold",
    fontSize: "28px",
  },
};

const HeadingBase = ({ level, as: Component = `h${level}`, ...props }) => (
  <Component {...props} />
);

const Heading = styled(HeadingBase)(
  {
    margin: 0,
  },
  variant({
    variants,
    prop: "level",
  }),
  space
);

export default Heading;
