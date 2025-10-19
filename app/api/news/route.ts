import { finnhubClient } from "@/lib/finhub";
import { NextResponse } from "next/server";

export async function GET(): Promise<Response> {
  return new Promise<Response>((resolve) => {
    finnhubClient.marketNews(
      "general",
      {},
      (error: Error | null, data: unknown) => {
        if (error) {
          console.error("Error fetching market news:", error);
          resolve(
            NextResponse.json(
              { error: "Failed to fetch market news" },
              { status: 500 }
            )
          );
        } else {
          resolve(NextResponse.json(data));
        }
      }
    );
  });
}
