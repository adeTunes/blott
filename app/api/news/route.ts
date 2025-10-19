import { finnhubClient } from "@/lib/finhub";
import { NextResponse } from "next/server";

export async function GET() {
  return new Promise((resolve) => {
    finnhubClient.marketNews(
      "general",
      {},
      (error: any, data: any, response: any) => {
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
