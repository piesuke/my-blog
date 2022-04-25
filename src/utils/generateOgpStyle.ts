import { OgpData } from "./getOgpData";

const generateOgpStyle = (ogpProperties: OgpData) => {
  return `
  <div class="ogp">
        <a href="${ogpProperties.ogUrl}" class="ogp-url" target="_blank">
            <h2 class="title">${ogpProperties.ogTitle}</h2>
            <p class="desc">${ogpProperties.ogDescription}</p>
        </a>
        <a href="${ogpProperties.ogUrl}" class="thumbnailImage" target="_blank">
            <img src="${ogpProperties.ogImage}" alt="" />
        </a>
    </div>
  `;
};

export default generateOgpStyle;
