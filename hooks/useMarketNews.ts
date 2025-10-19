import { useQuery } from "@tanstack/react-query";
import { newsApi } from "@/lib/api";

export const queryKeys = {
  marketNews: ["marketNews"] as const,
};

export const useMarketNews = () => {
  return useQuery({
    queryKey: queryKeys.marketNews,
    queryFn: newsApi.getMarketNews,
  });
};
