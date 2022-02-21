import client from 'cheerio-httpcli'

export const getAmazonInfo = (url:string) => {
    return new Promise(function (resolve, reject) {
        client.fetch(url, function(err, $, res,) {
        // レスポンスヘッダを参照
        console.log(res.headers);
        const productTitle = $('#productTitle').text();
        const productPrice = $('.a-color-price').first().text();
        const parseDate = Date.parse(res.headers.date!)
        const newDate = new Date(parseDate)
        const year = newDate.getFullYear()
        const month = newDate.getMonth() + 1
        const date = newDate.getDate()
        console.log(year, "year", month, "month", date, "date")
        const dateFormat = '(' + year + '年' + month + '月' + + date + '日 現在)';
        resolve({
            productTitle: productTitle,
            productPrice: productPrice,
            dateFormat: dateFormat
        })
    })
    })
}
