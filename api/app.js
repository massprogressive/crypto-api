// Import Coinmarketcap API key
import 'dotenv/config'
import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = process.env.PORT || 9999;

import tokens from './src/tokenlist.js';

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Allow requests from any origin
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  next();
});

app.get("/crypto", async (req, res) => {
  try {

    const apiKey = process.env.API_KEY
    const apiUrl = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=${tokens}&convert=USD`;
    const response = await fetch(apiUrl, {
      headers: {
        "X-CMC_PRO_API_KEY": apiKey,
      },
    });
    const data = await response.json();
    res.json(data);

  } catch (error) {

    console.error("Failed to fetch cryptocurrency prices:", error);
    res.status(500).json({ error: "Internal server error" });

  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
