import styled from "styled-components";
import { FCC } from "@/types";

const Button: FCC<ButtonProps> = ({ onClick, children, type, ...props }) => {
  return (
    <Wrapper type={type} {...props} onClick={onClick}>
      {children}
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
  :hover {
    cursor: pointer;
  }
`;

export interface CustomProps {
  color?: string;
  bgcolor?: string;
  bdcolor?: string;
  type?: "button" | "submit";
  value?: string;
  width?: string | number;
  fontWeight?: string | number;
  onClick?: (event: any) => Promise<void>;
  children?: React.ReactNode | React.ReactNode[];
  name?: string;
  itemId?: number;
}

export type ButtonProps = CustomProps;

export default Button;
