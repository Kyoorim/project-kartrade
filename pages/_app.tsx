import React, { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { hotjar } from "react-hotjar";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { User as FirebaseUser } from "firebase/auth";

type User = Pick<FirebaseUser, "uid" | "displayName">;

const App = ({ Component, pageProps }: AppProps) => {
  const [init, setInit] = useState<Boolean>(false);
  const [userObj, setUserObj] = useState<User | null>(null);
  const isLoggedIn = React.useMemo(() => userObj !== null, [userObj]);

  console.log(isLoggedIn);

  useEffect(() => {
    hotjar.initialize(3341604, 6);
    const auth = getAuth();

    return onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
        });
      } else {
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? (
        <Component {...pageProps} isLoggedIn={isLoggedIn} userObj={userObj} />
      ) : (
        "Loading..."
      )}
    </>
  );
};

export default App;

