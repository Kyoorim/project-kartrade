import React, { useState } from "react";
import CardBox from "@/components/cardBox";
import Heading from "@/components/heading/header";
import {CardDetailInfo, CardInfo} from "@/types";
import styled from "styled-components";
import {useRouter} from "next/router";

const MainBody: React.FC<{cardInfo: CardInfo[]}> = ({cardInfo}) => {
  const router = useRouter();
  const sort = router.query;

  const onSelectChange = (e) => {
    const sortDirection = e.target.value;
    if (sortDirection === 'default') {
      router.push("/");
    } else {
      router.push(`/?sort=${sortDirection}`);
    }
  };

  const isHome = Object.keys(sort).length === 0;

  return (
    <>
      <Wrapper>
        <Select name="price" defaultValue="default" onChange={onSelectChange}>
          <option value="default">Price ($)</option>
          <option value={'price_asc'}>Price: low to high</option>
          <option value={'price_desc'}>Price: high to low</option>
        </Select>
      </Wrapper>
      {isHome && (
        <HomeImage>
          <ImageBox>
            <Heading level={2} color="white" px="20px">
              We are creative traders
            </Heading>
            <p>
              Sell, Trade, Buy all Kpop photocards across the World. We are here
              to enable K-Pop fans to instantly trade cards like never before
            </p>
          </ImageBox>
        </HomeImage>
      )}
      {cardInfo.map((c) => (
        <CardBox key={c.id} el={c} />
      ))}
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 50px;
  border-bottom: 1px solid #d8d8d8;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1em 1.5em 1em 1.5em;
`;

const Select = styled.select`
  border: none;
  width: auto;
  &:focus {
    outline: none;
  }
`;

const HomeImage = styled.div`
  height: 470px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #d8d8d8;
`;

const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 370px;
  height: 420px;
  background-image: url("/mainImage.svg");
  background-repeat: no-repeat;
  background-size: cover;

  @media only screen and (max-width: 800px) {
    width: 325px;
    height: 420px;
  }

  p {
    color: white;
    padding: 0px 20px 25px 20px;
  }
`;

export default MainBody;
