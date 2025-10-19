import React from "react";

export const NewsCardSkeleton = () => {
  return (
    <div className="p-4 flex flex-row max-sm:items-center max-sm:gap-4 sm:flex-col gap-2 animate-pulse">
      <div className="sm:w-full sm:h-[179px] size-[100px] bg-gray-700 rounded"></div>
      <div className="flex w-full flex-col gap-2">
        <div className="flex text-xs text-white/70 uppercase items-center justify-between">
          <div className="h-3 w-20 bg-gray-700 rounded"></div>
          <div className="h-3 w-16 bg-gray-700 rounded"></div>
        </div>
        <div className="h-10 w-full bg-gray-700 rounded"></div>
      </div>
    </div>
  );
};
