const uCA = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "AA", "AB", "AC", "AD", "AE", "AF", "AG", "AH", "AI", "AJ", "AK", "AL", "AM", "AN", "AO", "AP", "AQ", "AR", "AS", "AT", "AU", "AV", "AW", "AX", "AY", "AZ"];

const api_call_link = '';

$.ajax({
    method: "GET",
    url: api_call_link,
    contentType: "application/json",
    success: function (result) {

      var sheet = Api.GetActiveSheet();
        let crypto = result.data;

        for (const [key, value] of Object.entries(crypto)) {
            let symbol = crypto[key].symbol;
            let price = crypto[key].quote.USD.price;
            console.log(symbol);
            switch (symbol) {
                case "ATOM":
                    sheet.GetRange(`C2`).SetValue(price);
                    break;
                case "ETH":
                    sheet.GetRange(`F2`).SetValue(price);
                    break;
                case "SOL":
                    sheet.GetRange(`I2`).SetValue(price);
                    break;
                case "NYM":
                    sheet.GetRange(`L2`).SetValue(price);
                    break;
                case "DYM":
                    sheet.GetRange(`O2`).SetValue(price);
                    break;
                case "DYDX":
                    sheet.GetRange(`R2`).SetValue(price);
                    break;
                case "SEI":
                    sheet.GetRange(`U2`).SetValue(price);
                    break;
                case "OSMO":
                    sheet.GetRange(`X2`).SetValue(price);
                    break;
                case "ARB":
                    sheet.GetRange(`AA2`).SetValue(price);
                    break;

                default:
		    console.log(`Nothing found for ${crypto[key].symbol}`);
            }
        }
    },
    error: function ajaxError(jqXHR) {
        console.error("Error: ", jqXHR.responseText);
    },
});
