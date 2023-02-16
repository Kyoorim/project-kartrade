import { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { hotjar } from "react-hotjar";
import { authService } from "@/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { WishListProvider } from "@/store/wishListReducer";

const App = ({ Component, pageProps }: AppProps) => {
  const [init, setInit] = useState<Boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<Object | null>(
    authService.currentUser
  );

  const [userObj, setUserObj] = useState<Object | null>(null);

  useEffect(() => {
    hotjar.initialize(3341604, 6);
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
        });
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, [isLoggedIn]);
  return (
    <>
      {init ? (
        <WishListProvider>
          <Component {...pageProps} isLoggedIn={isLoggedIn} userObj={userObj} />
        </WishListProvider>
      ) : (
        "Loading..."
      )}
    </>
  );
};

export default App;
