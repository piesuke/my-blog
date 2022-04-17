const getFloatingUrls = (md: string): string[] => {
  const regFloatUrl =
    /(?<!\()https?:\/\/[-_.!~*\\'()a-zA-Z0-9;\\/?:\\@&=+\\$,%#]+(?!=https:\/\/www.amazon.co.jp\/.*(?=<\/p>))/g;
  const floatUrls = md.match(regFloatUrl);

  return floatUrls ?? [];
};

export default getFloatingUrls;
