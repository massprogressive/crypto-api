**Crypto API**

**API call**

Node server wrapper in Docker container which gets actual prices for cryptocurrency utilizing CoinMarketCapAPI.

To run the server clone repository and paster your CoinMarketCapAPI in .env file
```
git clone https://github.com/massprogressive/crypto-api.git
cd api
mv .env.example .env
nano .env # paste api key
docker compose up -d
```

The result is accessible by the link http://server_ip:9999/crypto

If you need to utilize different port it can be changed in docker-compose.yml file.

**OnlyOffice**

Onlyoffice script which allows to intergrate price request to calculate current state of portfolio in the spreadsheet

To start using data from the call in the spreadsheet paste script in the OnlyOffice instance => Plugins => Macros
Chage variable `const api_call_link` with the link to server call
Depens on organazing your spreadsheet modify `sheet.GetRange(`**`).SetValue(price)` for particular token in the cell you need. Alphabet symbols is X coordinate and numbers are Y coordinate.

Click `Run`

https://notes.own-vision.com
