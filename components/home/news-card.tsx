import { images } from "@/lib/assets";
import Image from "next/image";
import React, { useState } from "react";

const formatDate = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const NewsCard = (item: MarketNews) => {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  return (
    <a
      target="_blank"
      key={item.id}
      href={item.url}
      className="p-4 flex flex-row max-sm:items-center max-sm:gap-4 sm:flex-col gap-2 hover:bg-white/5 transition-colors rounded-lg"
    >
      <div className="relative sm:w-full sm:h-[179px] size-[100px] rounded overflow-hidden">
        {imageLoading && (
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10 animate-pulse rounded overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
          </div>
        )}

        <Image
          src={imageError ? images.news1.src : item.image}
          className={`sm:w-full sm:h-[179px] size-[100px] object-cover rounded transition-opacity duration-300 ${
            imageLoading ? "opacity-0" : "opacity-100"
          }`}
          alt={item.headline}
          width={300}
          height={200}
          onLoad={() => setImageLoading(false)}
          onError={() => {
            setImageError(true);
            setImageLoading(false);
          }}
        />
      </div>

      <div className="flex w-full flex-col gap-2">
        <div className="flex text-xs text-white/70 uppercase items-center justify-between">
          <p>{item.source}</p>
          <p>{formatDate(item.datetime)}</p>
        </div>
        <h2 className="text-xl font-medium line-clamp-3">{item.headline}</h2>
        {item.summary && (
          <p className="text-sm text-white/60 line-clamp-2">{item.summary}</p>
        )}
      </div>
    </a>
  );
};
