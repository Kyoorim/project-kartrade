import { useState, useEffect, createContext, useContext } from "react";
import { authService } from "../firebase";

interface User {
  id: string;
  name: string;
}

interface UserState {
  userObj: User | null;
  init: boolean;
  isLoggedIn: Object | null;
}

export const UserContext = createContext<UserState>({
  userObj: null,
  init: false,
  isLoggedIn: null,
});

export const useUser = () => useContext(UserContext);

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [userObj, setUserObj] = useState<User | null>(null);
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState<Object | null>(
    authService.currentUser
  );

  useEffect(() => {
    const unsubscribe = authService.onAuthStateChanged((firebaseUser) => {
      console.log(firebaseUser);
      if (firebaseUser) {
        const user = {
          id: firebaseUser.uid,
          name: firebaseUser.displayName || "",
        };
        setUserObj(user);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={{ userObj, init, isLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};
