module.exports = {
  siteUrl: "https://bet626game.cc",
  generateRobotsTxt: true,
  changefreq: "daily",
  priority: 0.7,
  transform: async (config, url) => {
    if (url.includes("/blog")) {
      return {
        loc: url,
        lastmod: new Date().toISOString(),
        changefreq: "weekly",
        priority: 0.8,
      };
    }
    return {
      loc: url,
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 1.0,
    };
  },
};
