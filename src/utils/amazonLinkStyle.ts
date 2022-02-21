
const generateAmazonLink = (asin:string) => {
    return `https://amazon.co.jp/dp/${asin}?tag=${process.env.TAG}`
};
const amazonLinkStyle = (url:string, title:string, price:string,asin:string, dateFormat: string) => {
    return `<div class="amazon">
                <a href="${url}" class="productInfo" target="_blank">
                    <h2 class="title">${title}</h2>
                    <p class="externalLink">amazon.co.jp</p>
                    <p class="price">${price}<span class="date-format">${dateFormat}</span></p>
                </a>
                <a href="${url}" class="thumbnailImage" target="_blank">
                    <img src="https://images-na.ssl-images-amazon.com/images/P/${asin}.09.LZZZZZZZ.jpg" alt="" />
                </a>
            </div>`
} 

export {generateAmazonLink, amazonLinkStyle};