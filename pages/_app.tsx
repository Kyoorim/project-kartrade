import { useEffect } from "react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { hotjar } from "react-hotjar";
import { WishListProvider } from "@/store/wishListReducer";
import { UserProvider } from "@/store/userReducer";

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    hotjar.initialize(3341604, 6);
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
