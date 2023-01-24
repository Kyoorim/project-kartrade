import React from "react";
import styled from "styled-components";
import { variant, space, color, flexbox, layout } from "styled-system";

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
  4: {
    fontWeight: "bold",
    fontSize: "20px",
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
  space,
  color,
  flexbox,
  layout
);

export default Heading;
