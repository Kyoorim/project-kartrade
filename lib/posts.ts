import { dummyCardInfo } from "@/asset/dummyCardInfo";

export async function getPostIdList() {
  const cardInfo = dummyCardInfo;
  return cardInfo.map((card) => {
    return {
      params: {
        id: card.id,
      },
    };
  });
}

export async function getPostDetails(id: string) {
  const cardInfo = dummyCardInfo;

  return {
    id,
    ...(cardInfo[id] as {
      infoTitle: string;
      infoDetail: string;
      price: string;
      profileId: string;
    }),
  };
}
