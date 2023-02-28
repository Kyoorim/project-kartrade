import { useState, useEffect, createContext, useContext } from "react";
import { authService } from "../firebase";

interface User {
  id: string;
  name: string;
}

interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const UserContext = createContext<UserState>({
  user: null,
  loading: false,
  error: null,
});

export const useUser = () => useContext(UserContext);

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = authService.onAuthStateChanged(
      (firebaseUser) => {
        if (firebaseUser) {
          const user = {
            id: firebaseUser.uid,
            name: firebaseUser.displayName || "",
          };
          setUser(user);
          setLoading(false);
        } else {
          setUser(null);
          setLoading(false);
        }
      },
      (firebaseError) => {
        setError(firebaseError.message);
      }
    );

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={{ user, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};
