import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import logo from "../public/logo.svg";
import brand from "../public/brand.svg";
import { useRouter } from "next/router";
import search from "../public/search.svg";
import account from "../public/account.svg";

const Nav = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isOpened, setIsOpened] = useState(false);
  const router = useRouter();

  const handleSearchClick = () => {
    setIsOpened(!isOpened);
  };

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;
    setSearchValue(search);
  };

  const keyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSearchValue("");
      setIsOpened(false);

      router.push(`/?search=${searchValue}`);
    }
  };

  return (
    <>
      <Wrapper>
        <LogoContainer onClick={() => router.push("/")}>
          <Image src={logo} alt="logo" style={{ height: "29px" }}></Image>
          <Image src={brand} alt="brand" style={{ height: "15.4px" }}></Image>
        </LogoContainer>
        <MenuContainer>
          <Image
            src={account}
            alt="account"
            style={{ cursor: "pointer", width: "25px" }}
            onClick={() => router.push("/auth")}
          ></Image>
          <MenuBar></MenuBar>
        </MenuContainer>
        <SearchBar className={isOpened ? "show-menu" : "hide-menu"}>
          <Image src={search} alt="search"></Image>
          <input
            type="text"
            name="search"
            placeholder="Search by title..."
            onChange={onSearchChange}
            value={searchValue}
            onKeyPress={keyPressHandler}
          ></input>
        </SearchBar>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 420px;
  height: 50px;
  border-bottom: 1px solid #d8d8d8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 1.5em 1em 1.5em;
  position: fixed;
  background-color: white;
`;

const LogoContainer = styled.section`
  width: 141px;
  height: 29px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const MenuContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const MenuBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1.6px solid;
  border-bottom: 1.6px solid;
  height: 12px;
  width: 17px;
  margin-left: 25px;

`;

const SearchBar = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  background-color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 20px 0 20px;

  img {
    margin-right: 10px;
  }

  &.show-menu {
    width: 100%;
    height: 60px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px;
  }

  &.hide-menu {
    display: none;
  }
`;

export default Nav;
