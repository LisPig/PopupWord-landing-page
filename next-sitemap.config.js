/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.popupword.com",
  generateRobotsTxt: true,
  sitemapSize: 7000
};
