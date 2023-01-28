import { dummyCardInfo } from "@/asset/dummyCardInfo";

export function getPostIdList() {
  return dummyCardInfo.map((card) => {
    return {
      params: {
        id: card.id,
      },
    };
  });
}

export function getPostDetails(id: string) {
  return {
    ...dummyCardInfo[parseInt(id) - 1],
    id,
  };
}
