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
  isItemInList: Record<number, boolean>;
};

type WishListAction =
  | { type: "ADD_ITEM"; payload: WishListItem; accountId?: string }
  | { type: "REMOVE_ITEM"; payload: number; accountId?: string }
  | { type: "SAVE_ITEM"; payload: WishListState; accountId?: string };

export const wishListReducer = (
  state: WishListState,
  action: WishListAction
): WishListState => {
  switch (action.type) {
    case "ADD_ITEM":
      const updatedItems = [...state.items, action.payload];
      const updatedIsItemInList = {
        ...state.isItemInList,
        [action.payload.itemId]: true,
      };
      window.localStorage.setItem(
        `wishList_${action.accountId}`,
        JSON.stringify({
          items: updatedItems,
          isItemInList: updatedIsItemInList,
        })
      );
      return {
        ...state,
        items: updatedItems,
        isItemInList: updatedIsItemInList,
      };
    case "REMOVE_ITEM":
      const removedItemId = action.payload;
      const filteredItems = state.items.filter(
        (item) => item.itemId !== removedItemId
      );
      window.localStorage.setItem(
        `wishList_${action.accountId}`,
        JSON.stringify({
          items: filteredItems,
          isItemInList: {
            ...state.isItemInList,
            [action.payload]: false,
          },
        })
      );
      return {
        ...state,
        items: filteredItems,
        isItemInList: {
          ...state.isItemInList,
          [action.payload]: false,
        },
      };

    case "SAVE_ITEM":
      console.log(action.payload);
      return action.payload;

    default:
      console.log(state);
      return state;
  }
};

export const WishListContext = createContext<{
  state: WishListState;
  dispatch: React.Dispatch<WishListAction>;
  accountId?: string;
}>({
  state: { items: [], isItemInList: {} },
  dispatch: () => null,
  accountId: undefined,
});

export const WishListProvider: FCC = ({ children }) => {
  const { userObj } = useContext(UserContext);
  const [state, dispatch] = useReducer(wishListReducer, {
    items: [],
    isItemInList: {},
  });

  useEffect(() => {
    const accountId = userObj ? userObj.id : undefined;
    const storedState = window.localStorage.getItem(`wishList_${accountId}`);
    const initialState = storedState
      ? JSON.parse(storedState)
      : { items: [], isItemInList: {} };

    if (initialState) {
      dispatch({ type: "SAVE_ITEM", payload: initialState });
    }
  }, [userObj?.id]);

  return (
    <WishListContext.Provider value={{ state, dispatch }}>
      {children}
    </WishListContext.Provider>
  );
};
