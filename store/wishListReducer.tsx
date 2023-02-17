import { createContext, useReducer, useEffect } from "react";

export type WishListItem = {
  itemId: number;
  name: string;
  description: string;
  userId?: string;
  mainImage: any;
  profileId: string;
  price: number;
};

type WishListState = {
  items: WishListItem[];
};

type WishListAction =
  | { type: "ADD_ITEM"; payload: WishListItem }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "SAVE_ITEM"; payload: string };

export function initialState(): WishListState {
  if (typeof window !== "undefined") {
    const storedState = window.localStorage.getItem("wishList");
    return storedState ? JSON.parse(storedState) : { items: [] };
  }
}

export const wishListReducer = (
  state: WishListState,
  action: WishListAction
): WishListState => {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.payload] };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.itemId !== action.payload),
      };
    case "SAVE_ITEM": {
      const storedState = window.localStorage.getItem("wishList");
      return storedState ? JSON.parse(storedState) : { items: [] };
    }
    default:
      return state;
  }
};

export const WishListContext = createContext<{
  state: WishListState;
  dispatch: React.Dispatch<WishListAction>;
}>({
  state: initialState(),
  dispatch: () => null,
});

export const WishListProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(wishListReducer, initialState());

  useEffect(() => {
    window.localStorage.setItem("wishList", JSON.stringify(state));
  }, [state]);

  return (
    <WishListContext.Provider value={{ state, dispatch }}>
      {children}
    </WishListContext.Provider>
  );
};
