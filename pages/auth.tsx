import Button from "@/components/button";
import Nav from "@/components/nav";
import React, { useState } from "react";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import Heading from "@/components/heading/header";
import { authService } from "@/firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import MyPage from "@/components/myPage";
import { useUser } from "../store/userReducer";

const Auth = () => {
  const { isLoggedIn } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);

  const onChange = (event: { target: { name: string; value: string } }) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      let data;
      const auth = getAuth();
      if (newAccount) {
        //create account
        data = await createUserWithEmailAndPassword(auth, email, password);
        alert("You have successfully signed up");
        setEmail("");
        setPassword("");
      } else {
        //login
        data = await signInWithEmailAndPassword(auth, email, password);
        alert("You have successfully signed in");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      alert(error);
    }
  };

  const toggleAccount = () => setNewAccount((prev) => !prev);

  const onSocialClick = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(authService, provider);
    alert("You have successfully signed in");
  };

  return (
    <BgWrapper>
      <Main>
        <Nav />
        <AuthContainer>
          {isLoggedIn ? (
            <MyPage />
          ) : (
            <>
              <AuthForm>
                <Heading level={3} mt="50px">
                  {newAccount ? "Sign Up" : "Sign In"}
                </Heading>
                <InputContainer>
                  <input
                    name="email"
                    type="email"
                    placeholder="EMAIL"
                    required
                    value={email}
                    onChange={onChange}
                  />
                  <input
                    name="password"
                    type="password"
                    placeholder="PASSWORD"
                    required
                    value={password}
                    onChange={onChange}
                  />
                </InputContainer>
                <Button
                  bgcolor="black"
                  color="white"
                  width="325px"
                  fontWeight={500}
                  onClick={onSubmit}
                >
                  {newAccount ? "SIGN UP" : "SIGN IN"}
                </Button>
              </AuthForm>
              <MidContainer>
                <div></div>
                <span>OR</span>
                <div></div>
              </MidContainer>
              <Button
                name="google"
                width="325px"
                fontWeight={500}
                onClick={onSocialClick}
              >
                <FcGoogle />
                Continue with Google
              </Button>
              <ToggleMenu onClick={toggleAccount}>
                {newAccount ? "SIGN IN" : "SIGN UP"}
              </ToggleMenu>
            </>
          )}
        </AuthContainer>
      </Main>
    </BgWrapper>
  );
};

const BgWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
  box-sizing: border-box;
  background-color: #e2e1e1;
  display: flex;
  flex-direction: column;
  background-size: 400px;
  background-image: url("/logo.svg");
  background-repeat: no-repeat;
  background-position-x: 15%;
  background-position-y: center;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Main = styled.section`
  background-color: white;
  position: relative;
  right: 0;
  width: 100%;
  max-width: 420px;
  height: 100vh;
  margin: 0 auto;

  @media only screen and (min-width: 800px) {
    position: relative;
    width: 100%;
    max-width: 420px;
    margin: 0 0 0 calc(50% - 1px);
    zoom: 1.25;
  }
`;

const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 100%; */

  svg {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`;

const AuthForm = styled.div`
  margin-top: 50px;
  padding: 0 25px 0 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const InputContainer = styled.div`
  margin-top: 65px;
  margin-bottom: 35px;
  input {
    width: 100%;
    border-bottom: 1px solid;
    border-color: #d8d8d8;
    padding: 10px 0 10px 0;
    ::placeholder {
      color: #d8d8d8;
      font-size: 15px;
    }
  }
`;

const MidContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0 40px 0;
  width: 100%;
  span {
    padding: 0 30px 0 30px;
    color: #777777;
    font-size: 15px;
  }
  div {
    height: 1px;
    width: 28%;
    background-color: #d8d8d8;
  }
`;

const ToggleMenu = styled.span`
  margin-top: 30px;
  font-size: 13px;
  text-decoration: underline;
  :hover {
    cursor: pointer;
  }
`;

export default Auth;
