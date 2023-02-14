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
  width: ${(props) => props.width};
  font-weight: ${(props) => props.fontWeight};
  height: 55px;
  border-radius: 75px;
  border: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export interface CustomProps {
  color?: string;
  bgcolor?: string;
  bdcolor?: string;
  type?: string;
  value?: string;
  width?: string | number;
  fontWeight?: string | number;
}

export type ButtonProps = CustomProps;

export default Button;
