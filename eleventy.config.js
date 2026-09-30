const { DateTime } = require("luxon");
const { feedPlugin } = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("_headers");

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  eleventyConfig.addFilter("absoluteUrl", (path) => {
    return new URL(path, "https://everythingsabr.me").href;
  });

  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom",                 // "rss" and "json" also work
    outputPath: "/feed.xml",
    collection: { name: "posts", limit: 20 },
    metadata: {
      language: "en",
      title: "everything sabr",
      subtitle: "me writing for me, no topic, no rules",
      base: "https://everythingsabr.me/",
      author: { name: "sabr" },
    },
  });

  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: ".",
      output: "_site",
    },
  };
};
