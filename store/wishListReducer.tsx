import { createContext, useReducer, useEffect } from "react";

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
  | { type: "ADD_ITEM"; payload: WishListItem; accountId: string }
  | { type: "REMOVE_ITEM"; payload: number; accountId: string }
  | { type: "SAVE_ITEM"; payload: string; accountId: string }
  | {
      type: "SET_IS_ITEM_IN_LIST";
      payload: { itemId: number; value: boolean };
      accountId: string;
    };

export function initialState(accountId: string): WishListState {
  if (typeof window !== "undefined") {
    const storedState = window.localStorage.getItem(`wishList_${accountId}`);
    return storedState
      ? JSON.parse(storedState)
      : { items: [], isItemInList: {} };
  } else {
    return { items: [], isItemInList: {} };
  }
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
}>({
  state: initialState(""),
  dispatch: () => null,
});

export const WishListProvider: React.FC<{ accountId: string }> = ({
  children,
  accountId,
}) => {
  const [state, dispatch] = useReducer(
    wishListReducer,
    initialState(accountId)
  );

  useEffect(() => {
    const accountId = state.items[0]?.userId;
    if (accountId) {
      window.localStorage.setItem(
        `wishList_${accountId}`,
        JSON.stringify(state)
      );
    }
    console.log(state);
  }, [state]);

  return (
    <WishListContext.Provider value={{ state, dispatch }}>
      {children}
    </WishListContext.Provider>
  );
};
