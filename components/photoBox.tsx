import styled from "styled-components";
import Image from "next/image";

export type photoInfoType = {
  photo: {
    id: string;
    image: any;
  };
};

const PhotoBox = ({ photo }: photoInfoType) => {
  return (
    <Wrapper>
      <Image src={photo.image} alt="photo"></Image>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 1.5em 0 1.5em 0;
  background-color: white;
  border-bottom: 1px solid #d8d8d8;
  display: flex;
  justify-content: center;
  img {
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 800px) {
      width: 325px;
      height: 325px;
    }
  }
`;

export default PhotoBox;
