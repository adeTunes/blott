// eslint-disable-next-line @typescript-eslint/no-require-imports
const finnhub = require("finnhub");

const apiKey = process.env.FINNHUB_API_KEY || "hebcbeibcbewy38e793i";
export const finnhubClient = new finnhub.DefaultApi(apiKey);