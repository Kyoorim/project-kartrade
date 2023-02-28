
import { useEffect } from "react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { hotjar } from "react-hotjar";
import { WishListProvider } from "@/store/wishListReducer";
import { UserProvider } from "@/store/userReducer";

const App = ({ Component, pageProps }: AppProps) => {
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
      <UserProvider>
        <WishListProvider>
          <Component {...pageProps} />
        </WishListProvider>
      </UserProvider>
    </>
  );
};

export default App;

