import client from 'cheerio-httpcli'

export const getAmazonInfo = (url:string) => {
    return new Promise(function (resolve, reject) {
        client.fetch(url, function(err, $, res,) {
        // レスポンスヘッダを参照
        console.log(res.headers);
        const productTitle = $('#productTitle').text();
        const productPrice = $('.a-color-price').first().text();
        console.log(productPrice)
        resolve({
            productTitle: productTitle,
            productPrice: productPrice
        })
    })
    })
}
