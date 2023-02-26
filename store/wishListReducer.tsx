import React, { createContext, useReducer, useEffect, useContext } from "react";
import { UserContext } from "@/store/userReducer";
import { FCC } from "@/types";

export type WishListItem = {
  itemId: number;
  name: string;
  description: string;
  userId?: string;
  mainImage: any;
  profileId: string;
  price: number;
  accountId: string;
};

type WishListState = {
  items: WishListItem[];
  isItemInList: Record<string, Record<number, boolean>>;
};

type WishListAction =
  | { type: "ADD_ITEM"; payload: WishListItem; accountId?: string }
  | { type: "REMOVE_ITEM"; payload: number; accountId?: string }
  | { type: "SAVE_ITEM"; payload: string; accountId?: string }
  | {
      type: "SET_IS_ITEM_IN_LIST";
      payload: { itemId: number; value: boolean };
      accountId?: string;
    };

export function initialState(accountId?: string): WishListState {
  let defaultValue = { items: [], isItemInList: {} };

  if (typeof window !== "undefined") {
    const storedState = window.localStorage.getItem(`wishList_${accountId}`);
    console.log(storedState);
    return storedState ? JSON.parse(storedState) : defaultValue;
  }

  return defaultValue;
}

export const wishListReducer = (
  state: WishListState,
  action: WishListAction
): WishListState => {
  switch (action.type) {
    case "ADD_ITEM":
      const updatedItems = [...state.items, action.payload];
      window.localStorage.setItem(
        `wishList_${action.accountId}`,
        JSON.stringify({ items: updatedItems })
      );
      return {
        ...state,
        items: updatedItems,
        isItemInList: {
          ...state.isItemInList,
          [action.payload.itemId]: true, //
        },
      };
    case "REMOVE_ITEM":
      const filteredItems = state.items.filter(
        (item) => item.itemId !== action.payload
      );
      window.localStorage.setItem(
        `wishList_${action.accountId}`,
        JSON.stringify({ items: filteredItems })
      );
      return {
        ...state,
        items: filteredItems,
        isItemInList: {
          ...state.isItemInList,
          [action.payload]: false,
        },
      };
    case "SAVE_ITEM": {
      const storedState = window.localStorage.getItem(
        `wishList_${action.accountId}`
      );
      return storedState ? JSON.parse(storedState) : { items: [] };
    }
    case "SET_IS_ITEM_IN_LIST": {
      return {
        ...state,
        isItemInList: {
          ...state.isItemInList,
          [action.payload.itemId]: action.payload.value,
        },
      };
    }
    default:
      return state;
  }
};

export const WishListContext = createContext<{
  state: WishListState;
  dispatch: React.Dispatch<WishListAction>;
  accountId?: string;
}>({
  state: initialState(),
  dispatch: () => null,
});

export const WishListProvider: FCC = ({ children }) => {
  const { userObj } = useContext(UserContext);
  console.log(userObj, "userEffect");

  const [state, dispatch] = useReducer(
    wishListReducer,
    initialState(userObj?.id)
    // initialState(accountId)
  );

  useEffect(() => {
    if (userObj?.id) {
      // if (accountId) {
      window.localStorage.setItem(
        `wishList_${userObj?.id}`,
        // `wishList_${accountId}`,
        JSON.stringify(state)
      );
    }
  }, [state]);

  return (
    <WishListContext.Provider value={{ state, dispatch }}>
      {children}
    </WishListContext.Provider>
  );
};
