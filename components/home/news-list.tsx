"use client";

import { useMarketNews } from "@/hooks/useMarketNews";
import { NewsCardSkeleton } from "./news-card-skeleton";
import { NewsCard } from "./news-card";

export const NewsList = () => {
  const { data: marketNews, isLoading, isError } = useMarketNews();

  if (isLoading) {
    return (
      <div className="grid w-full max-w-[1340px] mx-auto max-[1093px]:grid-cols-3 grid-cols-4 max-[860px]:gap-x-0 max-md:grid-cols-2 max-sm:grid-cols-1 gap-x-6 sm:gap-y-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <NewsCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <h2 className="mt-[10px] max-w-[1340px] px-4 sm:text-xl text-base font-medium">
        Something went wrong. Please try again later.
      </h2>
    );
  }

  return (
    <div className="grid max-w-[1340px] mx-auto max-[1093px]:grid-cols-3 grid-cols-4 max-[860px]:gap-x-0 max-md:grid-cols-2 max-sm:grid-cols-1 gap-x-6 sm:gap-y-8">
      {marketNews?.map((item) => (
        <NewsCard key={item.id} {...item} />
      ))}
    </div>
  );
};
