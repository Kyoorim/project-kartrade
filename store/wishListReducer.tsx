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
  | { type: "SAVE_ITEM"; payload: string; accountId?: string };

export function initialState(accountId?: string): WishListState {
  let defaultValue = { items: [], isItemInList: {} };

  if (typeof window !== "undefined") {
    const storedState = window.localStorage.getItem(`wishList_${accountId}`);

    if (storedState) {
      const parsedState = JSON.parse(storedState);
      return {
        items: parsedState.items,
        isItemInList: parsedState.isItemInList || {},
      };
    }
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
    case "SAVE_ITEM": {
      const storedState = window.localStorage.getItem(
        `wishList_${action.accountId}`
      );
      return storedState
        ? JSON.parse(storedState)
        : { items: [], isItemInList: {} };
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

  const [state, dispatch] = useReducer(
    wishListReducer,
    initialState(userObj ? userObj.id : undefined)
  );

  // useEffect(() => {
  //   if (userObj) {
  //     window.localStorage.setItem(
  //       `wishList_${userObj.id}`,
  //       JSON.stringify(state)
  //     );
  //   }
  // }, [state, userObj]);

  return (
    <WishListContext.Provider value={{ state, dispatch }}>
      {children}
    </WishListContext.Provider>
  );
};
