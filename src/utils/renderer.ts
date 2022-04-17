// Link の Renderer
renderer.link = (href, title, text) => {
  const sanitizedUrl = sanitizeUrl(href ?? undefined);
  const ogpData = ogpDatas.find(
    (data) => data.ogUrl && href?.startsWith(data.ogUrl)
  );

  if ((text !== href && `${text}/` !== href) || !ogpData) {
    return `
      <a href="${sanitizedUrl}" target="_blanck" 
        ${title ? `title="${title}">` : ''}
      >${text}</a>`;
  }

  const { ogImage } = ogpData;
  const image = Array.isArray(ogImage) ? ogImage[0] : ogImage;

  const domain = getDomainFromUrl(ogpData?.ogUrl);

  return `
    <div class="og-container">
      <a href=${ogpData?.ogUrl} target="_blanck" class="og-link">
        <div class="MuiPaper-root MuiPaper-outlined MuiPaper-rounded og-card">
          <div class="og-thumbnail-container">
            <img src="${image?.url}" alt="${ogpData?.ogTitle}" class="og-thumbnail"/>
          </div>
          <div class="og-text-container">
            <h1 class="og-title">${ogpData?.ogTitle}</h1>
            <p class="MuiTypography-colorTextSecondary og-description">${ogpData?.ogDescription}</p>
            <div class="og-domain-container">
              <img src="https://www.google.com/s2/u/0/favicons?domain=${domain}" alt="${domain}"/>
              <div class="og-domain-name">${domain}</div>
            </div>
          </div>
        </div>
      </a>
    </div>`;
};