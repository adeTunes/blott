const finnhub = require("finnhub");

export const finnhubClient = new finnhub.DefaultApi(process.env.FINNHUB_API_KEY);