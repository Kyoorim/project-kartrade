import { useEffect, useState } from "react";
import Nav from "@/components/nav";
import CardBox from "@/components/cardBox";
import Heading from "@/components/heading/header";
import { CardInfo } from "@/types";
import styled from "styled-components";
import { useRouter } from "next/router";
import search from "../public/search.svg";
import Image from "next/image";

const MainBody: React.FC<{ cardInfo: CardInfo[] }> = ({ cardInfo }) => {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();
  const key = Object.keys(router.query);

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;
    if (search) {
      router.push(`/?search=${search}`);
      setSearchValue(search);
    } else setSearchValue("");
  };

  const onSelectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sortDirection = e.target.value;
    if (sortDirection === "default") {
      router.push("/");
    } else {
      router.push(`/?sort=${sortDirection}`);
    }
    // if (keyword) {
    //   console.log(router);
    // }
    // else if (keyword) {
    //   router.push(router.asPath + `/?sort=${sortDirection}`);
    // }
  };

  const isHome = Object.keys(key).length === 0;

  return (
    <>
      <Nav />
      <Wrapper>
        <SearchDiv>
          <Image src={search} alt="search" style={{ color: "red" }}></Image>
          <input
            type="text"
            name="search"
            placeholder="Search by title..."
            onChange={onSearchChange}
            // value={searchValue}
          ></input>
        </SearchDiv>
        <Select name="price" defaultValue="default" onChange={onSelectChange}>
          <option value="default">Price ($)</option>
          <option value={"price_asc"}>Price: low to high</option>
          <option value={"price_desc"}>Price: high to low</option>
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
      {cardInfo
        .filter((val) => {
          if (key.length === 0 || key[0] === "sort") return val;
          else if (
            key[0] === "search" &&
            (val.infoTitle.toLowerCase().includes(searchValue) ||
              val.infoTitle.toUpperCase().includes(searchValue))
          )
            return val;
        })
        .map((c) => (
          <CardBox key={c.id} cardInfo={c} />
        ))}
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  margin-top: 50px;
  border-bottom: 1px solid #d8d8d8;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 1.5em 0 1.5em;
`;

const SearchDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d8d8d8;

  img {
    height: 17px;
    margin-right: 5px;
  }

  input {
    padding: 1em 0 1em 4px;
    color: #646464;
    font-size: 1rem;
  }
`;

const Select = styled.select`
  display: inline-block;
  border: none;
  width: auto;
  font-size: 1rem;
  padding: 1em 0 1em 0;
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
