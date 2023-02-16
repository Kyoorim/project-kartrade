import { createContext, useReducer } from "react";

export type WishListItem = {
  itemId: number;
  name: string;
  description: string;
};

type WishListState = {
  items: WishListItem[];
};

type WishListAction =
  | { type: "ADD_ITEM"; payload: WishListItem }
  | { type: "REMOVE_ITEM"; payload: string };

export const initialState: WishListState = {
  items: [],
};

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
    default:
      return state;
  }
};

export const WishListContext = createContext<{
  state: WishListState;
  dispatch: React.Dispatch<WishListAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const WishListProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(wishListReducer, initialState);

  return (
    <WishListContext.Provider value={{ state, dispatch }}>
      {children}
    </WishListContext.Provider>
  );
};
