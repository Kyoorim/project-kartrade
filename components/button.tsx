import styled from "styled-components";
import { FCC } from "@/types";

const Button: FCC<ButtonProps> = ({ type, ...props }) => {
  return (
    <Wrapper type={type} {...props}>
      {props.children}
    </Wrapper>
  );
};

const Wrapper = styled.div<CustomProps>`
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgcolor};
  border-color: ${(props) => props.bdcolor};
  width: 152.6px;
  height: 55px;
  border-radius: 75px;
  border: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 500;
`;

export interface CustomProps {
  color?: string;
  bgcolor?: string;
  bdcolor?: string;
  type?: string;
}

export type ButtonProps = CustomProps;

export default Button;
